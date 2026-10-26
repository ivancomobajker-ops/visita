import { NextRequest } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

// Leads are appended to a local JSON Lines file (one request per line).
// Override the location with LEADS_FILE if the app directory is read-only.
const LEADS_FILE = process.env.LEADS_FILE || path.join(process.cwd(), "data", "leads.jsonl");

async function saveLead(lead: Record<string, string>) {
  try {
    await mkdir(path.dirname(LEADS_FILE), { recursive: true });
    await appendFile(LEADS_FILE, JSON.stringify(lead) + "\n", "utf8");
    return true;
  } catch (err) {
    console.error("Failed to save lead to file:", err);
    return false;
  }
}

async function sendToTelegram(text: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return false;

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
    });
    if (!res.ok) console.error("Telegram API error:", await res.text());
    return res.ok;
  } catch (err) {
    console.error("Telegram request failed:", err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
  const { phone, email, company } = (body ?? {}) as Record<string, unknown>;

  // Basic validation
  if (!phone || typeof phone !== "string" || !email || typeof email !== "string") {
    return Response.json({ error: "Phone and email are required" }, { status: 400 });
  }

  // Sanitize — strip anything dangerous
  const safe = (s: string) => s.replace(/[<>&"'`]/g, "").slice(0, 200);

  const lead = {
    date: new Date().toISOString(),
    phone: safe(phone),
    email: safe(email),
    company: typeof company === "string" ? safe(company) : "",
  };

  const text = [
    "🔔 *Нова заявка — Visita*",
    "",
    `📱 Телефон: ${lead.phone}`,
    `📧 E-mail: ${lead.email}`,
    lead.company ? `🏢 Компанія: ${lead.company}` : "",
    "",
    `🕐 ${new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })}`,
  ]
    .filter(Boolean)
    .join("\n");

  const [saved, sent] = await Promise.all([saveLead(lead), sendToTelegram(text)]);

  // Last-resort copy in the server log, so a lead is never lost silently.
  if (!saved && !sent) console.log("Lead received:", JSON.stringify(lead));

  return Response.json({ ok: true });
}

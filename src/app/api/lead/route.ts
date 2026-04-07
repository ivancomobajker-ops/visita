import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { phone, email, company } = await req.json();

  // Basic validation
  if (!phone || typeof phone !== "string" || !email || typeof email !== "string") {
    return Response.json({ error: "Phone and email are required" }, { status: 400 });
  }

  // Sanitize — strip anything dangerous
  const safe = (s: string) => s.replace(/[<>&"'`]/g, "").slice(0, 200);

  const text = [
    "🔔 *Нова заявка — Visita*",
    "",
    `📱 Телефон: ${safe(phone)}`,
    `📧 E-mail: ${safe(email)}`,
    company ? `🏢 Компанія: ${safe(company)}` : "",
    "",
    `🕐 ${new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })}`,
  ]
    .filter(Boolean)
    .join("\n");

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set");
    return Response.json({ error: "Server config error" }, { status: 500 });
  }

  const tgRes = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!tgRes.ok) {
    console.error("Telegram API error:", await tgRes.text());
    return Response.json({ error: "Failed to send" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

import Link from "next/link";
import { COMPANY, SITE_URL } from "@/lib/company";
import { localePath } from "@/i18n/config";

// English translation of TermsUk. Keep the two in sync.
export default function TermsEn() {
  return (
    <>
      <section>
        <h2>1. General provisions</h2>
        <p>
          These terms govern the use of the website{" "}
          <a href={`${SITE_URL}/`}>{SITE_URL.replace("https://", "")}</a> (the &quot;Website&quot;).
          The Website belongs to {COMPANY.fullName} ({COMPANY.latinName}, EDRPOU code{" "}
          {COMPANY.edrpou}), which is the owner and operator of the {COMPANY.brand} platform. See
          the <Link href={localePath("en", "/company")}>About the company</Link> page for details.
        </p>
        <p>By using the Website, you agree to these terms.</p>
      </section>

      <section>
        <h2>2. Purpose of the Website</h2>
        <p>
          The Website provides information about {COMPANY.brand}, an online platform for booking
          services, and lets you submit a request to get started. Information about features and
          prices is provided for reference only and is not a public offer. The terms of access to
          the platform are agreed with you separately when you get started.
        </p>
      </section>

      <section>
        <h2>3. Requests and personal data</h2>
        <p>
          By submitting a request, you confirm that the data you provide is yours or that you have
          the right to provide it. How we process data is described in the{" "}
          <Link href={localePath("en", "/privacy")}>Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>4. Intellectual property</h2>
        <p>
          The {COMPANY.brand} name and logo, and the texts and design of the Website, belong to{" "}
          {COMPANY.shortName} or are used on lawful grounds. Copying or using them without our
          consent is not permitted, except where allowed by law.
        </p>
      </section>

      <section>
        <h2>5. Links to other websites</h2>
        <p>
          The Website may contain links to third-party resources, such as state registers or social
          networks. We are not responsible for their content or policies.
        </p>
      </section>

      <section>
        <h2>6. Liability</h2>
        <p>
          We strive to keep the information on the Website up to date, but we do not guarantee its
          completeness or the uninterrupted operation of the Website. To the extent permitted by
          law, we are not liable for any losses related to the use of the Website.
        </p>
      </section>

      <section>
        <h2>7. Governing law</h2>
        <p>These terms are governed by the laws of Ukraine.</p>
      </section>

      <section>
        <h2>8. Changes and contacts</h2>
        <p>
          We may update these terms. The current version is always available on this page. For any
          questions, write to <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
        </p>
      </section>
    </>
  );
}

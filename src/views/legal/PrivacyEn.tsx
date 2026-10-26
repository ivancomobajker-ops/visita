import Link from "next/link";
import { COMPANY, SITE_URL } from "@/lib/company";
import { localePath } from "@/i18n/config";

// English translation of PrivacyUk. Keep the two in sync.
export default function PrivacyEn() {
  const mail = <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;

  return (
    <>
      <section>
        <h2>1. Who processes your data</h2>
        <p>
          The controller of personal data received through the website{" "}
          <a href={`${SITE_URL}/`}>{SITE_URL.replace("https://", "")}</a> (the &quot;Website&quot;)
          is {COMPANY.fullName} ({COMPANY.latinName}, EDRPOU code {COMPANY.edrpou}), registered
          address: {COMPANY.address.full}. The company is the owner and operator of the{" "}
          {COMPANY.brand} platform. See the <Link href={localePath("en", "/company")}>About the company</Link> page
          for details.
        </p>
        <p>For any questions about your data, write to {mail}.</p>
      </section>

      <section>
        <h2>2. What data we receive</h2>
        <p>Through the request form on the Website you may provide:</p>
        <ul>
          <li>your phone number;</li>
          <li>your email address;</li>
          <li>your company name (optional).</li>
        </ul>
        <p>
          In addition, like any website, the web server automatically records technical request
          data: IP address, browser type, page address and time of access.
        </p>
      </section>

      <section>
        <h2>3. Why we use the data</h2>
        <ul>
          <li>to contact you about your request and about getting started with {COMPANY.brand};</li>
          <li>to answer your questions;</li>
          <li>technical data — to keep the Website running and secure.</li>
        </ul>
        <p>We do not use your data for advertising and do not sell it to third parties.</p>
      </section>

      <section>
        <h2>4. Legal basis for processing</h2>
        <p>
          We process the data from the form on the basis of the consent you give by submitting a
          request, in accordance with the Law of Ukraine &quot;On Personal Data Protection&quot;.
          You can withdraw your consent at any time by writing to {mail}.
        </p>
      </section>

      <section>
        <h2>5. Who the data may be shared with</h2>
        <p>
          The data is available only to employees of {COMPANY.shortName} who handle requests. The
          team may use the Telegram messenger to receive requests. We disclose data to public
          authorities only in cases expressly provided for by the laws of Ukraine.
        </p>
      </section>

      <section>
        <h2>6. Cookies and analytics</h2>
        <p>
          The Website does not use advertising or analytics cookies and does not include
          third-party tracking systems.
        </p>
      </section>

      <section>
        <h2>7. Retention period</h2>
        <p>
          We keep request data for as long as needed to handle the request and for any further
          cooperation, or until you withdraw your consent, after which we delete it unless the law
          requires otherwise.
        </p>
      </section>

      <section>
        <h2>8. Your rights</h2>
        <p>
          Under Article 8 of the Law of Ukraine &quot;On Personal Data Protection&quot;, you have
          the right, in particular:
        </p>
        <ul>
          <li>to know what data of yours we process, for what purpose and where it is stored;</li>
          <li>to access your data;</li>
          <li>to request correction or deletion of your data;</li>
          <li>to withdraw your consent to processing;</li>
          <li>
            to file a complaint with the Ukrainian Parliament Commissioner for Human Rights or with
            a court.
          </li>
        </ul>
        <p>To exercise these rights, write to {mail}.</p>
      </section>

      <section>
        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy. The current version is always available on this page, and the
          date of the latest changes is shown at the top.
        </p>
      </section>
    </>
  );
}

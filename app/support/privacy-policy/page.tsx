import type { Metadata } from "next";
import { montserrat } from "../../fonts";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and acceptable use guidelines for Royallix's website and services.",
};

export default function PrivacyPolicy() {
  return (
    <div className={`${montserrat.className} bg-white`}>
      <article className="mx-auto max-w-[900px] px-6 pb-16 pt-[72px] md:px-10 md:pb-24 md:pt-24">
        <h1
          className="mb-10 text-center text-[2.25rem] font-bold leading-tight tracking-[-0.01em] md:mb-14 md:text-[2.75rem]"
          style={{ color: "#001528" }}
        >
          Privacy Policy
        </h1>

        <div
          className="space-y-5 text-[15px] font-light leading-[1.85] md:text-[16px]"
          style={{ color: "#1a2a3a" }}
        >
          <p>
            This acceptable use policy (&quot;Policy&quot;) sets forth the
            general guidelines and acceptable and prohibited uses of the
            royallix.co website (&quot;Website&quot; or &quot;Service&quot;) and
            any of its related products and services (collectively,
            &quot;Services&quot;). This Policy is a legally binding agreement
            between you (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;)
            and Royallix (&quot;Royallix&quot;, &quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;). If you are entering into this Policy on behalf of
            a business or other legal entity, you represent that you have the
            authority to bind such entity to this Policy, in which in this case,
            the terms &quot;User&quot;, &quot;you&quot; or &quot;your&quot;
            shall refer to such entity. If you do not have such authority, or if
            you do not agree with the terms of this Policy, you must not accept
            this Policy and may not access and use the Website and Services. By
            accessing and using the Website and Services, you acknowledge that
            you have read, understood, and agree to be bound by the terms of
            this Policy. You acknowledge that this Policy is a contract between
            you and Royallix, even though it is electronic and is not physically
            signed by you, and it governs your use of the Website and Services.
          </p>

          <Section title="Prohibited Activities and Uses">
            <p>
              You may not use the Website and Services to publish content or
              engage in activity that is illegal under applicable law, that is
              harmful to others, or that would subject us to liability,
              including without limitation in connection with any of the
              following, each of which is prohibited under this Policy:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Distributing malware or other malicious code.</li>
              <li>
                Disclosing sensitive personal information about others.
              </li>
              <li>
                Collecting, or attempting to collect, personal information about
                third parties without their knowledge or consent.
              </li>
              <li>Distributing pornography or adult related content.</li>
              <li>
                Promoting or facilitating prostitution or any escort services.
              </li>
              <li>
                Hosting, distributing, or linking to child pornography or
                content that is harmful to minors.
              </li>
              <li>
                Promoting or facilitating gambling and violence. Terrorist
                activities or selling weapons or ammunition.
              </li>
              <li>
                Engaging in the unlawful distribution of controlled substances,
                drug contraband or prescription medications.
              </li>
              <li>
                Managing payment aggregators or facilitators such as processing
                payments on behalf of other businesses or charities.
              </li>
              <li>
                Facilitating pyramid schemes or other models intended to seek
                payments from public actors.
              </li>
              <li>
                Threatening harm to persons or property or otherwise harassing
                behavior.
              </li>
              <li>
                Infringing the intellectual property or other proprietary rights
                of others.
              </li>
              <li>
                Facilitating, aiding, or encouraging any of the above activities
                through the Website and Services.
              </li>
            </ul>
          </Section>

          <Section title="System Abuse">
            <p>
              Any User in violation of the Website and Services security is
              subject to criminal and civil liability, as well as immediate
              account termination. Examples include, but are not limited to the
              following:
            </p>
            <ul className="list-none space-y-2 pl-6">
              <li>
                Use or distribution of tools designed to compromise security of
                the Website and Services.
              </li>
              <li>
                Intentionally or negligently transmitting files containing a
                computer virus or corrupted data.
              </li>
              <li>
                Accessing another network without permission, including to probe
                or scan for vulnerabilities or breach security or authentication
                measures.
              </li>
              <li>
                Unauthorized scanning or monitoring of data on any network or
                system without proper authorization of the owner of the system
                or network.
              </li>
            </ul>
          </Section>

          <Section title="Service Resources">
            <p>
              You may not consume excessive amounts of the resources of the
              Website and Services or use the Website and Services in any way
              which results in performance issues or which interrupts the
              Services for other Users. Prohibited activities that contribute to
              excessive use, include without limitation:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Deliberate attempts to overload the Website and Services and
                broadcast attacks (i.e. denial of service attacks).
              </li>
              <li>
                Engaging in any other activities that degrade the usability and
                performance of the Website and Services.
              </li>
            </ul>
          </Section>

          <Section title="No Spam Policy">
            <p>
              You may not use the Website and Services to send spam or bulk
              unsolicited messages. We maintain a zero-tolerance policy for use
              of the Website and Services in any manner associated with the
              transmission, distribution or delivery of any bulk e-mail,
              including unsolicited bulk or unsolicited commercial e-mail, or
              the sending, assisting, or commissioning the transmission of
              commercial e-mail that does not comply with the U.S. CAN-SPAM Act
              of 2003 (&quot;SPAM&quot;).
            </p>
            <p>
              Your products or services advertised via SPAM (i.e. Spamvertised)
              may not be used in conjunction with the Website and Services. This
              provision includes, but is not limited to, SPAM sent via fax,
              phone, postal mail, email, instant messaging, or newsgroups.
            </p>
          </Section>

          <Section title="Data Privacy">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                We do not share or sell SMS opt-in, or phone numbers for the
                purpose of SMS.
              </li>
              <li>
                SMS consent and phone number will never be shared, sold, or
                disclosed to any third party for marketing purposes.
              </li>
            </ul>
          </Section>

          <Section title="Defamation and Objectionable Content">
            <p>
              We value the freedom of expression and encourage Users to be
              respectful with the content they post. We are not a publisher of
              User content and are not in a position to investigate the veracity
              of individual defamation claims or to determine whether certain
              material, which we may find objectionable, should be censored.
              However, we reserve the right to moderate, disable or remove any
              content to prevent harm to others or us or the Website and
              Services, as determined in our sole discretion.
            </p>
          </Section>

          <Section title="Copyrighted Content">
            <p>
              Copyrighted material must not be published via the Website and
              Services without the explicit permission of the copyright owner or
              a person explicitly authorized to give such permission by the
              copyright owner. Upon receipt of a claim for copyright
              infringement, or a notice of such violation, we will immediately
              run a full investigation and, upon confirmation, will notify the
              person or persons responsible for publishing it and, in our sole
              discretion, will remove the infringing material from the Website
              and Services. We may terminate the Service of Users with repeated
              copyright infringements. Further procedures may be carried out if
              necessary. We will assume no liability to any User of the Website
              and Services for the removal of any such material. If you believe
              your copyright is being infringed by a person or persons using the
              Website and Services, please get in touch with us to report
              copyright infringement.
            </p>
          </Section>

          <Section title="Security">
            <p>
              You take full responsibility for maintaining reasonable security
              precautions for your account. You are responsible for protecting
              and updating any login account provided to you for the Website and
              Services.
            </p>
          </Section>

          <Section title="Enforcement">
            <p>
              We reserve our right to be the sole arbiter in determining the
              seriousness of each infringement and to immediately take
              corrective actions, including but not limited to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suspending or terminating your Service with or without notice
                upon any violation of this Policy. Any violations may also
                result in the immediate suspension or termination of your
                account.
              </li>
              <li>
                Disabling or removing any content which is prohibited by this
                Policy, including to prevent harm to others or us or the Website
                and Services, as determined by us in our sole discretion.
              </li>
              <li>
                Reporting violations to law enforcement as determined by us in
                our sole discretion.
              </li>
              <li>
                A failure to respond to an email from our abuse team within 2
                days, or as otherwise specified in the communication to you,
                may result in the suspension or termination of your account.
              </li>
            </ul>
            <p>
              Suspended and terminated User accounts due to violations will not
              be re-activated. A backup of User&apos;s data may be requested,
              however, we may not be able to provide you with such backup, and
              as such, you are strongly encouraged to take your own backups.
            </p>
            <p>
              Nothing contained in this Policy shall be construed to limit our
              actions or remedies in any way with respect to any of the
              prohibited activities. In addition, we reserve at all times all
              rights and remedies available to us with respect to such
              activities at law or in equity.
            </p>
          </Section>

          <Section title="Reporting Violations">
            <p>
              If you have discovered and would like to report a violation of
              this Policy, please contact us immediately. We will investigate
              the situation and provide you with full assistance.
            </p>
          </Section>

          <Section title="Changes and Amendments">
            <p>
              We reserve the right to modify this Policy or its terms related to
              the Website and Services at any time at our discretion. When we
              do, we will revise the updated date at the bottom of this page,
              post a notification on the main page of the Website, send you an
              email to notify you. We may also provide notice to you in other
              ways at our discretion, such as through the contact information
              you have provided.
            </p>
            <p>
              An updated version of this Policy will be effective immediately
              upon the posting of the revised Policy unless otherwise specified.
              Your continued use of the Website and Services after the effective
              date of the revised Policy (or such other act specified at that
              time) will constitute your consent to those changes.
            </p>
          </Section>

          <Section title="Acceptance of this Policy">
            <p>
              You acknowledge that you have read this Policy and agree to all
              its terms and conditions. By accessing and using the Website and
              Services you agree to be bound by this Policy. If you do not agree
              to abide by the terms of this Policy, you are not authorized to
              access or use the Website and Services. This policy has been
              created with the help of the acceptable use policy generator.
            </p>
          </Section>
        </div>
      </article>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5 pt-6 md:pt-8">
      <h2
        className="text-[1.5rem] font-bold leading-snug md:text-[1.75rem]"
        style={{ color: "#001528" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

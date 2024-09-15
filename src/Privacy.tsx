import { useEffect } from "react";
import { Helmet } from "react-helmet";
// eslint-disable-next-line react-refresh/only-export-components
export const scrollWithOffset = (id: string) => {
  const yOffset = -100;
  const element = document.getElementById(id);
  if (element) {
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
const Privacy = () => {
  useEffect(() => {
    scrollWithOffset("privacy");
  }, []);
  return (
    <div id="privacy" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Helmet>
        <title>Privacy Policy - INotary</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how INotary handles your data."
        />
        <meta name="keywords" content="Privacy, Data Protection, INotary" />
        <meta property="og:title" content="Privacy Policy - INotary" />
        <meta
          property="og:description"
          content="Learn about how INotary protects your privacy and handles your data."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy describes how Iwork,LLC ("we", "our", or "us")
        collects, uses, and shares personal information of users of the Inotary
        mobile application (the "App"). This Privacy Policy applies to the App
        and all related services we offer.
      </p>
      <h2>1. Information We Collect</h2>
      <ol type="a">
        <li>
          Personal Information: We collect personal information you provide to
          us when you use the App, including but not limited to:
          <ol type="i">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Payment information (e.g., credit card details)</li>
            <li>Documents for notarization (in case of online notary)</li>
          </ol>
        </li>
        <li>
          Usage Information: We may also collect information about how you use
          the App, including your interactions with notary agents, your location
          data, device information, and log information.
        </li>
        <li>
          Sensitive Information: We may collect sensitive information such as
          identification documents for notarization purposes. We will only
          collect and process sensitive information with your explicit consent
          and in accordance with applicable laws.
        </li>
      </ol>
      <h2>2. How We Use Your Information </h2>
      <p>
        We may use the information we collect for various purposes, including
        to:
      </p>
      <ol type="a">
        <li>Provide and maintain the App;</li>
        <li>
          Facilitate notary services, including connecting you with notary
          agents;
        </li>
        <li>Process your payments for notary services;</li>
        <li>Verify your identity for notarization purposes;</li>
        <li>
          Communicate with you, including responding to your inquiries and
          providing customer support;
        </li>
        <li>Personalize your experience with the App;</li>
        <li>
          Detect, prevent, and address technical issues and security incidents;
        </li>
        <li>Comply with legal obligations.</li>
      </ol>
      <h2>3. Sharing Your Information</h2>
      <p>
        We may share your personal information in the following circumstances:
      </p>
      <ol type="a">
        <li>With notary agents to facilitate notary services;</li>
        <li>
          With service providers who assist us in operating the App and
          providing notary services (e.g., payment processors, cloud storage
          providers);
        </li>
        <li>
          In response to legal process or a request from law enforcement or
          regulatory authorities;
        </li>
        <li>
          To protect our rights, property, or safety, or the rights, property,
          or safety of others;
        </li>
        <li>With your consent or at your direction.</li>
      </ol>
      <h2>4. Data Retention</h2>
      <p>
        We will retain your personal information for as long as necessary to
        fulfill the purposes outlined in this Privacy Policy, unless a longer
        retention period is required or permitted by law. We may also retain and
        use your information to comply with our legal obligations, resolve
        disputes, and enforce our agreements.
      </p>
      <h2>5. Security</h2>
      <p>
        We take reasonable measures to protect the security of your personal
        information against unauthorized access, disclosure, alteration, and
        destruction. However, no method of transmission over the internet or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>
      <h2>6. Your Choices</h2>
      <p>
        You may access and update your personal information through the App. You
        may also choose to delete your account and personal information from the
        App, subject to certain limitations. If you choose to delete your
        account, we may retain certain information as required by law or for
        legitimate business purposes.
      </p>
      <h2>7. Children's Privacy</h2>
      <p>
        The App is not intended for use by children under the age of 13. We do
        not knowingly collect personal information from children under the age
        of 13 without parental consent. If you believe that we have collected
        personal information from a child under the age of 13 without parental
        consent, please contact us immediately so that we can take appropriate
        action.
      </p>
      <h2>8. Marketing Communications</h2>
      <p>
        We may send you marketing communications about our products and
        services, or those of third parties, that we think may be of interest to
        you. You may opt out of receiving these communications at any time by
        following the instructions provided in the communication or by
        contacting us directly.
      </p>
      <h2>9. Third-Party Links and Services</h2>
      <p>
        The App may contain links to third-party websites or services that are
        not owned or controlled by us. We are not responsible for the privacy
        practices or content of these third-party sites or services. We
        encourage you to review the privacy policies of any third-party sites or
        services before providing any personal information.
      </p>
      <h2>10. International Data Transfers</h2>
      <p>
        Your personal information may be transferred to and processed in
        countries other than the one in which you reside. These countries may
        have data protection laws that are different from those of your country.
        By using the App, you consent to the transfer of your personal
        information to these countries.
      </p>
      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
      </p>
      <h2>12. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at [contact information].
      </p>
      <h2>13. Cookies and Similar Technologies</h2>
      <p>
        We may use cookies, web beacons, and similar tracking technologies to
        collect information about your interactions with the App and to improve
        our services. You can control the use of cookies through your browser
        settings and other tools, but please note that disabling cookies may
        affect your ability to use certain features of the App.
      </p>
      <h2>14. User Generated Content</h2>
      <p>
        If you submit any content to the App, such as reviews or comments, we
        may collect and store that content. By submitting content to the App,
        you grant us the right to use, modify, reproduce, and distribute that
        content for any purpose, including promotional and marketing purposes.
      </p>
      <h2>15. Data Subject Rights</h2>
      <p>
        Depending on your jurisdiction, you may have certain rights regarding
        your personal information, such as the right to access, correct, or
        delete your data. If you wish to exercise any of these rights, please
        contact us using the contact information provided in this Privacy
        Policy.
      </p>
      <h2>16. Data Protection Officer</h2>
      <p>
        We have appointed a Data Protection Officer ("DPO") to oversee our data
        protection efforts and ensure compliance with applicable data protection
        laws. You may contact the DPO with any questions or concerns regarding
        our data protection practices.
      </p>
      <h2>17. Data Breach Notification</h2>
      <p>
        In the event of a data breach that may compromise the security of your
        personal information, we will notify you and relevant authorities as
        required by law. We will also take prompt action to mitigate the effects
        of the breach and prevent future incidents.
      </p>
      <h2>18. Automated Decision Making</h2>
      <p>
        We may use automated decision-making processes, including algorithms and
        artificial intelligence, to analyze your data and make decisions about
        your access to certain features of the App. These decisions may impact
        your user experience and the services we provide.
      </p>
      <h2>19. Business Transfers</h2>
      <p>
        In the event that we are involved in a merger, acquisition, or sale of
        assets, your personal information may be transferred as part of that
        transaction. We will notify you of any such transfer and provide you
        with an opportunity to opt out of the transfer of your personal
        information.
      </p>
      <h2>20. User Consent </h2>
      <p>
        By using the App, you consent to the collection, use, and sharing of
        your personal information as described in this Privacy Policy. If you do
        not agree with any part of this policy, please do not use the App.
      </p>
      <h2>21. Limitation of Liability</h2>
      <p>
        We are not liable for any damages or losses arising from the use of the
        App or the disclosure of your personal information, except as required
        by law. In no event shall our liability exceed the amount paid by you
        for the use of the App.
      </p>
      <h2>22. Updates to Terms</h2>
      <p>
        We reserve the right to update or modify this Privacy Policy at any time
        without prior notice. Any changes will be effective immediately upon
        posting the updated Privacy Policy on the App. Your continued use of the
        App after any such changes constitutes acceptance of the revised Privacy
        Policy.
      </p>
      <h2>23. Severability</h2>
      <p>
        If any provision of this Privacy Policy is found to be invalid or
        unenforceable, that provision shall be severed from the remainder of the
        Privacy Policy, which shall remain in full force and effect.
      </p>
      <h2>24. Independent Contractors</h2>
      <p>
        Nothing in this Privacy Policy shall be construed to create a
        partnership, joint venture, employment, or agency relationship between
        you and us. You are an independent contractor responsible for your own
        actions and obligations.
      </p>
      <h2>25. Contact Information</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        privacy practices, please contact us at [contact information].
      </p>
      <h2>26. User Responsibilities</h2>
      <p>
        You are responsible for maintaining the confidentiality of any login
        credentials or account information associated with the App. You agree to
        notify us immediately of any unauthorized use of your account or any
        other breach of security.
      </p>
      <h2>27. User Feedback</h2>
      <p>
        We may collect feedback, suggestions, or other submissions from you
        regarding the App. By providing such feedback, you grant us the right to
        use and incorporate it into our products and services without any
        obligation to compensate you.
      </p>
      <h2>28. Data Minimization</h2>
      <p>
        We will only collect and process personal information that is necessary
        for the purposes outlined in this Privacy Policy. We will not retain
        your personal information for longer than is necessary to fulfill those
        purposes, unless required by law.
      </p>
      <h2>29. Right to Object</h2>
      <p>
        You have the right to object to certain processing of your personal
        information, including processing for direct marketing purposes. If you
        wish to exercise this right, please contact us using the contact
        information provided in this Privacy Policy.
      </p>
      <h2>30. Third-Party Analytics</h2>
      <p>
        We may use third-party analytics services to collect and analyze
        information about your use of the App. These analytics services may use
        cookies and similar technologies to collect information about your
        interactions with the App and other websites and applications over time.
      </p>
      <h2>31. Changes to Ownership</h2>
      <p>
        In the event of a change in ownership or control of our company, your
        personal information may be transferred to the new owner or controller.
        We will notify you of any such transfer and provide you with an
        opportunity to opt out of the transfer of your personal information.
      </p>
      <h2>32. Cross-Border Data Transfers</h2>
      <p>
        Your personal information may be transferred to and processed in
        countries other than the one in which you reside. These countries may
        have data protection laws that are different from those of your country.
        By using the App, you consent to the transfer of your personal
        information to these countries.
      </p>
      <h2>33. Supplementary Information</h2>
      <p>
        We may provide additional information about our data processing
        practices in supplemental privacy notices or disclosures. These
        supplemental notices may be provided to you at the time we collect your
        personal information or through other means.
      </p>
      <h2>34. Governing Law</h2>
      <p>
        This Privacy Policy is governed by and construed in accordance with the
        laws of the United States. Any disputes arising under this Privacy
        Policy shall be resolved in accordance with the dispute resolution
        provisions set forth in our Terms of Service.
      </p>
      <h2>35. Entire Agreement</h2>
      <p>
        This Privacy Policy constitutes the entire agreement between you and us
        regarding the subject matter herein and supersedes all prior or
        contemporaneous communications and proposals, whether oral or written,
        between you and us.
      </p>
    </div>
  );
};

export default Privacy;

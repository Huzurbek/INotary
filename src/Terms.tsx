import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { scrollWithOffset } from "./Privacy";

const Terms = () => {
  useEffect(() => {
    scrollWithOffset("terms");
  }, []);

  return (
    <div id="terms" style={{ maxWidth: "900px", margin: "0 auto" }}>
      <Helmet>
        <title>Terms and Conditions - INotary</title>
        <meta
          name="description"
          content="These are the terms and conditions of using the Your App Name service."
        />
        <meta name="keywords" content="Terms, Conditions, INotary" />
        <meta property="og:title" content="Terms and Conditions - INotary" />
        <meta
          property="og:description"
          content="Learn more about the terms and conditions of using the INotary service."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1>Terms and Conditions</h1>
      <p>
        These Terms and Conditions ("Terms") govern your use of the Inotary
        mobile application (the "App") provided by Iwork,LLC ("we", "our", or
        "us"). By using the App, you agree to be bound by these Terms. If you do
        not agree to these Terms, please do not use the App.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using the App, you agree to be bound by these Terms and any
        additional terms and conditions that may apply to specific features of
        the App. These Terms constitute a legally binding agreement between you
        and us.
      </p>
      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old and have the legal capacity to enter
        into contracts to use the App. By using the App, you represent and
        warrant that you meet these eligibility requirements.
      </p>
      <h2>3. Description of the App</h2>
      <p>
        The App is a platform that allows users to search for and find notary
        agents within a certain proximity for all their notary requirements.
        Users can find agents to perform online notary or offline notary
        services. Payments for the services are made online through the App.
      </p>
      <h2>4. User Accounts</h2>
      <p>
        To use certain features of the App, you may be required to create an
        account and provide certain personal information. You are responsible
        for maintaining the confidentiality of your account credentials and for
        all activities that occur under your account.
      </p>
      <h2>5. Notary Services</h2>
      <p>
        The notary agents listed on the App are independent contractors and are
        not employees or agents of [Your Company Name]. We do not endorse or
        guarantee the quality of their services. Users are solely responsible
        for selecting a notary agent and verifying their qualifications.
      </p>
      <h2>6. Payment</h2>
      <p>
        Users agree to pay all fees associated with the notary services
        requested through the App. Payments are processed through third-party
        payment processors, and users may be subject to additional terms and
        conditions imposed by the payment processor.
      </p>
      <h2>7. Content</h2>
      <p>
        You are solely responsible for any content you upload, submit, or
        transmit through the App. By submitting content, you grant us a
        non-exclusive, royalty-free, perpetual, irrevocable, and fully
        sublicensable right to use, reproduce, modify, adapt, publish,
        translate, create derivative works from, distribute, and display such
        content.
      </p>
      <h2>8. Intellectual Property</h2>
      <p>
        All intellectual property rights in the App, including but not limited
        to copyrights, trademarks, and trade secrets, are owned by or licensed
        to [Your Company Name]. You may not use, reproduce, modify, or
        distribute any content from the App without our prior written consent.
      </p>
      <h2>9. Privacy</h2>
      <p>
        Your use of the App is subject to our Privacy Policy, which governs the
        collection, use, and disclosure of your personal information. By using
        the App, you consent to the collection and use of your information in
        accordance with the Privacy Policy.
      </p>
      <h2>10. Disclaimer of Warranties</h2>
      <p>
        THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY
        KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING
        BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
      <h2>11. Limitation of Liability</h2>
      <p>
        IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
        PROFITS, DATA, OR USE, ARISING FROM YOUR USE OF THE APP OR ANY CONTENT
        AVAILABLE ON OR THROUGH THE APP.
      </p>
      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless [Your Company Name]
        and its affiliates, officers, directors, employees, agents, and
        licensors from and against any and all claims, liabilities, damages,
        losses, costs, expenses, or fees arising out of your use of the App or
        any violation of these Terms.
      </p>
      <h2>13. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of the State of [Your State], without regard to its conflict of law
        principles. Any dispute arising under these Terms shall be resolved
        exclusively in the state or federal courts located in [Your County],
        [Your State].
      </p>
      <h2>14. Changes to Terms</h2>
      <p>
        We reserve the right to update or modify these Terms at any time without
        prior notice. Any changes will be effective immediately upon posting the
        updated Terms on the App. Your continued use of the App after any such
        changes constitutes acceptance of the revised Terms.
      </p>
      <h2>15. Termination</h2>
      <p>
        We may terminate or suspend your access to the App at any time and for
        any reason without prior notice. Upon termination, your right to use the
        App will immediately cease, and you must cease all use of the App and
        delete any downloaded copies of the App.
      </p>
      <h2>16. Severability</h2>
      <p>
        If any provision of these Terms is found to be invalid or unenforceable,
        that provision shall be deemed severable from the remaining provisions
        of these Terms, which shall remain in full force and effect.
      </p>
      <h2>17. User Responsibilities </h2>
      <p>
        You are responsible for ensuring the accuracy and legality of any
        information or documents you provide through the App. You agree not to
        use the App for any unlawful or fraudulent purposes, including but not
        limited to identity theft or fraud.
      </p>
      <h2>18. Dispute Resolution </h2>
      <p>
        Any disputes arising out of or relating to these Terms or your use of
        the App shall be resolved through arbitration administered by the
        American Arbitration Association ("AAA") in accordance with its
        Commercial Arbitration Rules. The arbitration shall take place in [Your
        County], [Your State], and the arbitrator's decision shall be final and
        binding.
      </p>
      <h2>19. Class Action Waiver </h2>
      <p>
        You agree to waive your right to participate in any class action lawsuit
        or class-wide arbitration against us. You may only bring individual
        claims against us, and you agree not to seek relief on behalf of any
        group, class, or collective.
      </p>
      <h2>20. Waiver of Jury Trial </h2>
      <p>
        You waive your right to a jury trial in any legal proceeding arising out
        of or relating to these Terms or your use of the App. Any disputes shall
        be resolved through arbitration as provided in these Terms.
      </p>
      <h2>21. Force Majeure </h2>
      <p>
        We shall not be liable for any failure or delay in performing our
        obligations under these Terms if such failure or delay is caused by
        events beyond our reasonable control, including but not limited to
        natural disasters, acts of terrorism, or government actions.
      </p>
      <h2>22. Notice</h2>
      <p>
        Any notices required or permitted under these Terms shall be sent to the
        contact information provided by you or posted on the App. You agree that
        all notices sent electronically satisfy any legal requirement that such
        notices be in writing.
      </p>
      <h2>23. No Waiver </h2>
      <p>
        Our failure to enforce any provision of these Terms shall not be deemed
        a waiver of such provision or any other provision of these Terms. Our
        rights and remedies under these Terms are cumulative and not exclusive
        of any other rights or remedies provided by law.
      </p>

      <h2>24. Third-Party Beneficiaries </h2>
      <p>
        These Terms are for the benefit of you and us and are not intended to
        confer any rights or remedies upon any third party. No third party shall
        have the right to enforce any provision of these Terms.
      </p>
      <h2>25. Survival </h2>
      <p>
        The provisions of these Terms that by their nature should survive
        termination shall survive termination, including but not limited to the
        sections on Intellectual Property, Limitation of Liability, and
        Indemnification.
      </p>
      <h2>26. Amendments </h2>
      <p>
        We reserve the right to amend these Terms at any time by posting the
        amended Terms on the App. Your continued use of the App after any such
        amendments constitutes acceptance of the amended Terms.
      </p>
      <h2>27. Headings</h2>
      <p>
        The headings in these Terms are for convenience only and shall not
        affect the interpretation of these Terms.
      </p>
      <h2>28. Modification of the App </h2>
      <p>
        We reserve the right to modify, update, or discontinue the App or any
        part thereof at any time without prior notice. We shall not be liable to
        you or any third party for any modification, suspension, or
        discontinuance of the App.
      </p>
      <h2>29. Feedback </h2>
      <p>
        If you provide us with any feedback, suggestions, or ideas regarding the
        App, you agree that we may use such feedback, suggestions, or ideas for
        any purpose without compensation to you.
      </p>
      <h2>30. Language </h2>
      <p>
        These Terms may be translated into other languages for your convenience.
        In the event of any discrepancy between the English version of these
        Terms and a translated version, the English version shall prevail.
      </p>
      <h2>31. Assignment</h2>
      <p>
        You may not assign or transfer any of your rights or obligations under
        these Terms without our prior written consent. We may freely assign or
        transfer these Terms without restriction.
      </p>
      <h2>32. No Agency </h2>
      <p>
        Nothing in these Terms shall be construed as creating a partnership,
        joint venture, employment, or agency relationship between you and us.
        You are an independent contractor responsible for your own actions and
        obligations.
      </p>
      <h2>33. Contact Information </h2>
      <p>
        If you have any questions or concerns about these Terms, please contact
        us at [contact information].
      </p>
      <h2>34. Data Protection </h2>
      <p>
        We are committed to protecting your personal information and complying
        with applicable data protection laws. Our Privacy Policy outlines how we
        collect, use, and disclose your personal information, and by using the
        App, you consent to our data processing practices as described therein.
      </p>
      <h2>35. User Reviews and Ratings </h2>
      <p>
        Users may have the option to leave reviews and ratings for notary
        agents. By submitting a review or rating, users agree to provide
        accurate and truthful feedback based on their personal experiences. We
        reserve the right to moderate, edit, or remove reviews or ratings that
        violate our community guidelines or are deemed inappropriate.
      </p>
      <h2>36. Accessibility </h2>
      <p>
        We are committed to making our app accessible to all users, including
        those with disabilities. If you encounter any accessibility issues or
        barriers while using the app, please contact us for assistance.
      </p>
      <h2>37. Updates and Notifications </h2>
      <p>
        From time to time, we may send you notifications or updates about the
        app, including new features, changes to the terms and conditions, or
        important announcements. You may opt out of receiving these
        communications by adjusting your notification settings in the app.
      </p>
      <h2>38. Geographic Limitations </h2>
      <p>
        Our services may not be available in all geographic locations. We
        reserve the right to restrict access to the app based on geographic
        location and to modify or discontinue services in certain regions
        without prior notice.
      </p>
      <h2>39. Integration with Third-Party Services </h2>
      <p>
        The app may integrate with third-party services or platforms to provide
        certain features or functionality. Your use of any third-party services
        is subject to their respective terms of service and privacy policies.
      </p>
      <h2>40. User Acknowledgment of Risks </h2>
      <p>
        Users acknowledge and understand the risks associated with conducting
        notary services online or offline, including the potential for fraud,
        identity theft, or unauthorized access to personal information. Users
        agree to take appropriate precautions to protect their personal
        information and to report any suspicious or fraudulent activity to us
        immediately.
      </p>
      <h2>41. Informed Consent for Online Notary Services </h2>
      <p>
        Users engaging in online notary services acknowledge and consent to the
        use of electronic signatures and video conferencing technology for the
        purpose of notarizing documents. Users understand that their
        interactions with notary agents may be recorded and stored for
        compliance and security purposes.
      </p>
      <h2>42. User Agreement to Follow Applicable Laws </h2>
      <p>
        Users agree to comply with all applicable laws, regulations, and
        industry standards when using the app and engaging in notary services.
        Users are responsible for understanding and adhering to the legal
        requirements for notarization in their jurisdiction.
      </p>
      <h2>43. Limitations of Online Notary Services </h2>
      <p>
        Users acknowledge that online notary services may be subject to certain
        limitations or restrictions based on state or local laws, including but
        not limited to restrictions on the types of documents that can be
        notarized online or the identification requirements for online
        notarization.
      </p>
      <h2>44. Disclaimer of Liability for Notary Services </h2>
      <p>
        We are not responsible for the actions or omissions of notary agents
        listed on the app. Users engage notary agents at their own risk, and we
        disclaim any liability for any errors, omissions, or misconduct by
        notary agents.
      </p>
      <h2>45. Reservation of Rights </h2>
      <p>
        We reserve all rights not expressly granted in these terms and
        conditions. Any failure to enforce any provision of these terms shall
        not constitute a waiver of our rights under these terms or at law.
      </p>
      <h2>46. User Conduct and Prohibited Activities </h2>
      <p>
        Users agree not to engage in any unlawful, harmful, or abusive behavior
        while using the app. Prohibited activities include but are not limited
        to harassment, defamation, spamming, and unauthorized access to the
        app's systems or data.
      </p>
      <h2>47. User Verification </h2>
      <p>
        We reserve the right to verify the identity and qualifications of users,
        including notary agents, through various means, such as requesting
        additional documentation or conducting background checks. Users agree to
        cooperate with any verification processes initiated by us.
      </p>
      <h2>48. Termination of Accounts </h2>
      <p>
        We reserve the right to suspend or terminate user accounts that violate
        these terms and conditions or engage in fraudulent or abusive behavior.
        Users will be notified of any account termination and may appeal the
        decision in accordance with our dispute resolution procedures.
      </p>
      <h2>49. User Feedback and Surveys </h2>
      <p>
        From time to time, we may solicit feedback or conduct surveys to gather
        user opinions and improve the app's features and functionality.
        Participation in feedback and surveys is voluntary, and users' responses
        will be treated confidentially in accordance with our privacy policy.
      </p>
      <h2>50. User Training and Resources </h2>
      <p>
        We may provide educational resources, tutorials, or training materials
        to help users understand how to use the app effectively and navigate the
        notary process. Users are encouraged to take advantage of these
        resources to enhance their experience and avoid common pitfalls.
      </p>
      <h2>51. Notification of Changes </h2>
      <p>
        Users will be notified of any material changes to these terms and
        conditions via email or through the app's messaging system. Continued
        use of the app after receiving notification of changes constitutes
        acceptance of the revised terms and conditions.
      </p>
      <h2>52. No Agency Relationship </h2>
      <p>
        Nothing in these terms and conditions shall be construed as creating an
        agency, partnership, joint venture, or employment relationship between
        users and the app's operators. Users are independent contractors
        responsible for their own actions and obligations.
      </p>

      <h2>53. Limitation of Liability for Online Notary Services </h2>
      <p>
        Users acknowledge that online notary services may be subject to
        technical limitations or interruptions beyond our control, such as
        internet connectivity issues or software malfunctions. We disclaim any
        liability for damages arising from such technical issues.
      </p>

      <h2>54. Reservation of Rights to App Content </h2>
      <p>
        All content, including text, images, and multimedia materials, displayed
        on the app is owned or licensed by us and is protected by copyright and
        other intellectual property laws. Users may not reproduce, distribute,
        or modify app content without our prior written consent.
      </p>
      <h2>55. Compliance with Export Controls </h2>
      <p>
        Users agree not to use the app in violation of export control laws and
        regulations, including but not limited to restrictions on the export of
        encryption technology or other sensitive materials. Users are
        responsible for ensuring compliance with applicable export control laws.
      </p>
      <h2>56. User Data Ownership </h2>
      <p>
        Users retain ownership of any data or content they upload, submit, or
        transmit through the app. However, by using the app, users grant us a
        non-exclusive, royalty-free license to use, reproduce, modify, adapt,
        publish, translate, distribute, and display such data or content for the
        purpose of providing and improving the app's services.
      </p>
      <h2>57. Third-Party Services and Links </h2>
      <p>
        The app may contain links to third-party websites or services that are
        not owned or controlled by us. We are not responsible for the content,
        privacy policies, or practices of any third-party websites or services.
        Users access third-party websites or services at their own risk.
      </p>
      <h2>58. User Safety and Security </h2>
      <p>
        Users are responsible for safeguarding their account credentials and
        taking appropriate measures to protect against unauthorized access to
        their accounts. Users agree not to share their account credentials with
        any third party and to promptly notify us of any unauthorized use of
        their accounts.
      </p>
      <h2>59. Changes to Service </h2>
      <p>
        We reserve the right to modify, suspend, or discontinue any aspect of
        the app's services at any time without prior notice. We shall not be
        liable to users or any third party for any such modifications,
        suspensions, or discontinuations.
      </p>

      <h2>60. User Assistance and Support </h2>
      <p>
        We strive to provide timely assistance and support to users experiencing
        technical issues or difficulties with the app. Users may contact our
        customer support team for assistance, and we will make reasonable
        efforts to resolve any reported issues promptly.
      </p>
      <h2>61. User Engagement with Notary Agents </h2>
      <p>
        Users engaging with notary agents through the app acknowledge and agree
        that such engagements are solely between the user and the notary agent.
        We are not a party to any agreements or transactions between users and
        notary agents and disclaim any liability arising from such engagements.
      </p>
      <h2>62. Feedback and Suggestions </h2>
      <p>
        We welcome feedback, suggestions, or ideas from users regarding the
        app's features and functionality. Users may submit feedback through the
        app or via email, and we may use such feedback to improve the app's
        services without any obligation to compensate the user.
      </p>
      <h2>63. No Guarantee of Service Availability </h2>
      <p>
        While we strive to maintain continuous availability of the app's
        services, we cannot guarantee uninterrupted access or error-free
        operation of the app. Users acknowledge that the app may be subject to
        occasional downtime for maintenance, updates, or technical issues.
      </p>
      <h2>64. Governing Law and Venue </h2>
      <p>
        These terms and conditions shall be governed by and construed in
        accordance with the laws of Wyoming, without regard to its conflict of
        law provisions. Any legal action or proceeding arising out of or
        relating to these terms and conditions shall be brought exclusively in
        the federal or state courts located in USA, State of Wyoming.
      </p>
      <h2>65. Entire Agreement </h2>
      <p>
        These terms and conditions constitute the entire agreement between users
        and us regarding the use of the app and supersede all prior or
        contemporaneous agreements and understandings, whether written or oral,
        between users and us.
      </p>
    </div>
  );
};

export default Terms;

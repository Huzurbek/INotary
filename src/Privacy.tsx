import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
      <p>Last updated: September 14, 2024</p>

      <h2>1. Introduction</h2>
      <p>
        Your privacy is important to us. This privacy policy explains what
        personal data we collect and how we use it.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We collect information to provide better services to our users,
        including the data you provide directly, such as your name, email
        address, and usage data from the app.
      </p>

      <h2>3. How We Use Information</h2>
      <p>
        We use the information we collect to improve our services, communicate
        with you, and personalize your experience.
      </p>

      <h2>4. Sharing of Information</h2>
      <p>
        We do not share your personal information with third parties, except
        when required by law or to provide services on our behalf.
      </p>

      <h2>5. Security</h2>
      <p>
        We take appropriate security measures to protect your personal data from
        unauthorized access, alteration, or disclosure.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal data.
        Contact us to exercise these rights.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions or concerns about our privacy policy, please
        contact us at privacy@yourapp.com.
      </p>
    </div>
  );
};

export default Privacy;

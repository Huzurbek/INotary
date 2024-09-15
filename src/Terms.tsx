import { Helmet } from "react-helmet";
const Terms = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
      <p>Last updated: September 14, 2024</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to [Your App Name]. By using our app, you agree to comply with
        and be bound by the following terms and conditions of use.
      </p>

      <h2>2. Use of the Service</h2>
      <p>
        [Your App Name] is offered as a platform for educational purposes. You
        agree not to misuse the service or use it for any unlawful activities.
      </p>

      <h2>3. Modifications to Terms</h2>
      <p>
        We reserve the right to modify these terms at any time, and any updates
        will be posted on this page.
      </p>

      <h2>4. Contact Us</h2>
      <p>
        If you have any questions about these terms, please contact us at
        support@yourapp.com.
      </p>
    </div>
  );
};

export default Terms;

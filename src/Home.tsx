import { Link } from "react-router-dom";
import ProcessStep from "./components/processStep";
import { ServiceCard } from "./components/serviceCard";
import { Title } from "./components/title";
import { PROCESS_STEPS, SERVICE_LIST } from "./constants";

function Home() {
  const scrollWithOffset = (
    selected: string,
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    const servicesSection = document.getElementById(selected);
    if (servicesSection) {
      const offset = 100;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ paddingBottom: "77px" }}>
      <div className="header" id="home">
        <div className="navbar-outer">
          <div className="navbar large-inner-wrapper">
            <div
              className="navbar-logo"
              onClick={(event) => scrollWithOffset("home", event)}
            ></div>
            <Links scrollWithOffset={scrollWithOffset} />
          </div>
        </div>
        <h3 className="header-title">
          Translate and notarize your documents online and in person anytime
        </h3>
        <p className="header-subtitle">
          iNotary makes notarization simple, fast, and accessible from anywhere.
          Our secure platform allows you to get your documents notarized online,
          saving you time and effort.
        </p>
        <div className="header-coming">Coming soon!</div>
        <div className="download-main">
          <div className="apple" />
          <div className="google" />
        </div>
      </div>
      <div id="our-services">
        <Title>Our Services</Title>
      </div>

      <div className="service_wrapper meddium-inner-wrapper">
        {SERVICE_LIST.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </div>
      {/* ABOUT SECTION  */}
      <div id="about-us" className="about">
        <Title>Why Choose iNotary</Title>
        <p className="about-title">
          iNotary stands at the forefront of modern notarization, offering a
          seamless, secure, and efficient solution for all your notary needs.
          Designed with convenience in mind, iNotary allows you to notarize
          documents from anywhere, at any time, without the hassle of visiting a
          notary in person. Our platform is user-friendly, ensuring a smooth
          experience whether you're notarizing a single document or managing
          multiple transactions.
        </p>

        <div className="about-main">
          <div className="about-main-left">
            <h3 className="about-main-title">
              Hassle free<br></br> Process
            </h3>
            <p className="about-main-body">
              Online notarization is a modern and convenient process that allows
              individuals to notarize documents remotely using secure digital
              platforms.
            </p>
          </div>

          <div className="about-main-right">
            <div className="about-main-right-inner">
              <h3 className="about-main-title">Secured Payment </h3>
              <p className="about-main-body">
                Online notarization is a modern and convenient process that
                allows individuals to notarize documents
              </p>
            </div>
            <div className="about-main-right-inner">
              <h3 className="about-main-title">Online & In person</h3>
              <p className="about-main-body">
                Online notarization is a modern and convenient process that
                allows individuals to notarize documents
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* PROCESS SECTION  */}
      <div className="outer-process">
        <div className="process large-inner-wrapper ">
          <div className="process-header">
            <Title>Process For Notarization</Title>
          </div>

          <div className="process-step-wrapper">
            {PROCESS_STEPS.map((step) => (
              <ProcessStep key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
      {/* DOWNLOAD SECTION  */}
      <div id="contact-us" className="download large-inner-wrapper ">
        <Title>Download iNotary</Title>
        <p className="download-info">Available Soon!</p>
        <div className="download-main">
          <div className="apple" />
          <div className="google" />
        </div>
        <div className="download-main-bg"></div>
        <div className="download-logo"></div>
        <p className="download-sub-title">
          iNotary makes notarization simple, fast, and accessible from anywhere.
          Our secure platform allows you to get your documents notarized online,
          saving you time and effort.
        </p>
        <div className="footer" style={{ maxWidth: "526px", margin: "0 auto" }}>
          <Links scrollWithOffset={scrollWithOffset} />
        </div>
        <div className="download-footer">
          <div className="download-line"></div>
          <div className="footer-term">
            <div>© 2024 INotary</div>
            <Link to="/terms">Terms and Condition</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

export const Links = ({
  scrollWithOffset,
}: {
  scrollWithOffset: (
    selected: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}) => {
  return (
    <ul>
      <li>
        <a href="#" onClick={(event) => scrollWithOffset("home", event)}>
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          onClick={(event) => scrollWithOffset("our-services", event)}
        >
          Our Services
        </a>
      </li>
      <li>
        <a href="#" onClick={(event) => scrollWithOffset("about-us", event)}>
          About Us
        </a>
      </li>
      <li>
        <a href="#" onClick={(event) => scrollWithOffset("contact-us", event)}>
          Contact
        </a>
      </li>
    </ul>
  );
};

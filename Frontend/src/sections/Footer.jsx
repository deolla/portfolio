import BackToTopButton from "../components/BackToTop";
// import LanguageSelector from "../components/LanguageSelector";
// import AccessibilityTools from "../components/AccessibilityTools";


const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-cyan-500">
        <div className="flex gap-2">
          <p>Oluwaseyi, Inc.</p>
        </div>
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-2">
          <p>Contact: deosundeola@gmail.com</p>
          <p>|</p>
          <p>+234 810 942 52</p>
        </div>
      </div>

      {/* <div>
        <LanguageSelector />

        <AccessibilityTools />
      </div> */}
      <div className="flex gap-3">
        <a
          href="https://github.com/deolla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://x.com/Deola_ops"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          title="Twitter"
        >
          <div className="social-icon">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/deosundeola/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <div className="social-icon">
            <img
              src="/assets/linkedIn.svg"
              alt="linkin"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        {/* <div className="social-icon">
                <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
            </div> */}
        <BackToTopButton />
      </div>
      {/* Copyright Section */}
      <p className="text-cyan-500 text-sm">
        ©️ {new Date().getFullYear()} Oluwaseyi. All right reserved.
      </p>
    </section>
  );
};

export default Footer;

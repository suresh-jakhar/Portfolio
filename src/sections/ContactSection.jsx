import SectionTitle from '../components/SectionTitle';
import SocialIcons from '../components/SocialIcons';

const ContactSection = () => {
  return (
    <section className="pt-6 pb-[100px] bg-[#0a0a0a]" id="contact">
      <div className="container">
        <SectionTitle title="Get In Touch" isLight={true} />

        <div className="mt-8 md:mt-12">
          {/* Contact info */}
          <div className="font-medium space-y-4 text-white text-lg">
            <p>
              <a href="mailto:gettingsuresh@gmail.com" className="hover:text-gray-400 transition-colors">
                gettingsuresh@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+917878122792" className="hover:text-gray-400 transition-colors">
                +91 7878122792
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/sureshjakhar/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <SocialIcons className="mt-8 md:mt-12" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

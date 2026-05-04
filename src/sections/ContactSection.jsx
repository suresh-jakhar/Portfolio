import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { MdArrowForward } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import SocialIcons from '../components/SocialIcons';

// CAPTCHA: random number + 11
const randomNum = () => Math.round(11 * Math.random());

const INPUT_CLS =
  'text-[13px] border-b border-white/20 bg-transparent outline-none w-full duration-300 focus:border-white h-8 text-white placeholder:text-gray-600';

const ContactSection = () => {
  const formRef = useRef(null);
  const [captchaNum, setCaptchaNum] = useState(randomNum);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaAnswer) !== 11 + captchaNum) {
      toast.error("Addition didn't match!");
      return;
    }
    setSending(true);
    emailjs
      .sendForm(
        'service_2n4p4zf',       // ← replace with your EmailJS service ID
        'template_zbpnzf5',      // ← replace with your EmailJS template ID
        formRef.current,
        'RFRWgSzPUJD8MZVMm'     // ← replace with your EmailJS public key
      )
      .then(() => {
        toast.success('Thanks for contacting me! ☝');
        setSending(false);
        formRef.current.reset();
        setCaptchaNum(randomNum());
        setCaptchaAnswer('');
      })
      .catch((err) => {
        toast.error(err.text || 'Something went wrong!');
        setSending(false);
        setCaptchaNum(randomNum());
        setCaptchaAnswer('');
      });
  };

  return (
    <section className="pt-6 pb-[100px] bg-[#0a0a0a]" id="contact">
      <div className="container">
        <SectionTitle title="Get In Touch" isLight={true} />

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Contact info */}
          <div className="col-span-5">
            <div className="font-medium space-y-4 text-white">
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
                  linkedin.com/in/sureshjakhar
                </a>
              </p>
            </div>
            <SocialIcons className="mt-6 md:mt-10" />
          </div>

          {/* Contact form */}
          <div className="col-span-7 mt-10 md:mt-0">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <input required name="name" placeholder="Name Here*" className={INPUT_CLS} />
                <input required name="email" type="email" placeholder="Email Here*" className={INPUT_CLS} />
              </div>
              <textarea
                rows={4}
                required
                name="message"
                placeholder="Message Here*"
                className={`${INPUT_CLS} resize-none mt-5 h-auto`}
              />
              {/* CAPTCHA */}
              <div className="flex items-center mt-8 text-gray-400">
                <p className="mb-0 mr-5">Are you human?</p>
                <h4 className="text-white">11 + {captchaNum} = </h4>
                <input
                  type="text"
                  required
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  className="bg-transparent border border-white/20 focus:border-white outline-0 p-2 h-8 w-16 ml-3 text-white"
                />
              </div>
              <div className="text-center md:text-right mt-10">
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-white text-black font-black text-[12px] px-8 py-4 group uppercase tracking-widest rounded-sm transition-transform hover:scale-105"
                >
                  {sending ? 'SENDING...' : 'SEND MESSAGE'}
                  <MdArrowForward className="inline text-xl ml-2 duration-[400ms] group-hover:translate-x-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

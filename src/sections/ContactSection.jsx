import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import { MdArrowForward } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import SocialIcons from '../components/SocialIcons';

// CAPTCHA: random number + 11
const randomNum = () => Math.round(11 * Math.random());

const INPUT_CLS =
  'text-[13px] border-b border-neutral-200 outline-none w-full duration-300 focus:border-b-black h-8';

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
    <section className="py-[100px]" id="contact">
      <div className="container">
        <SectionTitle title="Get In Touch" />

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Contact info */}
          <div className="col-span-5">
            <div className="font-medium space-y-2">
              <address className="not-italic">
                100 Main St, Blacktown NSW 2148,
                <br />
                Australia
              </address>
              <p>support@bold.com, info@youremail.com</p>
              <p>+256-4516-556, +(257) 56812749</p>
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
              <div className="flex items-center mt-5">
                <p className="mb-0 mr-5">Are you human?</p>
                <h4>11 + {captchaNum} = </h4>
                <input
                  type="text"
                  required
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  className="border border-neutral-200 focus:border-dark outline-0 p-2 h-8 w-16 ml-3"
                />
              </div>
              <div className="text-center md:text-right mt-5">
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-dark text-white text-[12px] px-6 py-3 group"
                >
                  {sending ? 'SENDING...' : 'SEND MESSAGE'}
                  <MdArrowForward className="inline text-xl ml-1 duration-[400ms] group-hover:translate-x-2" />
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

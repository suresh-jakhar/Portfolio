import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsAwardFill } from 'react-icons/bs';

const socialLinks = [
  { id: 1, icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/sureshjakhar/', label: 'LinkedIn' },
  { id: 2, icon: FaGithub, href: 'https://github.com/suresh-jakhar', label: 'GitHub' },
  { id: 3, icon: MdEmail, href: 'mailto:gettingsuresh@gmail.com', label: 'Email' },
  { id: 4, icon: BsAwardFill, href: 'https://www.credly.com/users/suresh-jakhar', label: 'Credly Profile' },
];

export default socialLinks;

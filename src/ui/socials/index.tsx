import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { SiHashnode } from 'react-icons/si';
import { motion } from 'framer-motion';

const data_socials = [
  {
    Icon: BsGithub,
    href: 'https://github.com/shoebilyas123',
  },
  {
    Icon: SiHashnode,
    href: 'https://shoebilyas.hashnode.dev',
  },
  {
    Icon: ImLinkedin,
    href: 'https://linkedin.com/in/shoeb-ilyas',
  },
  {
    Icon: BsTwitter,
    href: 'https://twitter.com/shoebilyastwts',
  },
];

const Socials = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {data_socials.map(({ href, Icon }, index) => (
        <motion.a
          {...{ href }}
          key={href}
          target="_blank"
          className="transition-all hover:translate-x-1 social-icon"
        >
          <Icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};

export default Socials;

import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { SiHashnode } from 'react-icons/si';

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
    <div className="flex flex-col items-center justify-center space-y-3">
      {data_socials.map(({ href, Icon }) => (
        <a
          {...{ href }}
          key={href}
          target="_blank"
          className="transition-all hover:translate-x-1 social-icon"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default Socials;

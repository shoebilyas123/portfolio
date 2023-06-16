import { motion } from 'framer-motion';
import { FC } from 'react';

const PageLink: FC<any> = ({ title, href, index }) => (
  <motion.a
    initial={{
      opacity: 0,
      y: 10,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      ease: 'easeInOut',
      duration: 0.4,
      delay: 0.2 + index / 10,
    }}
    {...{ href }}
    className="page-links relative overflow-hidden hover:space-x-1 cursor-pointer "
  >
    {title.split('').map((char: string) => (
      <span className="transition-all duration-400 ">{char}</span>
    ))}
  </motion.a>
);

export default PageLink;

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx'

interface AnimatedButtonProps {
  title: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement> 
  className?: string
}

const AnimatedButton = ({ title, onClick, className }: AnimatedButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={
        clsx(
          'w-full bg-blue-500 text-white p-2 rounded',
          className,
        )
      }
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
};

export default AnimatedButton;

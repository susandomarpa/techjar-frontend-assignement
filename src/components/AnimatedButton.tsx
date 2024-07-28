import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  title: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement> 
}

const AnimatedButton = ({ title, onClick }: AnimatedButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-full bg-blue-500 text-white p-2 rounded"
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
};

export default AnimatedButton;

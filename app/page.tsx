'use client';

import { motion } from 'framer-motion';
import Nav from '@/components/nav';
import React from 'react';

export default function Home() {
  return (
      <div 
        className="flex flex-col min-h-screen text-center p-24 bg-gradient-to-b from-black to-slate-600">
        <Nav></Nav>
        <motion.h1 
          className="py-10 text-6xl font-bold text-slate-200"
          initial= {{ opacity : 0}}
          animate={{ opacity: 1, y: 20 }}
          transition={{ ease: "easeOut", duration: 1}}
        >
          Organize your job search.
        </motion.h1>
        <motion.h2 
        className="py-10 text-2xl text-bold text-slate-200"
        initial= {{ opacity : 0}}
        animate={{ opacity: 1, y: 20 }}
        transition={{ ease: "easeOut", duration: 1}}
        >
          Trackerjet is a free tool that allows students to keep track of their internship applications
        </motion.h2>
      </div>

  )
}

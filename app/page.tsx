'use client';

import { motion } from 'framer-motion';
import Nav from '@/components/nav';
import Form from '@/components/form';
import React from 'react';
import Image from 'next/image';

import Add from '@/public/icons/add.svg';
import Folder from '@/public/icons/folder.svg';

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
        className="text-2xl text-bold text-slate-200 mb-6"
        initial= {{ opacity : 0}}
        animate={{ opacity: 1, y: 20 }}
        transition={{ ease: "easeOut", duration: 1}}
        >
          Trackerjet is a free tool that allows students to keep track of their internship applications.
        </motion.h2>
        <motion.h2 
        className="text-2xl text-bold text-slate-200"
        initial= {{ opacity : 0}}
        animate={{ opacity: 1, y: 20 }}
        transition={{ ease: "easeOut", duration: 1}}
        >
          Simply choose to add an application or view existing submissions
        </motion.h2>
        {/*add and view applications buttons*/}
        <div className="flex justify-center items-center pt-20 mb-10">
          <motion.button 
            className="flex justify-center items-center border border-1 border-green-400 hover:bg-slate-700 p-2 w-60 rounded-lg mr-5"
            initial= {{ opacity : 0}}
            animate={{ opacity: 1, y: 30 }}
            transition={{ ease: "easeOut", duration: 1.5}}
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
          >
            <Image
              className="flex"
              src={Add}
              alt=""
              height={25}
              width={25}
            ></Image>
            <h1 className="flex ml-5 text-lg text-green-400">
              Add an Application
            </h1>
          </motion.button>
          
          <motion.button
            className="flex justify-center items-center border border-1 border-violet-600 hover:bg-slate-700 p-2 w-60 rounded-lg ml-5"
            initial= {{ opacity : 0}}
            animate={{ opacity: 1, y: 30 }}
            transition={{ ease: "easeOut", duration: 1.5}}
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
          >
            <Image
              className="flex"
              src={Folder}
              alt=""
              height={25}
              width={25}
            ></Image>
            <h1 className="flex ml-5 text-lg text-violet-600">
              View Applications
            </h1>
          </motion.button>
        </div>
        
        {/*Application Form*/}
        <Form></Form>
      </div>


  )
}

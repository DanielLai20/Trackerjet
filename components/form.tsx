'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Form = () => {
  return (
    <div className="flex bg-transparent justify-center w-128 mt-10">
        <motion.form 
        className="bg-violet-600 shadow-md rounded-lg px-8 pt-6 pb-8 mb-5">
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="companyName">
                    Company Name
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="companyName" 
                    type="text" 
                    placeholder='Trackerjet'>
                </input>
            <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="dateApplied">
                    Date Applied
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="dataApplied" 
                    type="text" 
                    placeholder="mm/dd/yyyy"
                ></input>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="onlineAssessment">
                    Online Assessments
                </label>
            </div>
            </div>
        </motion.form>
    </div>
    );
};

export default Form;
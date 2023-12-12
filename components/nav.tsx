'use client';

import Image from 'next/image';
import Logo from '../public/logos/trackerjet-logo.png';
import { motion } from 'framer-motion';

const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-transparent">
            <div className="flex justify-start items-center py-4 px-4">
                <Image
                    src={Logo}
                    alt=""
                    height={75}
                    width={75}
                    style={{ margin: "-20px"}}
                ></Image>
                <h1 className="text-2xl font-bold text-slate-200">
                    Trackerjet
                </h1>
            </div>
        </nav>
    );

};

export default Nav;
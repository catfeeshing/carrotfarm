import { useState } from 'react';
// import Draggable from 'react-draggable'; 
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';

export const Terminal = () => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono"
          >
            <div className="bg-black p-4 rounded-lg">
              <p className="text-green-500">$ whoami</p>
              <p className="text-white mb-2">[cawowyn] - wannabe dev</p>
              
              <p className="text-green-500">$ ls -la skills/</p>
              <p className="text-white mb-2">
                drwxr-xr-x tools git docker
              </p>

              <p className="text-green-500">$ ls -la webdev/skills/</p>
              <p className="text-white mb-2">
                drwxr-xr-x frontend react next.js typescript<br />
                drwxr-xr-x backend flask firebase<br />
              </p>
              
              {/* please remember to change this later */}
              <p className="text-green-500">$ cat about.txt</p>
              <p className="text-white mb-2">
                // i like puter since the elementary<br />
                // got into computer science because of club penguin, poptropica, and minecraft<br />
                // i am currently addicted to ai/ml
              </p>
              
              <p className="text-green-500">$ contact --send-message</p>
              <p className="text-white mb-4">Initiating contact form...</p>
              
              <div className="flex items-center">
                <span className="text-green-500">$&nbsp;</span>
                <div className="relative">
                  <span className="animate-pulse">▌</span>
                </div>
              </div>
            </div>
          </motion.div>

    )
}
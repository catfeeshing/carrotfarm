import { useState } from 'react';
// import Draggable from 'react-draggable'; 
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';
import skillsDisplay from '@/components/parts/skillDisplay'
import { Skills } from './skills';
import SkillsDisplay from '@/components/parts/skillDisplay';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <h1 className="text-center text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        about me
      </h1>
      {/* <p className="text-xl mb-6 text-gray-300">
                      I'm a recent computer science grad with 
                    </p> */}
      <div className="grid md:grid-cols-2 gap-6">
        <p>
          .


        </p>
        {/* <Card className="bg-none bg-opacity-0"> */}
        {/* <CardBody> */}
        {/* <h2 className="text-2xl font-semibold mb-4">About Me</h2> */}
        {/* <p className="text-gray-300">
                          I'm a recent computer science grad with 
                          </p> */}
        {/* </CardBody> */}
        {/* </Card> */}

        <SkillsDisplay />
        {/* <Card className="bg-gray-800 border-gray-700">
                        <CardBody> */}
        {/* <h2 className="text-2xl font-semibold mb-4">header</h2>
                          <ul className="list-disc list-inside text-gray-300">
                            <li>thing</li>
                            <li>thing</li>
                          </ul> */}

        {/* </CardBody>
                      </Card> */}
      </div>

      {/* buttons */}
      {/* <div className="mt-10 flex justify-center space-x-4">
                      <Button 
                        startContent={<FaGithub />}
                        variant="flat"
                        color="default"
                        size="lg"
                        href="https://github.com/catfeeshing"
                        as="a"
                        target="_blank"
                      >
                        GitHub
                      </Button>
                      <Button
                        startContent={<FaLinkedin />}
                        variant="flat"
                        color="primary"
                        size="lg"
                        href="https://linkedin.com/in/carolyncui"
                        as="a"
                        target="_blank"
                      >
                        LinkedIn
                      </Button> */}
      {/* <Button
                        startContent={<FaTwitter />}
                        variant="flat"
                        color="secondary"
                        size="lg"
                        href="https://twitter.com/yourusername"
                        as="a"
                        target="_blank"
                      >
                        Twitter
                      </Button> */}
      {/* </div> */}
    </motion.div>
  )
}
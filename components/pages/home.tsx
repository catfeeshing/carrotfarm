import { useState } from 'react';
// import Draggable from 'react-draggable'; 
// import Image from 'next/image';
import { Image } from "@heroui/react";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';

export const BrowserHome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <div className=""> */}
      <h1 className="text-5xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-500 text-center">
        hi, i'm carolyn!
      </h1>



      {/* do this more elegantly. i am just tired rn */}

      {/* <Card className="bg-transparent"> */}
      {/* <CardBody className='bg-transparent'> */}
      {/* <h2 className="text-2xl font-semibold mb-4">About Me</h2> */}
      
      <Image
  alt="mini carolyn"
  className="m-5 mx-auto block w-1/6" // Changed to block and w-1/3 for proper centering
  src="/cawowyn.png"
  // Remove the width HTML attribute and use Tailwind classes instead
/>

      <p className="text-xl mb-6 text-gray-300 text-center mx-auto ">
        recent cs grad building my favorite things to make the world a friendlier place :)

      </p>
      <p className="text-l font-semibold mb-4 text-gray-500 text-center mx-auto">

        ai/ml | fullstack | project management
      </p>

      {/* </div> */}
      {/* </div> */}
      {/* </CardBody> */}
      {/* </Card> */}

      {/* <p className="text-xl mb-6 text-gray-300 text-center-left mx-40">
        recent cs grad passionate about ai/ml, web dev, game dev, and making the world a better place :)
        <br /> <br />
      </p> */}

      {/* <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardBody>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-300">
              awawaa move this to the right and replace with a picture of me? im gonna draw myself?
            </p>
          </CardBody>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardBody>
            <h2 className="text-2xl font-semibold mb-4">header</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>thing</li>
              <li>thing</li>
            </ul>
          </CardBody>
        </Card>
      </div> */}


    </motion.div>
  )
}
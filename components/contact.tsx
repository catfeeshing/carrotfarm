import { useState } from 'react';
// import Draggable from 'react-draggable'; 
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';

export const Contact = () => {

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* swap for google form / try the endpoint thing (inspect to get field names and submit endpoint) */}
            

            <h2 className="text-3xl font-bold mb-3 text-center">get in touch!</h2>

            <p className="text-l mb-6 text-gray-300 text-center">
              feel free to reach out for any reason!
              <br></br>
              always open to questions and collaboration B)
            </p>

            <Card className="bg-gray-800 border-gray-700 max-w-xl mx-auto">
              <CardBody className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white h-32" 
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button color="primary" className="w-full">Send Message</Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>

    )
}
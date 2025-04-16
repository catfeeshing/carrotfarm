import { useState } from 'react';
// import Draggable from 'react-draggable'; 
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab, Popover, PopoverTrigger, PopoverContent } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser, FiCopy } from 'react-icons/fi';
import { siteConfig } from '@/config/site';
import { Link } from "@heroui/link";

export const Contact = () => {

    function copyPersonalEmail() {
        navigator.clipboard.writeText(siteConfig.links.emailPersonal);
    }

    function copySchoolEmail() {
        navigator.clipboard.writeText(siteConfig.links.emailSchool);
    }

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            {/* swap for google form / try the endpoint thing (inspect to get field names and submit endpoint) */}


            <h1 className="text-center text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-pink-400 to-purple-700">
        let's get in touch!
      </h1>

            <p className="text-l mb-7 text-gray-300 text-center">
                feel free to reach out for any reason!
                <br></br>
                always open to questions and collaboration.
            </p>

            {/* <p className="text-l mb-6 text-gray-300 text-center">
              feel free to reach out for any reason!
              <br></br>
              always open to questions and collaboration B)
              <br></br> <br></br>
              you can find me at:
            </p> */}

            <Card className="bg-gray-800 border-gray-700 max-w-80 mx-auto">
                <CardBody className="p-6 text-center font-semibold text-cyan-300">

                    {/* personal email */}

                    <p>
                        <Link className="text-indigo-300" href='mailto:carolyn.cui@gmail.com'>carolyn.cui@gmail.com &nbsp;</Link>

                        <Link ><Popover placement="right" showArrow={true}>
                            <PopoverTrigger onClick={copyPersonalEmail}>
                                <FiCopy style={{ display: "inline" }} className="text-default-500 cursor-pointer" />
                            </PopoverTrigger> 
                            <PopoverContent>
                                Email copied to clipboard!
                            </PopoverContent>
                        </Popover>
                        </Link>
                    </p>
                    <br></br>

                    {/* School email */}

                    <p>
                        <Link className="text-indigo-300" href='mailto:ccui3@ucmerced.edu'>ccui3@ucmerced.edu &nbsp;</Link>

                        <Link ><Popover placement="right" showArrow={true}>
                            <PopoverTrigger onClick={copyPersonalEmail}>
                                <FiCopy style={{ display: "inline" }} className="text-default-500 cursor-pointer" />
                            </PopoverTrigger> 
                            <PopoverContent>
                                Email copied to clipboard!
                            </PopoverContent>
                        </Popover>
                        </Link>
                    </p>


                </CardBody>
            </Card>


            <div className="mt-10 flex justify-center space-x-4">
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
                    // color="primary"
                    size="lg"
                    href="https://linkedin.com/in/carolyncui"
                    as="a"
                    target="_blank"
                >
                    LinkedIn
                </Button>
            </div>

            {/* <Card className="bg-gray-800 border-gray-700 max-w-xl mx-auto">
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
            </Card> */}


        </motion.div>

    )
}
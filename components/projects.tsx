import { useState } from 'react';
// import Draggable from 'react-draggable'; 
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';

export const Projects = () => {

    return (
        
        <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold mb-6">My Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700">
                          <CardBody>
                            <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
                            <p className="text-gray-300 mb-4">
                              decriptoin
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="bg-blue-900 text-xs px-2 py-1 rounded">Next.js</span>
                              <span className="bg-blue-900 text-xs px-2 py-1 rounded">TypeScript</span>
                              <span className="bg-blue-900 text-xs px-2 py-1 rounded">React</span>
                            </div>
                          </CardBody>
                          <CardFooter className="justify-between">
                            <Button size="sm" variant="flat" color="primary">website/demo</Button>
                            <Button size="sm" variant="flat">code</Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </motion.div>

    )
}
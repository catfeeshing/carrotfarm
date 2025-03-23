import { useState } from 'react';
// import Draggable from 'react-draggable'; 
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';

export const Skills = () => {

    return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">skills & technologies</h2>

            <h3 className="text-2xl font-semibold mb-4">web development</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                // this was originally autofilled please replace with actual skills and split into sections eg a section for aiml a section for webdev etc
                // "JavaScript", "TypeScript", "React", "Next.js", 
                // "Node.js", "HTML/CSS", "Tailwind", "Git",
                // "REST APIs", "GraphQL", "Docker", "AWS"
                "JavaScript", "TypeScript", "React", "Next.js",
                "Node.js", "HTML/CSS", "Tailwind",
              ].map((skill, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardBody className="items-center p-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <h3 className="text-lg font-medium">{skill}</h3>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* is this allowed in professional web development... my pure html/css background is showing.. */}
            <br /> 

            <h3 className="text-2xl font-semibold mb-4">web development</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                // this was originally autofilled please replace with actual skills and split into sections eg a section for aiml a section for webdev etc
                // "JavaScript", "TypeScript", "React", "Next.js", 
                // "Node.js", "HTML/CSS", "Tailwind", "Git",
                // "REST APIs", "GraphQL", "Docker", "AWS"
                "JavaScript", "TypeScript", "React", "Next.js",
                "Node.js", "HTML/CSS", "Tailwind",
              ].map((skill, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardBody className="items-center p-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <h3 className="text-lg font-medium">{skill}</h3>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>

          </motion.div>
    )
}

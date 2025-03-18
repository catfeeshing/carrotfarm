// app/page.tsx
"use client";

import { useState } from 'react';
// import Image from 'next/image';
import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';

export default function Home() {

  const [activeTab, setActiveTab] = useState("about");
  
  // Simulated browser navigation state
  const [browserHistory, setBrowserHistory] = useState<string[]>(["about"]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const navigateTo = (tab: string) => {
    const newHistory = browserHistory.slice(0, historyIndex + 1);
    newHistory.push(tab);
    setBrowserHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setActiveTab(tab);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setActiveTab(browserHistory[historyIndex - 1]);
    }
  };

  const goForward = () => {
    if (historyIndex < browserHistory.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setActiveTab(browserHistory[historyIndex + 1]);
    }
  };

  return (

    // adding a section to contain the content here messes with the "browser" in that the size is no longer constant across tabs if there's like less wide content in one place than another
    // if i remove the section it goes back to normal
    // also the browser itself is slightly transparent it's just a darker overlay to begin with.. need to fix...

    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    
    // <div className="fixed inset-0 justify-center align-middle items-end opacity-50 z-[0]" >
    //   <Image
    //   alt="NextUI hero Image"
    //   src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
    //   width={10000}
    //   height={10000}
    //   className="" 
    //   />
    // </div>
    

    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Browser-like navbar */}
      <div className="border border-gray-700 rounded-t-lg bg-gray-800 mx-auto max-w-6xl mt-8">
        <div className="flex items-center p-2 border-b border-gray-700">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          {/* change to onpress -- why does that break things though */}

          <div className="flex space-x-2 mr-4">
            <Button 
              isIconOnly 
              size="sm" 
              variant="flat" 
              onClick={goBack} 
              isDisabled={historyIndex <= 0}
            >
              ←
            </Button>
            <Button 
              isIconOnly 
              size="sm" 
              variant="flat" 
              onClick={goForward} 
              isDisabled={historyIndex >= browserHistory.length - 1}
            >
              →
            </Button>
            <Button 
              isIconOnly 
              size="sm" 
              variant="flat" 
              onClick={() => navigateTo("about")}
            >
              ↻
            </Button>
          </div>
          
          <div className="flex-1 bg-gray-700 rounded-md p-1 text-sm text-center">
            https://carrotfarm.com/{activeTab}
          </div>
        </div>
        
        <Tabs 
          selectedKey={activeTab} 
          onSelectionChange={(key) => navigateTo(key as string)}
          className="p-2"
          variant="underlined"
          color="primary"
        >
          <Tab key="about" title={<div className="flex items-center gap-2"><FiUser />About</div>} />
          <Tab key="projects" title={<div className="flex items-center gap-2"><FiFolder />Projects</div>} />
          <Tab key="skills" title={<div className="flex items-center gap-2"><FiMonitor />Skills</div>} />
          <Tab key="terminal" title={<div className="flex items-center gap-2"><RiTerminalBoxFill />Terminal</div>} />
          <Tab key="contact" title={<div className="flex items-center gap-2"><FiMail />Contact</div>} />
        </Tabs>
      </div>
      
      {/* Content area */}
      <div className="border-x border-b border-gray-700 rounded-b-lg bg-gray-900 mx-auto max-w-6xl p-8 min-h-[70vh]">
        {activeTab === "about" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              hi, i'm carolyn !
            </h1>
            <p className="text-xl mb-6 text-gray-300">
              recent cs grad kind of obsessed with ai/ml and with making the world a better place :)
              <br />
              currently building things i find cool!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
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
            </div>
            <div className="mt-10 flex justify-center space-x-4">
              <Button 
                startContent={<FaGithub />}
                variant="flat"
                color="default"
                size="lg"
                href="https://github.com/yourusername"
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
                href="https://linkedin.com/in/yourusername"
                as="a"
                target="_blank"
              >
                LinkedIn
              </Button>
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
            </div>
          </motion.div>
        )}
        
        {activeTab === "projects" && (
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
        )}
        
        {activeTab === "skills" && (
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
        )}
        
        {activeTab === "terminal" && (
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
        )}
        
        {activeTab === "contact" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">get in touch!</h2>
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
        )}
      </div>
      
      {/* Status bar */}
      <div className="mx-auto max-w-6xl mt-2 mb-8 px-4 text-gray-400 text-sm flex justify-between">
        <div>made with next.js & heroUI !</div>
      </div>
    </div>
    // </section>
  );
}
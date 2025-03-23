// app/page.tsx
"use client";

import { useState } from 'react';
import Draggable from 'react-draggable'; 
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';

// Subpages
import { About }  from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Terminal } from '@/components/terminal';
import { Contact } from '@/components/contact';


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


  // function to drag window around maybe

  return (  

    // <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    // <Draggable>
    <div className="min-h-screen position-absolute">
      {/* Browser-like navbar */}
      <div className="border border-gray-700 rounded-t-lg bg-gray-800 mx-auto max-w-6xl mt-4">
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
      
      {/* Subpages */}
      <div className="border-x border-b border-gray-700 rounded-b-lg bg-gray-900 mx-auto max-w-6xl p-8 min-h-[70vh] max-h-8 overflow-auto">
        {activeTab === "about" && (
          <About />
        )}
        
        {activeTab === "projects" && (
          <Projects />
        )}
        
        {activeTab === "skills" && (
          <Skills />
        )}
        
        {activeTab === "terminal" && (
          <Terminal />
        )}
        
        {activeTab === "contact" && (
          <Contact />
        )}
      </div>
      
      {/* Footer (outside window) */}
      <div className="mx-auto max-w-6xl mt-2 mb-8 px-4 text-gray-400 text-sm flex justify-between">
        <div>made with next.js & heroUI !</div>
      </div>
    </div>
    // </Draggable>
  );
}
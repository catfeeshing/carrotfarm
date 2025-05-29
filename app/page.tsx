// app/page.tsx
"use client";

import { useState } from 'react';
import Draggable from 'react-draggable';
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab, Input, Select, SelectItem, SelectSection } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaHome, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser, FiTerminal } from 'react-icons/fi';

// Subpages

// future feature: when scrolled to bottom, switch to next tab seamlessly?

import { BrowserHome } from '@/components/pages/home';
import { About } from '@/components/pages/about';
// import { Skills } from '@/components/pages/skills';
import { Projects } from '@/components/pages/projects';
import { Terminal } from '@/components/pages/terminal';
import { Contact } from '@/components/pages/contact';
import ImageColorPicker from '@/components/pages/colorpicker';
import { Experience } from '@/components/pages/experience';


export default function Home() {

  const [activeTab, setActiveTab] = useState("");

  const pages = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    // skills: <Skills />,
    terminal: <Terminal />,
    contact: <Contact />,
    color: <ImageColorPicker />,
    experience: <Experience />
  };

  // Simulated browser navigation state
  const [browserHistory, setBrowserHistory] = useState<string[]>([""]);
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

  // save htis for later, not important feature

  // const onScrollNextTab = () => {
    // if cannot scroll fire off a scrolling event?
    // if (activeTab === "" || activeTab === "contact") {
    //   return;
    // }

  // }


  // function to drag window around maybe

  return (

    // <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    // <Draggable>
    <div className="min-h-screen position-absolute">
      {/* Browser-like navbar */}
      <div className="border border-gray-700 rounded-t-lg bg-gray-800 mx-auto max-w-6xl mt-4">
        <div className="flex items-center p-2 border-b border-gray-700">
          <div className="flex space-x-2 mr-4 ml-1">
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
              onClick={() => navigateTo(activeTab)}
            >
              ↻
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              onClick={() => navigateTo("")}
            >
              <FaHome />
            </Button>
          </div>

          <div className="flex-1 rounded-md p-1 text-sm text-center">
            <Input
              // change color of background later to get rid of secondary color border
              classNames={{
                inputWrapper: [
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "!cursor-text",
                ]
              }}
              isClearable
              placeholder={`https://carrotfarm.com/${activeTab}`}
              // type="url"
              // this is not what im looking for nvm
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log("Enter pressed in URL bar");
                  const inputValue = (e.target as HTMLInputElement).value;

                  if (inputValue in pages) {
                    console.log("internal url:", inputValue);
                    if (inputValue === "home") {
                      navigateTo("");
                      // quick catch for home -- fix later
                    }
                    else{
                      navigateTo(inputValue);
                    }
                  }
                  

                  // enter with no input or invalid url -- just a very simple check and can be bypassed but unless someone is actively trying to catch bugs it should be okay for now
                  else if (inputValue === "" || !inputValue.includes(".")) {
                    return;
                  }
                  // maybe handle w switch in future idk
                  // messy

                  // trying to clear the url bar after pressing enter
                  // it is not working. yet
                  // will ensure the url bar is always accurate bc the placeholder updates automatically
                  // (e.target as HTMLInputElement).value = '';

                  else if (inputValue.startsWith("https://carrotfarm.com")) {
                    const tab = inputValue.replace("https://carrotfarm.com/", "");
                    if (!(tab in pages)) {
                      // temporary: in future navigate to 404 page if i want to be extra
                      const tab = "";
                      navigateTo(tab);
                    }
                    else {
                      navigateTo(tab);
                    }
                  }
                  else if (inputValue.startsWith("carrotfarm.com")) {
                    const tab = inputValue.replace("carrotfarm.com/", "");
                    if (!(tab in pages)) {
                      // temporary: in future navigate to 404 page if i want to be extra
                      const tab = "";
                      navigateTo(tab);
                    }
                    else {
                      navigateTo(tab);
                    }

                    // everything else
                  }
                  // else if (inputValue in pages) {
                  //   console.log("internal url:", inputValue);
                  //   navigateTo(inputValue);
                  // }
                  else {
                    console.log("ext url:", inputValue);
                    const externalUrl = inputValue.startsWith("http") ? inputValue : `https://${inputValue}`;
                    window.open(externalUrl, "_blank");
                  }
                }
              }}
            />

            {/* old url bar */}

            {/* <div className="flex-1 bg-gray-700 rounded-md p-1 text-sm text-center">
              https://carrotfarm.com/{activeTab}
            </div> */}
          </div>
        </div>

        <div className="hidden sm:block">
          <Tabs
            selectedKey={activeTab}
            onSelectionChange={(key) => navigateTo(key as string)}
            className="p-2"
            variant="underlined"
            color="primary"
            classNames={{
              tabList: "flex sm:flex-nowrap gap-2 w-full overflow-x-auto flex-wrap",
            }}
          >
            <Tab
              key=""
              title={<div className="flex items-center gap-2"><FaHome />Home</div>} 
            />
            <Tab
              key="about"
              title={
                <div className="flex items-center gap-2">
                  <FiUser />
                  About
                </div>
              }
            />
            <Tab
              key="experience"
              title={
                <div className="flex items-center gap-2">
                  <FiFolder />
                  Experience
                </div>
              }
            />
            <Tab
              key="projects"
              title={
                <div className="flex items-center gap-2">
                  <FiFolder />
                  Projects
                </div>
              }
            />
            <Tab
              key="contact"
              title={<div className="flex items-center gap-2"><FiMail />Contact</div>} 
            />
          </Tabs>
        </div>

                {/* Mobile Dropdown - visible only on mobile */}
                <div className="sm:hidden p-2">
          <Select
            selectedKeys={[activeTab]}
            onSelectionChange={(keys) => {
              const selectedKey = Array.from(keys)[0] as string;
              navigateTo(selectedKey);
            }}
            placeholder="Navigate to..."
            className="max-w-full"
            variant="underlined"
            size="md"
            classNames={{
              trigger: "bg-transparent border-b-2 border-gray-600 pb-2",
              value: "text-white",
              popoverContent: "bg-gray-800 border border-gray-700 rounded-lg",
              listbox: "bg-gray-800"
            }}
            renderValue={(items) => {
              const item = items[0];
              if (!item) return "Navigate to...";
              
              const getIcon = (key: string) => {
                switch(key) {
                  case "": return <FaHome className="text-sm" />;
                  case "about": return <FiUser className="text-sm" />;
                  case "experience": return <FiFolder className="text-sm" />;
                  case "projects": return <FiFolder className="text-sm" />;
                  case "contact": return <FiMail className="text-sm" />;
                  default: return null;
                }
              };
              
              const getLabel = (key: string) => {
                switch(key) {
                  case "": return "Home";
                  case "about": return "About";
                  case "experience": return "Experience";
                  case "projects": return "Projects";
                  case "contact": return "Contact";
                  default: return key;
                }
              };
              
              return (
                <div className="flex items-center gap-2 text-primary">
                  {getIcon(item.key as string)}
                  {getLabel(item.key as string)}
                </div>
              );
            }}
          >

            {/* there is also probably a way to simplify this! fix later */}
            <SelectItem 
              key="" 
              startContent={<FaHome className="text-sm text-gray-400" />}
              classNames={{
                base: "hover:bg-gray-700 data-[selected=true]:bg-gray-700/50",
                title: "text-gray-400"
              }}
            >
              Home
            </SelectItem>
            <SelectItem 
              key="about" 
              startContent={<FiUser className="text-sm text-gray-400" />}
              classNames={{
                base: "data-[selected=true]:bg-gray-700/50",
                title: "text-gray-400"
              }}
            >
              About
            </SelectItem>
            <SelectItem 
              key="experience" 
              startContent={<FiFolder className="text-sm text-gray-400" />}
              classNames={{
                base: "hover:bg-gray-700 data-[selected=true]:bg-gray-700/50",
                title: "text-gray-400"
              }}
            >
              Experience
            </SelectItem>
            <SelectItem 
              key="projects" 
              startContent={<FiFolder className="text-sm text-gray-400" />}
              classNames={{
                base: "hover:bg-gray-700 data-[selected=true]:bg-gray-700/50",
                title: "text-gray-400"
              }}
            >
              Projects
            </SelectItem>
            <SelectItem 
              key="contact" 
              startContent={<FiMail className="text-sm text-gray-400" />}
              classNames={{
                base: "hover:bg-gray-700 data-[selected=true]:bg-gray-700/50",
                title: "text-gray-400"
              }}
            >
              Contact
            </SelectItem>
          </Select>
        </div>
      </div>

      {/* Subpages */}
      <div className="border-x border-b border-gray-700 rounded-b-lg bg-gray-900 mx-auto max-w-6xl p-8 min-h-[70vh] max-h-8 overflow-auto">
        {(activeTab === "" || activeTab === "home") && (
          <>
            <div className="overflow-y-hidden">
              <BrowserHome 
              />


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >

                <div className="mt-10 flex justify-center space-x-4">
                  <Button
                    startContent={<FiTerminal />}
                    variant="flat"
                    color="secondary"
                    size="lg"
                    as="a"
                    // on press navigate to projects page
                    // href="#projects"
                    onClick={() => navigateTo("projects")}

                  >
                    View Projects
                  </Button>

                </div>

                <div className='mt-4 flex justify-center space-x-4'>

                  <Button
                    startContent={<FiMail />}
                    variant="flat"
                    color="default"
                    size="lg"
                    // href="https://linkedin.com/in/carolyncui"
                    as="a"
                    target="_blank"
                    onClick={() => navigateTo("contact")}
                  >
                    Contact
                  </Button>

                </div>


              </motion.div>
            </div>

            

          </>

        )}

        {activeTab === "about" && (
          <About />
        )}

        {activeTab === "experience" && (
          <Experience />
        )}

        {activeTab === "projects" && (
          // <div id = "projects">
          <Projects />
          // </div>
        )}

        {/* {activeTab === "skills" && (
          <Skills />
        )} */}

        {/* {activeTab === "terminal" && (
          <Terminal />
        )} */}

        {activeTab === "contact" && (
          <Contact />
        )}

        {activeTab === "color" && (
          <ImageColorPicker />
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
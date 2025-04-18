"use client";

import { useEffect } from "react";

import { useState } from 'react';
import Draggable from 'react-draggable'; 
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab, Input } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaHome, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';

// delete later/not important/might not work the way I think it will because this is not a real browser

// Subpages
import { BrowserHome }  from '@/components/pages/home';
import { Skills } from '@/components/pages/skills';
import { Projects } from '@/components/pages/projects';
import { Terminal } from '@/components/pages/terminal';
import { Contact } from '@/components/pages/contact';
import { About } from '@/components/pages/about';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

    const [activeTab, setActiveTab] = useState("");
  
    const pages = {
      home: <BrowserHome />,
      about: <About />,
      projects: <Projects />,
      skills: <Skills />,
      terminal: <Terminal />,
      contact: <Contact />,
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

  return (
    <div>
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
              // onClick={goBack}
              // isDisabled={historyIndex <= 0}
            >
              ←
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              // onClick={goForward}
              // isDisabled={historyIndex >= browserHistory.length - 1}
            >
              →
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              // onClick={() => navigateTo(activeTab)}
            >
              ↻
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="flat"
              // onClick={() => navigateTo("")}
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
                  const inputValue = (e.target as HTMLInputElement).value;

                  // enter with no input or invalid url -- just a very simple check and can be bypassed but unless someone is actively trying to catch bugs it should be okay for now
                  if (inputValue === "" || !inputValue.includes(".")) {
                    return;
                  }
                  // maybe handle w switch in future idk
                  // messy

                  // trying to clear the url bar after pressing enter
                  // it is not working. yet
                  // will ensure the url bar is always accurate bc the placeholder updates automatically
                  // (e.target as HTMLInputElement).value = '';
                  
                  if (inputValue.startsWith("https://carrotfarm.com")) {
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
                  } else {
                    window.open(inputValue, "_blank");
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

        <Tabs
          selectedKey={activeTab}
          onSelectionChange={(key) => navigateTo(key as string)}
          className="p-2"
          variant="underlined"
          color="primary"
        >
          <Tab
            key=""
            title={<div className="flex items-center gap-2"><FaHome />Home</div>} />

          <Tab key="about" title={<div className="flex items-center gap-2"><FiUser />About</div>} />
          <Tab key="projects" title={<div className="flex items-center gap-2"><FiFolder />Projects</div>} />
          <Tab key="skills" title={<div className="flex items-center gap-2"><FiMonitor />Skills</div>} />
          {/* flex: i stole from aaron and thought i might want to include something like a terminal but maybe not anymore. pondering. */}
          {/* <Tab key="terminal" title={<div className="flex items-center gap-2"><RiTerminalBoxFill />Terminal</div>} /> */}
          <Tab key="contact" title={<div className="flex items-center gap-2"><FiMail />Contact</div>} />
        </Tabs>
      </div>

      {/* Subpages */}
      <div className="border-x border-b border-gray-700 rounded-b-lg bg-gray-900 mx-auto max-w-6xl p-8 min-h-[70vh] max-h-8 overflow-auto">
        {activeTab === "" && (
          <BrowserHome />
        )}

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
      {/* </Draggable> */}

      <div>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}

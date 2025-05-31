import { useState } from 'react';
// import Draggable from 'react-draggable'; 
// import Image from 'next/image';
// import {Image} from "@heroui/image";
import { Card, CardBody, CardFooter, Button, Tabs, Tab, Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiTerminalBoxFill } from 'react-icons/ri';
import { FiMonitor, FiFolder, FiMail, FiUser } from 'react-icons/fi';
import skillsDisplay from '@/components/parts/skillDisplay'
import { Skills } from './skills';
import SkillsDisplay from '@/components/parts/skillDisplay';
// import {Accordion, AccordionItem} from "@heroui/accordion";

export const About = () => {

  const bookAccordion = (
    <div>
      help
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <h1 className="text-center text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-500">
        about me
      </h1>
      {/* <p className="text-xl mb-6 text-gray-300">
                      I'm a recent computer science grad with 
                    </p> */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* <ul className="list-disc list-inside text-gray-300">
              <li>
                read! (mainly science fiction & fantasy)
                <br />
                <span className="text-gray-400">
                favorite books:
                <br />
                + illuminae trilogy by amie kaufman and jay kristoff
                <br />
                + legend trilogy by marie lu

                <br /><br />

                currently reading:
                <br />
                + the poppy war by r.f. kuang
                <br />
                + omniscient reader's viewpoint by sing shong
                </span>
           
              </li>
            </ul> */}

        <div className="bg-gray-900 text-gray-100 min-h-screen p-6">

          <div className="flex max-w-xl mx-auto">
            {/* Timeline and period */}
            <div className="w-1/7 pr-6 relative text-right">
              <div className="text-purple-300 text-xl font-medium mb-4"></div>
              <div className="absolute right-0 top-0 h-full flex items-center">
                <div className="w-[4px] h-full bg-gradient-to-b from-blue-400 via-pink-300 to-purple-400 to"></div>
              </div>
            </div>



            {/* not programming */}
            <div className="w-auto pl-6 pb-6">
              {/* <div className="bg-gray-800 rounded-lg p-6 shadow-lg"> */}
              <span className="text-pink-200 font-semibold">
                {/* When I'm not programming, you can find me... */}

                I'm a somewhat overambitious problem solver and avid hat wearer with a passion for building community and AI/ML, especially foundation and world models, digital twins, and multiagent systems. I also dip my feet in web dev, game dev, and whatever else catches my eye! I like doing a bit of everything.

                <br />
                <br />
                </span>

                <Card
  
                  className="px-3 py-1 p-4 bg-gray-700 text-gray-300 rounded-lg text-sm"
                >
                  <b>💡 Fun (?) fact!</b> I also really like hackathons for whatever reason! My strange addiction started in November 2022 with a computer vision project using YOLOv4. Although not much compared to most, I've won or placed in 5 out of 7 hackathons I've participated in c: (long recharge time needed...)
                </Card>

                {/* <br /> */}
                <br />

                {/* My strange addiction started in 2022

            <br />
            <br /> */}


                <span className="text-pink-100 mb-1">
                  I'm currently juggling a few things and projects, from a day job to being an eldest daughter, but here are my main focuses:
                </span>

                <span className="text-gray-400">
                  <ul className="list-disc list-inside text-gray-400">
                    <li>building a personal website (this one!)</li>
                    <li>learning NLP (and fine-tuning a personal assistant for translation help)</li>
                    <li>Mirai Game Project (out of hiatus!)</li>
                    <li>shuffld, a website for listening to music with strangers</li>
                    <li>unnamed writing website, a Wattpad-esque platform for original writing and characters</li>
                  </ul>
                </span>

              

              <br />

              <span className="text-pink-100 ">
                Computer science has been my dream major since elementary school, a dream born of a need to create, whether it be through the visual and narrative arts or through programming.
                <br />
                <br />
                I especially love the thought of creating community and connection through technology and harnessing new technologies sustainably and ethically.

                {/* umm maybe don't include this?? LOL */}

                {/* <br />
                <br />

                I may or may not have a short attention span—I enjoy learning anything and everything. */}
              </span>

              <span className="text-gray-400">
                <br />
                <br />
                When I'm not being a workaholic, you can find me writing my debut novel drafts (I promise they're coming along), doing digital art (from Minecraft skins to larger pieces), translating Chinese to English for multimedia, reading, exploring the Honkaiverse, and watching donghua! I also really like backseating (aka mentoring GDG on Campus: UC Merced against their will).
              </span>
              {/* </div> */}
            </div>

          </div>
          {/* <SkillsDisplay /> */}
        </div>










        {/* gave up with individual accordion objects for now */}
        {/* <Accordion
              className="max-w-[90%]"
              variant="splitted">
              <AccordionItem title="reading! (mainly science fiction & fantasy)" className="text-green-700 bg-gray-800">
                <span className="text-gray-400">
                  {bookAccordion}
                </span>
              </AccordionItem>
            
              <AccordionItem title="gaming!" className="text-gray-200">
                <span className="text-gray-400">
                  current favorite games:
                  <br />
                  + mihoyo games (you should play honkai impact 3rd!)
                  <br />
                  + guilongchao 归龙潮 (awesome character designs and gameplay!)
                  <br />
                  + city builder sims 
                  <br />
                  + project sekai (vocaloid fan since 2012)
                </span>
              </AccordionItem>
            </Accordion> */}

        {/* skills section */}

        <div>
          <SkillsDisplay />
        </div>
      </div>









      {/* <div>
        <span className="text-gray-400">
          <br />
          When I'm not programming, I like to...
          </span>
      <Accordion
              className="max-w-[80%] mx-auto"
              variant="splitted">
              <AccordionItem title="read! (mainly science fiction & fantasy)" className="text-gray-300 bg-gray-800">
                <span className="text-gray-400">
                  {bookAccordion}
                </span>
              </AccordionItem>
              <AccordionItem title="play games!" className="text-gray-200">
                <span className="text-gray-400">
                  favorite games:
                  <br />
                  + mihoyo games (honkai 3rd/sr, genshin, tot)
                  <br />
                  + guilongchao 归龙潮 (awesome character designs and gameplay!)
                  <br />
                  + city builder sims 
                  <br />
                  + project sekai (vocaloid fan since 2012)
                </span>
              </AccordionItem>
            </Accordion>
            </div> */}





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
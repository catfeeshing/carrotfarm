import { useState } from 'react';
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { Link } from "@heroui/link";

export const Projects = () => {

  // key doesn't change anything if removed
  // keeping for now just in case

  const projects = [
    {
      key: 1,
      title: "Storyscape",
      date: "October 2024",
      description: "An app with voice-to-voice interaction, sentiment analysis, and more for encouraging kids to practice reading in the style of choose-your-own-adventure. Cal Hacks 11.0 project, Google Cloud Most Creative.",
      tags: ["Next.js", "TypeScript", "React", "Tailwind", "Firebase"],
      demoLink: "storyscape.courses",
      codeLink: "https://github.com/catfeeshing/storyscape/",
      category: ["Web Dev", "AI/ML"],
    },
    {
      key: 2,
      title: "A Definition and Taxonomy of Digital Twins",
      date: "2025",
      description: "Defining the interface between Digital Twins, AI/ML, and HPC in science. We provide a comprehensive analysis, taxonomy, case studies, and identify key future research like hybrid assimilation and physics-informed ML.",
      tags: ["Publications", "AI/ML", "Python"],
      demoLink: "https://www.frontiersin.org/journals/high-performance-computing/articles/10.3389/fhpcp.2025.1536501/full",
      codeLink: null,
      category: ["Publications","AI/ML"],
    },
    {
      key: 7,
      title: "Mirai Project",
      date: "Dec. 2019 - 2022, Feb. 2025 - Present",
      description: "Upcoming anime-style 2D MMORPG for teens and young adults, built with Unity. Community of 2,500+ and growing. We're just coming out of hiatus and working quietly in the background :) I handle social media and community plus team management! Website and MVP in progress with custom solutions for item layering, login, chat, etc.",
      tags: ["Web Dev", "Game Dev", "C#", "Unity"],
      demoLink: null,
      codeLink: null,
      category: ["Web Dev", "Other"],
    },
    {
      key: 3,
      title: "IndySCC 2024: Find My Cat - Cat Detector Submission",
      date: "November 2024",
      image: "https://hips.hearstapps.com/hmg-prod/images/types-of-fluffy-cat-breeds-ragdoll-664670a9d2268.jpg?crop=0.6669811320754717xw:1xh;center,top&resize=980:*",
      description: "Built in under 48 hours, a cat detector fine-tuned on 11,000+ images to find cats and partial cats. Achieved 0.98 mAP and precision/recall > 0.96.",
      tags: ["AI/ML", "Python", "PyTorch", "Computer vision"],
      demoLink: "https://docs.google.com/document/d/1uKgp1HCNMBooS6sxVrL3qG-r6xQUqjhU4KCAsR86UJM/edit?usp=drive_link",
      codeLink: "https://github.com/catfeeshing/indysccats",
      category: ["AI/ML"],
    },
    {
      key: 4,
      title: "LocalNote",
      date: "May 2025 - Present",
      description: "Localization project assistant web app for personal use at the moment. Built in LLM to help me with my translations (got tired of alt-tabbing between dictionaries, Google Translate, my notes, etc.)! Disclaimer: GTranslate is used for sanity checking!!!",
      tags: ["AI/ML", "Web Dev", "TypeScript"],
      demoLink: null,
      codeLink: null,
      category: ["AI/ML", "Web Dev"],
    },
    {
      key: 5,
      title: "CarrotKit (Carrot Toolkit)",
      date: "Mar. 2025 - Present",
      description: "Ongoing private (and soon public when there's more to it) project with assorted tools. Current highlight is a custom-made color picker for my Minecraft skin making needs--I realized I have free will and online tools weren't cutting it. Actually, you can interact with a very early and slightly buggy version of it in this portfolio! Enter 'color' in the URL bar to try it out.",
      tags: ["Web Dev", "TypeScript", "React"],
      demoLink: null,
      codeLink: null,
      category: ["Web Dev"],
    },
    {
      key: 6,
      title: "NASA Space Apps Challenge 2023: Develop the Oracle of DSCOVR",
      date: "Oct. 2023",
      description: "Local event 1st place, global nominee. Cleaned DSCOVR data. Responsible for problem statement and solution formulation, data engineering, model development/testing (attempted different models, incl. LSTM), and presentation. Model is a simple MLP that outputs probability mass indices for varying solar storm strengths based on solar wind data.",
      tags: ["AI/ML", "Python", "TensorFlow"],
      demoLink: null,
      codeLink: null,
      category: ["AI/ML"],
    },
    // {
    //   key: "",
    //   title: "LocalNote",
    //   date: "May 2025 - Present",
    //   description: "Localization project assistant web app for personal use at the moment. Built in LLM to help me with my translations (got tired of alt-tabbing between dictionaries, Google Translate, my notes, etc.)! Disclaimer: GTranslate is used for sanity checking!!!",
    //   tags: ["AI/ML", "Web Dev", "TypeScript"],
    //   demoLink: null,
    //   codeLink: null,
    //   category: ["AI/ML", "Web Dev"],
    // },
    {
      key: 8,
      title: "Stop Sign Detector",
      date: "November 2022",
      description: "This is not an impressive project. It was mainly copy and paste and a lot of pain with data engineering and image processing. But I'm including it because it marked the start of a path that would change my life :) I also don't think the demo works, but just sharing the code anyhow...",
      tags: ["AI/ML", "Python", "TensorFlow", "Computer vision"],
      demoLink: null,
      codeLink: "https://colab.research.google.com/drive/1hlYgYuv-uormtpOixMxzv9RK5SnW1P_c?usp=drive_link",
      category: ["AI/ML"],
    },
  ];

  const renderProjects = (filterCategory: string) => {
    const filteredProjects =
      filterCategory === "All Projects"
        ? projects
        : projects.filter((project) => project.category.includes(filterCategory));

    const containerVariants = {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.07,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

      // consider masonry library as opposed to pure css
  // ok band aid for now

    return (
  <motion.div
    className="columns-1 md:columns-2 lg:columns-3 gap-4"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {filteredProjects.map((project) => (
      <motion.div 
        key={project.key} 
        variants={itemVariants}
        className="break-inside-avoid-column mb-4"
      >
        <Card className="bg-gray-800 border-gray-700">
          <CardBody>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{project.date}</p>

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}

            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-blue-900 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardBody>
          <CardFooter className="justify-between">
            {project.demoLink !== null ? (
              <Button
                size="sm"
                variant="flat"
                color="primary"
                href={project.demoLink}
              >
                website/demo
              </Button>
            ) : null}
            {project.codeLink !== null ? (
              <Button size="sm" variant="flat" href={project.codeLink}>
                code
              </Button>
            ) : null}
          </CardFooter>
        </Card>
      </motion.div>
    ))}
  </motion.div>
);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl text-center font-bold mb-4 text-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-500">
        projects
      </h1>
      <br />
      {/* makes it ugly and not really needed when i have a total of 1 publication */}
      {/* <h2 className="text-xl text-center font-bold mb-6 text-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        and publications, and more
      </h2> */}

      <p className="text-lg text-center mb-6 text-gray-300 mx-80">
        this section is currently under construction! more projects are on their way! you can view a few more of them in my <Link href="https://github.com/catfeeshing" target="_blank" className='text-lg'>github</Link>
        <br /> <br />
        </p>

      <div className="mx-auto text-center">
        <Tabs className="mb-3">
          <Tab title="All Projects">{renderProjects("All Projects")}</Tab>
          <Tab title="AI/ML">{renderProjects("AI/ML")}</Tab>
          <Tab title="Web Dev">{renderProjects("Web Dev")}</Tab>
          {/* <Tab title="Publications">{renderProjects("Publications")}</Tab> */}
          <Tab title="Other">{renderProjects("Other")}</Tab>
        </Tabs>
      </div>
    </motion.div>
  );
};

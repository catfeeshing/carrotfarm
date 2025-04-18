import { useState } from 'react';
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";

export const Projects = () => {

  // key doesn't change anything if removed
  // keeping for now just in case

  const projects = [
    {
      key: 1,
      title: "Storyscape",
      date: "October 2024",
      description: "Description for Project 1",
      tags: ["Next.js", "TypeScript", "React"],
      demoLink: "#",
      codeLink: "#",
      category: ["Web Dev", "AI/ML"],
    },
    {
      key: 1,
      title: "A Definition and ",
      date: "October 2024",
      description: "Description for Project 1",
      tags: ["Next.js", "TypeScript", "React"],
      demoLink: "#",
      codeLink: "#",
      category: ["Web Dev", "AI/ML"],
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

    return (
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.key} variants={itemVariants}>
            <Card className="bg-gray-800 border-gray-700">
              <CardBody>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
                <Button
                  size="sm"
                  variant="flat"
                  color="primary"
                  href={project.demoLink}
                >
                  website/demo
                </Button>
                <Button size="sm" variant="flat" href={project.codeLink}>
                  code
                </Button>
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
      <h2 className="text-xl text-center font-bold mb-6 text-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        and publications, and more
      </h2>

      <div className="mx-auto text-center">
        <Tabs>
          <Tab title="All Projects">{renderProjects("All Projects")}</Tab>
          <Tab title="AI/ML">{renderProjects("AI/ML")}</Tab>
          <Tab title="Web Dev">{renderProjects("Web Dev")}</Tab>
          <Tab title="Publications">{renderProjects("Publications")}</Tab>
          <Tab title="Other">{renderProjects("Other")}</Tab>
        </Tabs>
      </div>
    </motion.div>
  );
};

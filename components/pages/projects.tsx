import { useState } from 'react';
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      key: 1,
      title: "Project 1",
      description: "Description for Project 1",
      tags: ["Next.js", "TypeScript", "React"],
      demoLink: "#",
      codeLink: "#",
      category: "Full Stack",
    },
    {
      key: 2,
      title: "Project 2",
      description: "Description for Project 2",
      tags: ["Node.js", "Express", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
      category: "Full Stack",
    },
    {
      key: 3,
      title: "Project 3",
      description: "Description for Project 3",
      tags: ["Python", "Django", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
      category: "AI/ML",
    },
    {
      key: 4,
      title: "Project 4",
      description: "Description for Project 4",
      tags: ["Vue.js", "JavaScript", "CSS"],
      demoLink: "#",
      codeLink: "#",
      category: "Other",
    },
    {
      key: 5,
      title: "Project 5",
      description: "Description for Project 5",
      tags: ["Java", "Spring", "MySQL"],
      demoLink: "#",
      codeLink: "#",
      category: "Other",
    },
  ];

  const renderProjects = (filterCategory: string) => {
    const filteredProjects =
      filterCategory === "All Projects"
        ? projects
        : projects.filter((project) => project.category === filterCategory);

    return (
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.key} className="bg-gray-800 border-gray-700">
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
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl text-center font-bold mb-4 text-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        projects
      </h1>

      <Tabs>
        <Tab title="All Projects">{renderProjects("All Projects")}</Tab>
        <Tab title="Full Stack">{renderProjects("Full Stack")}</Tab>
        <Tab title="AI/ML">{renderProjects("AI/ML")}</Tab>
      </Tabs>
    </motion.div>
  );
};

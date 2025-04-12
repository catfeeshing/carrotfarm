import { Card, CardBody, Chip, Divider } from "@heroui/react";
import React from "react";

const SkillsDisplay = () => {
  const skillCategories = [
    {
      name: "Languages",
      color: "secondary",
      skills: ["Python", "C++", "Java", "Shell"],
    },
    {
      name: "ML/AI",
      color: "success",
      skills: ["TensorFlow/Keras", "PyTorch", "Scikit", "Pandas"],
    },
    {
      name: "Full-Stack",
      color: "primary",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Firebase", "Flask"],
    },
    {
      name: "Other",
      color: "secondary",
      skills: ["Git", "Docker","ArcGIS"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-none rounded-lg">
      {skillCategories.map((category) => (
        <Card key={category.name} className={`bg-${category.color} bg-opacity-5 border-none shadow-none`}>
          <CardBody className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 bg-${category.color}`}></div>
              <h2 className="text-s font-medium text-white">{category.name}</h2>
            </div>
            <div className="flex flex-col gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className={`p-3 bg-${category.color} bg-opacity-30 text-zinc-300 flex items-center text-s`}
                >
                  <span className="mr-2">□</span> {skill}
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default SkillsDisplay;
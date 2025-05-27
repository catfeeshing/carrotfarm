import { Card, CardBody } from "@heroui/react";
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
      skills: ["TensorFlow", "PyTorch", "Scikit", "A2A + MCP", "Pandas", "NumPy"],
    },
    {
      name: "Full-Stack",
      color: "primary",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Firebase", "Flask"],
    },
    {
      name: "Other",
      color: "secondary",
      skills: ["Git", "GCP", "Docker","ArcGIS"],
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4 bg-none rounded-lg">
        {skillCategories.map((category) => (
          <Card key={category.name} className={`bg-${category.color} bg-opacity-20 border-none shadow-none`}>
            <CardBody className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-3 h-3 bg-${category.color} rounded-sm`}></div>
                <h2 className="text-s font-medium text-white">{category.name}</h2>
              </div>
              <div className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`p-2 bg-${category.color} bg-opacity-30 text-zinc-300 flex items-center text-s`}
                  >
                    <span className="mr-2">□</span> {skill}
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="ml-6 mr-4 mb-6">
        <span className="text-gray-500">
          I don't like listing whole fields as my skills (e.g. "computer vision") because I feel like there's always more to learn {">"}_{"<"}
        </span>
      </div>
    </>
  );
};

export default SkillsDisplay;
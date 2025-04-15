import { motion } from 'framer-motion';

export const Experience = () => {
    const experiences = [
        {
            period: 'Sept. 2024 - Dec. 2024',
            title: 'CSE Remedial Tutor',
            company: 'UC Merced STEM Tutoring Hub',
            description: 'Taught primarily lower division students across multiple majors about a variety of computer science topics, mainly data structures, algorithms, programming fundamentals.',
            skills: ['Python', 'C++', 'C'],
            highlights: [

            ]
        },

        
        
        {
            period: 'Jun. 2024 - Dec. 2024',
            title: 'Undergraduate Research Intern - Machine Learning Team Lead',
            company: 'UC Merced Parallel and Distributed Systems (PADSYS) Lab',
            description: `Led a team of 4 fellow undergraduate students in learning about existing machine learning (ML)-based data-driven digital twin (DT) solutions, data assimilation for DTs, and the start of building a small ML-based DT prototype with PyTorch for UC Merced's experimental smart farm.`,
            skills: ['Python', 'TensorFlow', 'PyTorch', 'Digital Twins'],
            highlights: ['Paper published early 2025, second author: "A Definition and Taxonomy of Digital Twins"'

            ]
        },

        {
            period: 'May 2024 - Nov. 2024',
            title: 'Team Member (Profiler, Benchmarker, Designated AI Guy)',
            company: 'UC Merced IndySCC Team HIBOBCATS (now known as FelineOPS)',
            description: `Participated in the SC24 IndySCC (Indy Student Cluster Competition) as part of the UCM team's profiling and benchmarking subgroup. With the goal of maximizing performance and output on AMD Epyc and Intel Xeon clusters, ran different benchmarks like MLPerf for SDXL, BERT and programs like Nanoscale Molecular Dynamics (NAMD). Culminated in a 48-hour competition at SC24, plus a mystery application (Find My Cat), where we competed against teams around the world.`,
            skills: ['Python', 'PyTorch', 'MLPerf', 'OpenMP','Networking','HPC'],
            highlights: [
                'Optimized HPL for a peak of 74% theoretical max FLOPS on 8 and 30 node clusters.', 'Fine-tuned a fully reproducible cat detector for the mystery application (YOLOv9, 11,000+ images) to 0.98 mAP and with precision & recall > 0.96.'
            ]
        },
    
        {
            period: 'Jan. 2024 - May. 2024',
            title: 'Data Scientist - Intern',
            company: 'Omron Robotics & Safety Technologies',
            description: 'Explored early application of ML models for Omron to help prevent deadlocks in mobile robot fleets using limited time-series data, saving time on manual intervention. Our specific problem was called "taxilining," which can be thought of as making sure the robots are following the right leader.',
            skills: ['Python', 'Scikit', 'Pandas', 'XGBoost', 'TensorFlow'],
            highlights: ['Main models: SVM, XGBoost at 90% accuracy', 'Focused on data processing, data engineering', 'Established connection between the robot and model via MQTT (messaging protocol)'

            ]
        },
    ];

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >

            <h1 className="text-center text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-500">
                experience
            </h1>

            <div className="bg-gray-900 text-gray-100 min-h-screen p-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex max-w-6xl mx-auto">
                        {/* Timeline and period */}
                        <div className="w-1/4 pr-6 relative text-right">
                            <div className="text-purple-300 text-xl font-medium mb-4">{exp.period}</div>
                            <div className="absolute right-0 top-0 h-full flex items-center">

                                {/* <div className="w-px h-full bg-gray-700"></div> */}
                                {/* <div className="absolute w-4 h-4 bg-pink-300 right-0 transform translate-x-2"></div> */}
                                <div className="w-px h-full bg-gradient-to-b from-blue-400 via-pink-300 to-purple-400 to"></div>
                            </div>
                        </div>

                        {/* Experience details */}
                        <div className="w-3/4 pl-12 pb-12">
                            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                                <h2 className="text-2xl font-semibold text-purple-200 mb-1">{exp.title}</h2>
                                <h3 className="text-xl text-gray-400 mb-4">{exp.company}</h3>

                                <p className="text-gray-300 mb-4">{exp.description}</p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {exp.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* highlights */}
                                <div>
                                    {exp.highlights.length > 0 && (
                                        <h4 className="text-lg font-medium text-gray-200 mb-3">Highlights</h4>
                                    )}
                                    <ul className="list-disc pl-5 text-gray-300">
                                        {exp.highlights.length > 0 ? (
                                            exp.highlights.map((highlights, i) => (
                                                <li key={i} className="mb-2">{highlights}</li>
                                            ))
                                        ) : null}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
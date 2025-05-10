import React from 'react';
import { 
  LineChart, 
  Database, 
  Code2, 
  Terminal, 
  PieChart, 
  Workflow, 
  BarChart3,
  LucideIcon
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Data Analysis",
    skills: [
      { name: "Power BI", level: 95, icon: PieChart, color: "text-yellow-500" },
      { name: "SQL", level: 90, icon: Database, color: "text-blue-500" },
      { name: "Excel", level: 85, icon: BarChart3, color: "text-green-500" },
      { name: "Tableau", level: 80, icon: LineChart, color: "text-blue-400" },
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90, icon: Code2, color: "text-blue-600" },
      { name: "R", level: 75, icon: Terminal, color: "text-purple-500" },
      { name: "JavaScript", level: 70, icon: Code2, color: "text-yellow-400" },
      { name: "Data Pipelines", level: 85, icon: Workflow, color: "text-orange-500" },
    ]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized technical skills and tools used to transform raw data into meaningful insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{group.title}</h3>
              <div className="space-y-6">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className={`${skill.color}`} size={20} />
                          <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Python Libraries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
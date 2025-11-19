'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/app/data/portfolio'

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  cloud: 'Cloud & DevOps',
  erp: 'ERP/Platforms',
  ai: 'AI & Machine Learning',
  tools: 'Tools',
}

const levelColors: Record<'expert' | 'advanced', string> = {
  expert: 'bg-green-500',
  advanced: 'bg-blue-500',
  // intermediate: 'bg-yellow-500',
}

export function Skills() {
  const categories = ['frontend', 'backend', 'cloud', 'erp', 'ai', 'tools'] as const
  
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = portfolioData.skills.filter(
              (skill) => skill.category === category
            )
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="card"
              >
                <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
                  {categoryLabels[category]}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${levelColors[skill.level as keyof typeof levelColors] || 'bg-yellow-500'}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level === 'expert' ? '90%' : skill.level === 'advanced' ? '75%' : '60%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}


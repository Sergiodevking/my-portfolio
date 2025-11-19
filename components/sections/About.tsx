'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/app/data/portfolio'

export function About() {
  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {portfolioData.about.intro}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {portfolioData.about.specialization}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4 mt-8">My Strengths</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {portfolioData.about.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <strong>What I&apos;m looking for:</strong> {portfolioData.about.lookingFor}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


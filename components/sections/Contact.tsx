'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileText, Phone } from 'lucide-react'
import { portfolioData } from '@/app/data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            I&apos;m always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href={`mailto:${portfolioData.email}`}
              className="card text-center group hover:border-primary-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400 break-all">
                {portfolioData.email}
              </p>
            </motion.a>
            
            {portfolioData.phone && (
              <motion.a
                href={`tel:${portfolioData.phone.replace(/\s/g, '')}`}
                className="card text-center group hover:border-primary-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-8 h-8 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {portfolioData.phone}
                </p>
              </motion.a>
            )}
            
            <motion.a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center group hover:border-primary-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
            </motion.a>
            
            <motion.a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center group hover:border-primary-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-8 h-8 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-400">View my code</p>
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              download="Sergio_Miranda_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card text-center group hover:border-primary-500 transition-colors md:col-span-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-8 h-8 mx-auto mb-4 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-semibold mb-2">Resume</h3>
              <p className="text-gray-600 dark:text-gray-400">Download Resume</p>
            </motion.a>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Looking forward to hearing from you! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


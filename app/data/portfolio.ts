export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'cloud' | 'tools'
  level: 'expert' | 'advanced' | 'intermediate'
}

export const portfolioData = {
  name: 'Sergio Miranda',
  title: 'Senior Full Stack Engineer',
  tagline: 'Architecting scalable, high-performance web applications with 10+ years of experience',
  location: 'Quito, Ecuador',
  email: 'sergio.miranda0715@gmail.com',
  phone: '+593 99 621 6177',
  github: 'https://github.com/sergiomiranda',
  linkedin: 'https://www.linkedin.com/in/sergio-miranda-bb2768265',
  resume: '/resume.pdf',
  
  about: {
    intro: `I'm a Senior Full Stack Engineer with 10+ years of experience architecting and delivering scalable, 
    high-performance web applications. I specialize in JavaScript/TypeScript, React, Vue, Node.js (Nest.js, Express), 
    PHP, .NET, Java (Spring Boot), and AWS cloud technologies.`,
    specialization: `My expertise spans microservices architecture, REST/GraphQL APIs, ERP integrations (NetSuite, Salesforce), 
    cloud-native architectures, and automation. I've successfully led development teams, optimized systems for performance, 
    and collaborated across product and engineering teams within Agile environments.`,
    strengths: [
      'Full-stack development across multiple tech stacks (JavaScript, TypeScript, PHP, .NET, Java)',
      'Cloud architecture and DevOps with AWS (Lambda, ECS, EC2, S3, RDS)',
      'ERP integrations and automation (NetSuite SuiteScript, Salesforce API)',
      'Microservices design and scalable system architecture',
      'CI/CD pipeline implementation and optimization',
    ],
    lookingFor: 'Open to exciting opportunities in full-stack development, cloud engineering, technical leadership, and enterprise software architecture roles.',
  },
  
  skills: [
    // Frontend
    { name: 'JavaScript / TypeScript', category: 'frontend', level: 'expert' },
    { name: 'React / Next.js', category: 'frontend', level: 'expert' },
    { name: 'Vue.js / Angular', category: 'frontend', level: 'expert' },
    { name: 'TailwindCSS', category: 'frontend', level: 'expert' },
    { name: 'Webflow / WordPress', category: 'frontend', level: 'advanced' },
    
    // Backend
    { name: 'Node.js / Nest.js', category: 'backend', level: 'expert' },
    { name: 'PHP / Laravel', category: 'backend', level: 'expert' },
    { name: '.NET / .NET Core', category: 'backend', level: 'expert' },
    { name: 'Java / Spring Boot', category: 'backend', level: 'expert' },
    { name: 'Python / Django / Flask', category: 'backend', level: 'advanced' },
    { name: 'Ruby on Rails', category: 'backend', level: 'advanced' },
    { name: 'REST / GraphQL APIs', category: 'backend', level: 'expert' },
    { name: 'PostgreSQL / MySQL / MongoDB', category: 'backend', level: 'expert' },
    { name: 'Redis', category: 'backend', level: 'advanced' },
    
    // Cloud
    { name: 'AWS (Lambda, ECS, EC2, S3, RDS)', category: 'cloud', level: 'expert' },
    { name: 'Docker', category: 'cloud', level: 'expert' },
    { name: 'CI/CD (GitHub Actions, Bitbucket)', category: 'cloud', level: 'expert' },
    
    // ERP/Platforms
    { name: 'NetSuite (SuiteScript, SuiteTalk)', category: 'tools', level: 'expert' },
    { name: 'Salesforce API', category: 'tools', level: 'advanced' },
    { name: 'Shopify', category: 'tools', level: 'advanced' },
    { name: 'Git / GitHub', category: 'tools', level: 'expert' },
    { name: 'Jira / Postman / Figma', category: 'tools', level: 'advanced' },
  ] as Skill[],
  
  projects: [
    {
      id: '1',
      title: 'Full-Stack SaaS Platform',
      description: 'High-availability SaaS application with React, Vue, Next.js, Nest.js, and Laravel',
      longDescription: `A comprehensive SaaS platform built with multiple frontend frameworks (React, Vue, Next.js) and backend services 
      (Nest.js, Laravel, .NET, Spring Boot). Features include user authentication, real-time analytics, REST and GraphQL APIs, 
      PostgreSQL and MongoDB databases, and AWS microservices architecture. Optimized for high availability and scalability.`,
      techStack: ['React', 'Vue', 'Next.js', 'Nest.js', 'Laravel', '.NET', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'AWS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '2',
      title: 'NetSuite ERP Integration System',
      description: 'Automated ERP data processing with SuiteScript, SuiteTalk, and Python ETL pipelines',
      longDescription: `A comprehensive NetSuite integration platform featuring SuiteScript automation (Map/Reduce, Scheduled, User Event scripts), 
      SuiteTalk REST API integrations, and Python ETL pipelines. Automates financial workflows, billing processes, and data synchronization 
      between NetSuite and external systems. Includes custom RESTlets for seamless data exchange.`,
      techStack: ['SuiteScript', 'SuiteTalk', 'Python', 'REST API', 'NetSuite', 'ETL', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '3',
      title: 'E-commerce & Dealer Network Platform',
      description: 'Order management and inventory system with SuiteCommerce customization',
      longDescription: `A comprehensive e-commerce platform supporting dealer networks with order management, inventory visibility, 
      product catalogs, pricing automation, and warranty workflows. Built with Nest.js, Laravel, and PostgreSQL. Features custom 
      SuiteCommerce store implementations and automation scripts for performance optimization.`,
      techStack: ['Nest.js', 'Laravel', 'PostgreSQL', 'SuiteCommerce', 'React', 'Node.js', 'Docker'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '4',
      title: 'AWS Microservices Platform',
      description: 'Scalable microservices architecture with Lambda, ECS, EC2, and Docker',
      longDescription: `A cloud-native microservices platform built on AWS infrastructure. Features serverless functions with Lambda, 
      containerized services on ECS, EC2 instances for compute, S3 for storage, and RDS for databases. Includes CI/CD pipelines with 
      GitHub Actions and Docker containerization. Optimized for auto-scaling and high availability.`,
      techStack: ['AWS Lambda', 'ECS', 'EC2', 'S3', 'RDS', 'Docker', 'Node.js', 'Spring Boot', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '5',
      title: 'Salesforce & NetSuite Integration Hub',
      description: 'Cloud automation platform connecting Salesforce API and NetSuite RESTlets',
      longDescription: `An enterprise integration platform that seamlessly connects Salesforce and NetSuite systems. Features automated 
      data synchronization, webhook management, custom workflow automation, and real-time monitoring. Built with Node.js, Express, 
      AWS Lambda, and Docker. Demonstrates expertise in third-party API integration and cloud automation.`,
      techStack: ['Node.js', 'Express', 'AWS Lambda', 'Salesforce API', 'NetSuite RESTlets', 'Docker', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      featured: true,
    },
  ] as Project[],
}


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
  category: 'frontend' | 'backend' | 'cloud' | 'erp' | 'ai' | 'tools'
  level: 'expert' | 'advanced' | 'intermediate'
}

export const portfolioData = {
  name: 'Sergio Miranda',
  title: 'Senior Full Stack Engineer & AI Developer',
  tagline: 'Architecting scalable, high-performance web and mobile applications with AI capabilities | 10+ years of experience',
  location: 'Quito, Ecuador',
  email: 'sergio.miranda0715@gmail.com',
  phone: '+593 99 621 6177',
  github: 'https://github.com/AspiringDeveloper0730',
  linkedin: 'https://www.linkedin.com/in/sergio-miranda-dev',
  resume: '/resume.pdf',
  
  about: {
    intro: `I'm a Senior Full Stack Engineer and AI Developer with 10+ years of experience designing, developing, and optimizing scalable 
    web and mobile applications. I specialize in JavaScript/TypeScript, React, React Native, Vue, Node.js (Nest.js, Express), 
    PHP, .NET, Java (Spring Boot), Python for AI/ML, and AWS cloud technologies.`,
    specialization: `My expertise spans microservices architecture, REST/GraphQL APIs, ERP integrations (NetSuite, Salesforce), 
    cloud-native architectures, AI/ML development, LLM integration, and automation. I have proven ability to lead development teams, 
    build intelligent applications with AI capabilities, optimize systems for performance, and collaborate across product and engineering 
    teams within Agile environments.`,
    strengths: [
      'Full-stack development across multiple tech stacks (JavaScript, TypeScript, PHP, Python, Ruby, .NET, Java)',
      'AI/ML development with Python, OpenAI API, LangChain, TensorFlow, and LLM integration',
      'Cloud architecture and DevOps with AWS (Lambda, ECS, EC2, S3, RDS, API Gateway, CloudWatch)',
      'ERP integrations and automation (NetSuite SuiteScript, SuiteTalk, Salesforce API)',
      'Cross-platform mobile development with React Native',
      'Microservices design and scalable system architecture',
      'CI/CD pipeline implementation and optimization',
    ],
    lookingFor: 'Open to exciting opportunities in full-stack development, AI engineering, cloud engineering, technical leadership, and enterprise software architecture roles.',
  },
  
  skills: [
    // Frontend
    { name: 'JavaScript / TypeScript', category: 'frontend', level: 'expert' },
    { name: 'React / Next.js', category: 'frontend', level: 'expert' },
    { name: 'React Native', category: 'frontend', level: 'expert' },
    { name: 'Vue.js', category: 'frontend', level: 'expert' },
    { name: 'Angular', category: 'frontend', level: 'expert' },
    { name: 'TailwindCSS', category: 'frontend', level: 'expert' },
    { name: 'Webflow', category: 'frontend', level: 'advanced' },
    { name: 'WordPress', category: 'frontend', level: 'expert' },
    
    // Backend
    { name: 'Node.js / Nest.js / Express', category: 'backend', level: 'expert' },
    { name: 'PHP / Laravel', category: 'backend', level: 'expert' },
    { name: '.NET / .NET Core', category: 'backend', level: 'expert' },
    { name: 'Java / Spring Boot', category: 'backend', level: 'expert' },
    { name: 'Python / Django / Flask', category: 'backend', level: 'advanced' },
    
    // AI & Machine Learning
    { name: 'AI / ML Development', category: 'ai', level: 'expert' },
    { name: 'Python (AI/ML)', category: 'ai', level: 'expert' },
    { name: 'OpenAI API / GPT Integration', category: 'ai', level: 'expert' },
    { name: 'LangChain', category: 'ai', level: 'advanced' },
    { name: 'TensorFlow / PyTorch', category: 'ai', level: 'advanced' },
    { name: 'LLM Integration', category: 'ai', level: 'expert' },
    { name: 'Natural Language Processing (NLP)', category: 'ai', level: 'advanced' },
    { name: 'AI Chatbots & Conversational AI', category: 'ai', level: 'expert' },
    { name: 'Ruby / Ruby on Rails', category: 'backend', level: 'advanced' },
    { name: 'REST / GraphQL APIs', category: 'backend', level: 'expert' },
    { name: 'WebSockets / gRPC', category: 'backend', level: 'advanced' },
    { name: 'PostgreSQL / MySQL / MongoDB', category: 'backend', level: 'expert' },
    { name: 'Redis', category: 'backend', level: 'advanced' },
    
    // Cloud & DevOps
    { name: 'AWS (Lambda, ECS, EC2, S3, RDS, API Gateway, CloudWatch)', category: 'cloud', level: 'expert' },
    { name: 'Docker', category: 'cloud', level: 'expert' },
    { name: 'Kubernetes', category: 'cloud', level: 'advanced' },
    { name: 'Serverless Framework', category: 'cloud', level: 'expert' },
    { name: 'Terraform', category: 'cloud', level: 'advanced' },
    { name: 'CI/CD (GitHub Actions)', category: 'cloud', level: 'expert' },
    
    // ERP/Platforms
    { name: 'NetSuite (SuiteScript, SuiteTalk)', category: 'erp', level: 'expert' },
    { name: 'Salesforce API', category: 'erp', level: 'advanced' },
    { name: 'Shopify', category: 'erp', level: 'expert' },
    { name: 'Webflow CMS', category: 'erp', level: 'expert' },
    { name: 'SuiteCommerce', category: 'erp', level: 'expert' },
    
    // Tools
    { name: 'Jira', category: 'tools', level: 'expert' },
    { name: 'GitHub', category: 'tools', level: 'expert' },
    { name: 'Postman', category: 'tools', level: 'expert' },
    { name: 'Figma', category: 'tools', level: 'advanced' },
    { name: 'Slack', category: 'tools', level: 'expert' },
  ],
  
  projects: [
    {
      id: '1',
      title: 'Full-Stack SaaS Platform',
      description: 'High-availability SaaS application with React, Vue, Next.js, Nest.js, and Laravel',
      longDescription: `A comprehensive SaaS platform built with multiple frontend frameworks (React, Vue, Next.js) and backend services 
      (Nest.js, Laravel, .NET, Spring Boot). Features include user authentication, real-time analytics, REST and GraphQL APIs, 
      PostgreSQL and MongoDB databases, and AWS microservices architecture. Optimized for high availability and scalability.`,
      techStack: ['React', 'Vue', 'Next.js', 'TailwindCSS', 'Nest.js', 'Laravel', '.NET', 'C#', 'Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'REST API', 'GraphQL', 'AWS Lambda', 'ECS', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '2',
      title: 'Python ETL & Data Processing Platform',
      description: 'Python-based ETL pipelines and data processing with Django, Flask, and automated workflows',
      longDescription: `A comprehensive Python-based data processing platform featuring ETL pipelines, automated workflows, and data synchronization 
      systems. Built with Django and Flask frameworks for web services and API endpoints. Includes Python scripts for NetSuite SuiteTalk integrations, 
      data transformation pipelines, and automated financial workflows. Optimized for handling large datasets and complex data transformations.`,
      techStack: ['Python', 'Django', 'Flask', 'ETL', 'PostgreSQL', 'MongoDB', 'REST API', 'NetSuite', 'SuiteTalk', 'MySQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '3',
      title: 'Cross-Platform Mobile Application',
      description: 'React Native mobile app with REST/GraphQL API integration and optimized performance',
      longDescription: `A cross-platform mobile application built with React Native for both iOS and Android. Features seamless 
      integration with REST and GraphQL APIs, real-time data synchronization, offline capabilities, and optimized performance 
      for both platforms. Includes user authentication, push notifications, and native module integrations. Delivered mobile 
      features that enhance user experience across web and mobile products.`,
      techStack: ['React Native', 'JavaScript', 'TypeScript', 'Node.js', 'REST API', 'GraphQL', 'WebSockets', 'MongoDB', 'PostgreSQL', 'AWS Lambda', 'Docker'],
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '4',
      title: 'AWS Microservices Platform',
      description: 'Scalable microservices architecture with Lambda, ECS, EC2, and Docker',
      longDescription: `A cloud-native microservices platform built on AWS infrastructure. Features serverless functions with Lambda, 
      containerized services on ECS, EC2 instances for compute, S3 for storage, and RDS for databases. Includes CI/CD pipelines with 
      GitHub Actions and Docker containerization. Optimized for auto-scaling and high availability.`,
      techStack: ['AWS Lambda', 'ECS', 'EC2', 'S3', 'RDS', 'API Gateway', 'CloudWatch', 'Docker', 'Kubernetes', 'Serverless Framework', 'Terraform', 'Node.js', 'Java', 'Spring Boot', 'CI/CD', 'GitHub Actions'],
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
      techStack: ['Node.js', 'Express', 'AWS Lambda', 'Salesforce API', 'NetSuite', 'SuiteScript', 'RESTlets', 'SuiteTalk', 'PostgreSQL', 'MySQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '6',
      title: 'Ruby on Rails Enterprise Application',
      description: 'Optimized financial and billing workflows built with Ruby on Rails',
      longDescription: `A robust enterprise application built with Ruby on Rails, focusing on financial and billing workflow optimization. 
      Features include automated billing processes, payment processing integration, financial reporting dashboards, and workflow automation. 
      Includes RESTful API endpoints, PostgreSQL database optimization, and Redis caching for improved performance. Delivered scalable 
      solutions for complex financial operations.`,
      techStack: ['Ruby on Rails', 'Ruby', 'PostgreSQL', 'MySQL', 'Redis', 'REST API', 'GraphQL', 'JavaScript', 'AWS Lambda', 'Docker'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '7',
      title: 'Angular & Spring Boot Enterprise Platform',
      description: 'Full-stack enterprise application with Angular frontend and Java Spring Boot backend',
      longDescription: `A comprehensive enterprise platform featuring an Angular frontend with responsive UI design and a robust Java Spring Boot 
      backend. Includes user authentication, role-based access control, real-time data synchronization, and advanced dashboard analytics. 
      Features RESTful APIs, microservices architecture, PostgreSQL database, and Docker containerization. Optimized for high performance 
      and scalability in enterprise environments.`,
      techStack: ['Angular', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'REST API', 'WebSockets', 'Docker', 'AWS'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '8',
      title: 'CMS & Content Management Solutions',
      description: 'Custom WordPress plugins, Webflow builds, and CMS solutions for enterprise clients',
      longDescription: `A portfolio of content management solutions including custom WordPress plugin development, Webflow CMS builds, and 
      enterprise CMS implementations. Features custom themes, plugin architecture, automated content workflows, and seamless third-party 
      integrations. Includes Shopify theme customization, Webflow CMS configurations, and WordPress optimization for performance and SEO. 
      Delivered solutions that streamline content management workflows across multiple platforms.`,
      techStack: ['WordPress', 'PHP', 'Webflow CMS', 'Shopify', 'SuiteCommerce', 'JavaScript', 'MySQL', 'PostgreSQL', 'Custom Plugins'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '9',
      title: 'Real-Time Communication Platform',
      description: 'WebSocket and gRPC-based real-time system with Node.js and microservices architecture',
      longDescription: `A high-performance real-time communication platform leveraging WebSockets for bidirectional communication and gRPC for 
      efficient microservices intercommunication. Built with Node.js, Nest.js, and TypeScript for type-safe backend services. Features include 
      real-time messaging, live updates, WebSocket connections management, gRPC service-to-service communication, and horizontal scaling with 
      Redis pub/sub for distributed messaging. Optimized for low latency and high concurrency.`,
      techStack: ['Node.js', 'Nest.js', 'TypeScript', 'JavaScript', 'WebSockets', 'gRPC', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '10',
      title: 'NetSuite SuiteScript Automation Suite',
      description: 'Comprehensive NetSuite automation with SuiteScript, SuiteCommerce, and custom integrations',
      longDescription: `A complete NetSuite automation suite featuring SuiteScript implementations (Map/Reduce, Scheduled, User Event scripts) for 
      automated business processes. Includes SuiteCommerce customization for enhanced e-commerce functionality, SuiteTalk API integrations for 
      external system connectivity, and custom RESTlets for seamless data exchange. Features automated workflows, financial reporting, inventory 
      management, and billing automation. Demonstrates deep expertise in NetSuite ecosystem and ERP optimization.`,
      techStack: ['NetSuite', 'SuiteScript', 'SuiteCommerce', 'SuiteTalk', 'JavaScript', 'Node.js', 'REST API', 'Python', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '11',
      title: 'Infrastructure as Code & DevOps Pipeline',
      description: 'Terraform, Kubernetes, and Serverless Framework implementation with CI/CD automation',
      longDescription: `A comprehensive DevOps and Infrastructure as Code solution using Terraform for cloud resource provisioning, Kubernetes for 
      container orchestration, and Serverless Framework for serverless deployments. Features automated CI/CD pipelines with GitHub Actions, 
      infrastructure versioning, multi-environment deployment strategies, and automated scaling configurations. Includes Docker containerization, 
      AWS cloud infrastructure management (Lambda, ECS, EC2, S3, RDS, API Gateway, CloudWatch), and monitoring solutions. Optimized for scalability, 
      reliability, and deployment efficiency.`,
      techStack: ['Terraform', 'Kubernetes', 'Serverless Framework', 'Docker', 'AWS Lambda', 'ECS', 'EC2', 'S3', 'RDS', 'API Gateway', 'CloudWatch', 'CI/CD', 'GitHub Actions', 'Node.js', 'Python'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      featured: true,
    },
    {
      id: '12',
      title: 'AI-Powered Intelligent Application Platform',
      description: 'LLM-integrated application with OpenAI API, LangChain, and AI chatbot capabilities',
      longDescription: `An intelligent AI-powered application platform featuring Large Language Model (LLM) integration with OpenAI GPT APIs, 
      LangChain for AI workflows, and advanced natural language processing. Built with Python, Node.js, and TypeScript for seamless AI 
      integration. Features include AI chatbots, conversational AI interfaces, intelligent content generation, automated decision-making 
      systems, and AI-enhanced user experiences. Includes real-time AI processing, vector databases for semantic search, and scalable 
      AI inference pipelines. Demonstrates expertise in modern AI development and LLM integration for enterprise applications.`,
      techStack: ['Python', 'OpenAI API', 'LangChain', 'LLM Integration', 'TensorFlow', 'Node.js', 'TypeScript', 'React', 'PostgreSQL', 'MongoDB', 'AWS Lambda', 'Docker', 'REST API', 'WebSockets'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      featured: true,
    },
  ] as Project[],
}


import { Project, Skill, Experience, Certification } from '../types';

export const PORTFOLIO_DATA = {
  profile: {
    name: 'P. Ramanan',
    subtitle: 'AI / MACHINE LEARNING',
    headlineMain: 'BUILDING INTELLIGENCE.',
    headlineSecondary: 'DESIGNING THE FUTURE.',
    summary:
      'Motivated final-year B.Sc. AI & ML student with skills in data analysis, machine learning fundamentals, and basic web development. Experienced in building ML systems, predictive models, and open-source applications.',
    aboutBio:
      'Motivated final-year B.Sc. AI & ML student with skills in data analysis, machine learning fundamentals, and basic web development. Developed an open-source Budget Planner project and completed certifications in AI, cybersecurity, and budgeting. Seeking opportunities to gain industry experience and contribute to real-world projects.',
    photoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5NQ8tterDlh5_WxSU0_EllflUXy_6BvxMdrDX48frliFRTBX9BNNN4ncjnGsbffBCqBUDAzZGCTHRJURxRtV_G6T4DnFndPkvCSOKpzwM-RdDosOkUQNFx2515kLFqv8GzRz1-cDV1QhI68RtHxepYcu_sb6rg5UxVA8Ggl1l4rY3pfrviXQeZqPxZ7_C_MG0_Uvy7IpWx3sixt3LeylbTgNTNu9zB_PjxV2w5qNzwjv7jcvjwZOv_TH5G3HNLOfTsQ',
    photoAboutUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCj77ux8z0qaNssvvZZz0wgOzB162BtM8Q4VA2ZFryz4Ga9qfAqoI487klG8Yj_AeeSvO2iuXPFT6Is3Mkeru7EMwZ0UXDMph5lnJ4t93AD483PNECUhUv9Uk16tb8f2lksc6nU93qpnS5tCpg3WVJjOZCvr3_7e8HN6gf6pe7hfea6KR01k-VusK7au95gF1zCRaAqxLq40LBgOwkeaQJeNitxR15LLsqK189cCe8iim263hT8IkkPK-W9e-Wygqv1Kw',
    email: 'ramananporchezhiyan@gmail.com',
    phone: '8778417527',
    location: 'Coimbatore, Tamil Nadu',
    github: 'https://github.com/mrravanan03-debug',
    linkedin:
      'https://www.linkedin.com/in/ramanan-p-5810a9375?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    scholar: 'https://github.com/mrravanan03-debug',
    education: {
      degree: 'Artificial Intelligence and Machine Learning (B.Sc)',
      institution: 'Kovai Kalaimagal College of Arts and Science',
      location: 'Tamil Nadu',
      cgpa: '6.72',
      period: '07/2024 – 05/2027',
    },
    languages: [
      { name: 'English', level: 'Intermediate' },
      { name: 'Tamil', level: 'Native' },
    ],
    pills: ['RAG', 'PYTHON', 'MACHINE LEARNING', 'DATA ANALYTICS', 'CYBERSECURITY'],
  },

  skills: [
    {
      id: 'rag-genai',
      title: 'Retrieval-Augmented Generation (RAG)',
      category: 'Generative AI',
      description: 'Developing advanced RAG architectures, knowledge retrieval systems with MongoDB vector search, and LLM orchestration.',
      icon: 'model_training',
      isLarge: true,
      bgImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCw7WDx4MaM8MlN0rZEu6O6U9jL1SVOBvAumi652XgzaJYanwFlr5R1Fs3zcuh50J2cTG9kGZCiwnCEy12MUjjFei6fCCEmeayfixIfxYw7pJvCOrMyzxoPrv3uinrbmsu3d-e2ISNHObDaZmnoEzSxQW8HTdDk2E_7y_qcKIwMv6cXCq4RDLV47Ll6Jzcv42FyZPxXrheLJwFcuyjSmFEfzgfTzzttICswUCgMmaitJZMjEL-pz3bx',
      tags: ['RAG Pipelines', 'MongoDB Vector Search', 'LLMs', 'Prompt Engineering', 'HCL GUVI GenAI'],
      proficiency: 92,
    },
    {
      id: 'python',
      title: 'Python for Machine Learning',
      category: 'Core Programming',
      description: 'Data manipulation, algorithmic modeling, EDA, feature engineering, and scikit-learn pipeline implementation.',
      icon: 'code',
      isLarge: false,
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'EDA'],
      proficiency: 95,
    },
    {
      id: 'ml',
      title: 'Machine Learning Fundamentals',
      category: 'Algorithms & Models',
      description: 'Developing regression, classification, clustering models, and evaluating real-world dataset performance.',
      icon: 'schema',
      isLarge: false,
      tags: ['Supervised Learning', 'Regression Analysis', 'Cuisine Classification', 'Model Evaluation'],
      proficiency: 90,
    },
    {
      id: 'analytics',
      title: 'Data Analysis & Analytics',
      category: 'Data Engineering',
      description: 'Data cleaning, preprocessing, exploratory data analysis (EDA), and data visualization techniques.',
      icon: 'analytics',
      isLarge: false,
      tags: ['Data Cleaning', 'Preprocessing', 'Feature Engineering', 'Data Visualization', 'Sprout Analytics'],
      proficiency: 88,
    },
    {
      id: 'security',
      title: 'Cryptography & Network Security',
      category: 'Cybersecurity',
      description: 'Cryptographic algorithms, threat analysis, phishing URL inspection, and network security fundamentals.',
      icon: 'online_prediction',
      isLarge: false,
      tags: ['Cryptography Fundamentals', 'Network Security', 'Saylor CS260', 'Threat Intelligence'],
      proficiency: 86,
    },
    {
      id: 'recommendation',
      title: 'Recommendation & Geospatial Systems',
      category: 'Analytics & RecSys',
      description: 'Personalized recommendation engines, geographical spatial analysis, and customer rating prediction.',
      icon: 'recommend',
      isLarge: false,
      tags: ['Personalized Recommendation', 'Geographical Analysis', 'Rating Prediction', 'User Profiling'],
      proficiency: 89,
    },
  ] as Skill[],

  itSkills: [
    'Self-Learning & Research',
    'Retrieval-Augmented Generation (RAG)',
    'Team Collaboration',
    'Analytical Thinking',
    'Project Management',
    'Cryptography Fundamentals',
    'Machine Learning Fundamentals',
    'Documentation Writing',
    'Communication Skills',
    'Network Security Fundamentals',
    'Problem Solving',
    'Time Management',
  ],

  projects: [
    {
      id: 'cardiopredict-ai',
      title: 'CardioPredict AI — Clinical Decision Support Platform',
      subtitle: 'Calibrated Ensemble ML & Explainable AI',
      description:
        'A clinical decision support platform combining Random Forest and Deep Neural Networks with Platt probability scaling, real-time localized SHAP risk explanations, SHA-256 biometric fingerprinting, and HL7 FHIR export.',
      detailedDescription:
        'Engineered an enterprise-grade Clinical Decision Support Platform (CDSS) for cardiovascular disease risk stratification. Built a Calibrated Clinical Ensemble combining Random Forest and Deep Neural Networks with Platt probability scaling, achieving 95.7% accuracy, 0.978 ROC-AUC, and 96.5% clinical sensitivity across Cleveland and Framingham cardiac cohorts. Features real-time localized SHAP (Shapley Additive exPlanations) values to explain patient-specific risk factors, cryptographic SHA-256 biometric fingerprinting verifying 100% deterministic invariance (0.000000% delta on duplicate records), simulated AES-256 encrypted EHR audit logging, and FHIR JSON export following ACC/AHA clinical guidelines.',
      tags: ['Healthcare AI', 'ML', 'Python', 'React'],
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'CardioPredict AI Clinical Decision Support Platform',
      githubUrl: 'https://github.com/mrravanan03-debug/cardiopredict-ai',
      liveDemoUrl: '#demo-cardiopredict',
      metrics: [
        { label: 'Ensemble Accuracy', value: '95.7%' },
        { label: 'ROC-AUC Score', value: '0.978' },
        { label: 'Clinical Sensitivity', value: '96.5%' },
        { label: 'Deduplication Delta', value: '0.000000%' },
      ],
      technologies: [
        'React 18',
        'TypeScript',
        'Tailwind CSS',
        'Express.js',
        'Python',
        'Scikit-Learn',
        'SHAP',
        'Platt Scaling',
        'HL7 FHIR JSON',
        'SHA-256',
      ],
      keyHighlights: [
        'Calibrated Clinical Ensemble (Random Forest + DNN) with Platt scaling achieving 95.7% accuracy & 0.978 ROC-AUC',
        'Real-time localized SHAP value attribution isolating patient-specific biomarker risks',
        'Cryptographic SHA-256 biometric fingerprinting & deduplication test suite verifying 100% deterministic invariance',
        'Dual-Mode UX: Clinician Simple Mode with live risk gauges & Advanced Clinical Mode with FHIR JSON export',
      ],
    },
    {
      id: 'restaurant-analytics',
      title: 'Restaurant Analytics & Recommendation System',
      subtitle: 'Machine Learning & Geographical Analysis',
      description:
        'A comprehensive Machine Learning project using Python to analyze restaurant data for rating prediction, personalized recommendations, cuisine classification, and location-based geographical analysis.',
      detailedDescription:
        'Developed a comprehensive Machine Learning project using Python to analyze restaurant data. Built a regression model to predict restaurant ratings, designed a personalized restaurant recommendation system, created a cuisine classification model, and performed location-based geographical analysis. Applied data preprocessing, feature engineering, model evaluation, and data visualization techniques using real-world restaurant datasets to generate actionable insights.',
      tags: ['ML', 'Python', 'Recommendation Sys', 'Analytics'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB-BV-FT-Tfzu11NY3s3N60asXxTDFqGKwqS1f1I-ZKocV9luofSgztqGTMuUsRbp7-pcaQIBVbpPJxxQFWRxyUz7S0MGpvu3iqbXIcyQS8hhrSZwUYaOeHli9ByrdKOw3r-xk8Ke2qtbZkOf0QosqyfZdjmU5C2PPAG9qVEhKFeE58vxQWa_Fy5ZqiV2Cqp0P8zJdf3CWymRAzOYByMXmVwiV5Nw-jGADb1noRt7nrMOqNVx8i7F3E',
      imageAlt: 'Restaurant Analytics & Recommendation System',
      githubUrl: 'https://github.com/mrravanan03-debug',
      liveDemoUrl: '#demo-restaurant',
      metrics: [
        { label: 'Timeline', value: '07/2026 – 08/2026' },
        { label: 'Precision Score', value: '92.4%' },
        { label: 'Models', value: 'Regression & Classifier' },
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Geographical Analysis', 'Matplotlib'],
      keyHighlights: [
        'Built a regression model to predict restaurant ratings based on multi-variate features',
        'Designed personalized recommendation engine and cuisine classification system',
        'Performed location-based spatial and geographical analysis with EDA visualizations',
      ],
    },
    {
      id: 'train-prediction',
      title: 'Machine Learning-Based Train Journey Time Prediction System',
      subtitle: 'Predictive Transit Analytics',
      description:
        'An ML-based predictive system analyzing historical transit data and journey variables to estimate accurate arrival times and travel durations.',
      detailedDescription:
        'Engineered an end-to-end Machine Learning pipeline utilizing historical railway transit logs, station arrival telemetry, and journey parameters. Features predictive modeling with Python, Pandas, and Scikit-learn for reliable journey duration forecasting with robust error minimization.',
      tags: ['ML', 'Python', 'Data Analytics'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAp63YW8Z1H2c_yyclfZRYLPX6sjZbA4eM6TkUtKwmg-SUK1ikg-LqQyAtcC-o41B3uZQP0fDUmi-n5NFjKb5DjTykGmrtuKBMIwzh56fupxbECM8bu6qaIM4_-nWjqKxQHeC1tqyE5Zxxt5WQExPYyzrpD7dSWKJsBermpz1qRzdNNLDISxNJ-bWjmTiolGrCGGURF-AjrRwbukQfBuM0tILb2nkVnsy5tUXK5LreuId-bQ_rKL9G_',
      imageAlt: 'Machine Learning-Based Train Journey Time Prediction System',
      githubUrl: 'https://github.com/mrravanan03-debug',
      liveDemoUrl: '#demo-train',
      metrics: [
        { label: 'Timeline', value: '05/2025 – 06/2025' },
        { label: 'Model Accuracy', value: '94.8%' },
        { label: 'Latency', value: '< 45ms' },
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Regression', 'EDA'],
      keyHighlights: [
        'Developed end-to-end ML model for train journey duration estimation',
        'Extensive feature engineering and data preprocessing on transit logs',
        'Optimized pipeline for sub-second inference runtime',
      ],
    },
    {
      id: 'budget-planner',
      title: 'Budget Planner (Open Source)',
      subtitle: 'Open Source Financial Management',
      description:
        'An open-source budget tracking application to manage expenses and savings, published on GitHub under the MIT License with contributor documentation and project management workflows.',
      detailedDescription:
        'Developed a budget tracking application to manage expenses and savings, published on GitHub under the MIT License with contributor documentation and project management workflows. Features structured expense categorization, milestone tracking, and reproducible open-source documentation.',
      tags: ['Open Source', 'Web Dev', 'Project Mgmt'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA5Ji-Hg8bjOBqAM-sOWP_WPTFVjccIhBzXoEOR21M9tANA2Icsb2P7EpwSMW-ipzaAfCOaWDWqM6t0m9jEyizv7qB2vZiviSAXijrBojFn-R8G5lMD-nHDKY8lNTrcxX5e_iYuMfqFvd7mSGEKlYD1UxAexReT_izIIBYR9I43FJ6Jix3FHbX-4mbtmnfG_wZiT8VZXTM4snXC3Wkfyx5PZH2EJCQRZcSXU5I_Kz88SU6vGfpt1ln6',
      imageAlt: 'Budget Planner Open Source Project',
      githubUrl: 'https://github.com/mrravanan03-debug',
      liveDemoUrl: '#demo-budget',
      metrics: [
        { label: 'License', value: 'MIT Open Source' },
        { label: 'Workflows', value: 'Git & Docs' },
        { label: 'Status', value: 'Active Repo' },
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Git', 'MIT License', 'Markdown'],
      keyHighlights: [
        'Open-source repository published on GitHub under the MIT License',
        'Comprehensive contributor documentation and structured project management workflows',
        'Interactive expense recording, category breakdowns, and savings calculations',
      ],
    },
    {
      id: 'phishing-detector',
      title: 'Phishing Website Detector',
      subtitle: 'Cybersecurity Threat Defense',
      description:
        'Threat detection system applying machine learning and cryptographic heuristics to identify malicious phishing URLs and safeguard user security.',
      detailedDescription:
        'Engineered a cybersecurity utility integrating network security fundamentals, lexical URL entropy analysis, and machine learning classification to detect suspicious phishing domains and cyber threats.',
      tags: ['Cybersecurity', 'ML', 'Network Security'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAjMncViKYQdeVhO-VgNmVkG2QNU96S98W9mSiH2ujJEpQj35HBBR6HAc9BCSxDnhedv98dYjFwbRYx38ubOqKCC40lXREZfkSBHx7ttCifWXFnoociz4K6lFE9mRleumZoVm_faZrP0DGNEOgF_zheLBSo-GE1w1YB3_OQY6r-aReBMNexIbZ9atlIa5Fha2V3EAK8WsgJtuORNmGdz4WBzZHDmv4oTXIlFANnOvEbZKGue7T9DR1e',
      imageAlt: 'Phishing Website Detector security UI',
      githubUrl: 'https://github.com/mrravanan03-debug',
      liveDemoUrl: '#demo-phishing',
      metrics: [
        { label: 'Detection Rate', value: '98.6%' },
        { label: 'Scan Time', value: '120ms' },
        { label: 'Domain Defense', value: 'Real-Time' },
      ],
      technologies: ['Python', 'Network Security', 'Cryptography', 'Scikit-Learn'],
      keyHighlights: [
        'Lexical inspection of URL structure, homoglyphs, and spoofed signatures',
        'Implementation of network security protocols and verification heuristics',
        'Model training on malicious vs legitimate URL datasets',
      ],
    },
  ] as Project[],

  experiences: [
    {
      id: 'cognifyz',
      company: 'Cognifyz Technologies',
      period: '06/2026 – 07/2026',
      role: 'Machine Learning Intern',
      location: 'Nagpur, Maharashtra',
      description:
        'Developed and implemented machine learning models using Python for real-world datasets. Performed data cleaning, preprocessing, feature engineering, and exploratory data analysis (EDA). Worked with Pandas, NumPy, and Scikit-learn for data manipulation and model development.',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Feature Engineering', 'EDA', 'Model Development'],
    },
    {
      id: 'sysslan',
      company: 'Sysslan it solution',
      period: '04/2026 – 06/2026',
      role: 'Machine Learning Intern',
      location: 'Yavatmal, Maharashtra',
      description:
        'Worked on machine learning concepts and real-world data analysis tasks using Python. Gained practical experience in problem-solving, data visualization, and collaborative software development in a professional remote environment.',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Data Visualization', 'Collaborative Dev'],
    },
    {
      id: 'idm',
      company: 'IDM tech park',
      period: '05/2025 – 05/2025',
      role: 'Data Analytics Intern',
      location: 'Coimbatore, Tamil Nadu',
      description:
        'Participated in data analytics workflows, exploring structured datasets, statistical summaries, and exploratory data evaluation.',
      skills: ['Data Analytics', 'Exploratory Analysis', 'Data Cleaning', 'Reporting'],
    },
  ] as Experience[],

  certifications: [
    {
      id: 'saylor-crypto',
      title: 'CS260: Introduction to Cryptography and Network Security',
      issuer: 'Saylor University',
      year: 'Jun 2026',
      icon: 'shield',
      credentialId: 'SAYLOR-CS260-JUN2026',
      topics: ['Cryptography Fundamentals', 'Network Security', 'Ciphers & Encryption', 'Authentication Protocols'],
    },
    {
      id: 'ibm-ai-ambassador',
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild Student Ambassador Program',
      year: 'Jun 2026',
      icon: 'memory',
      credentialId: 'IBM-SB-AI-JUN2026',
      topics: ['AI Fundamentals', 'Machine Learning Concepts', 'AI Ethics & Applications', 'Neural Network Principles'],
    },
    {
      id: 'aws-ml-ai',
      title: 'Fundamentals of Machine Learning and Artificial Intelligence',
      issuer: 'Amazon Web Services (AWS)',
      year: 'May–Jun 2026',
      icon: 'cloud',
      credentialId: 'AWS-ML-AI-2026',
      topics: ['AWS Machine Learning Services', 'Cloud AI Foundations', 'Model Training & Evaluation', 'ML Pipelines'],
    },
    {
      id: 'hcl-guvi-genai',
      title: 'Generative AI Engineering: Foundations, RAG & Deployment',
      issuer: 'HCL GUVI',
      year: 'May 2026',
      icon: 'auto_awesome',
      credentialId: 'GUVI-GENAI-MAY2026',
      topics: ['RAG Architectures', 'LLM Deployment', 'Prompt Engineering', 'Vector Database Integration'],
    },
    {
      id: 'sprout-data-analysis',
      title: 'Data Analysis',
      issuer: 'Sprout Knowledge Solutions Pvt. Ltd.',
      year: 'Feb–Mar 2026',
      icon: 'analytics',
      credentialId: 'SPROUT-DA-2026',
      topics: ['Data Wrangling', 'Exploratory Data Analysis (EDA)', 'Statistical Analytics', 'Actionable Insights'],
    },
    {
      id: 'be10x-ai-tools',
      title: 'AI Tools Workshop',
      issuer: 'be10x',
      year: '2026',
      icon: 'sparkles',
      credentialId: 'BE10X-AI-WORKSHOP',
      topics: ['Productivity AI Tools', 'Workflow Automation', 'Prompt Engineering Practice'],
    },
    {
      id: 'mongodb-rag',
      title: 'Building RAG Apps Using MongoDB',
      issuer: 'MongoDB',
      year: '2026',
      icon: 'database',
      credentialId: 'MONGODB-RAG-2026',
      topics: ['Vector Search in MongoDB', 'Embedding Storage', 'Retrieval-Augmented Generation Apps'],
    },
  ] as Certification[],

  terminalCommands: {
    help: 'Available commands:\n  whoami      - Developer profile & credentials\n  skills      - Technical skills, RAG, & IT competencies\n  projects    - Machine learning projects & open-source tools\n  exp         - Industry work experience & internships\n  certs       - Verified certifications & credentials\n  contact     - Transmit coordinates, email & social links\n  github      - Display GitHub repository URL\n  linkedin    - Display LinkedIn profile URL\n  resume      - Formatted resume summary breakdown\n  matrix      - Stream neural matrix sequence\n  clear       - Wipe terminal screen',
    whoami:
      'P. Ramanan\nEmail: ramananporchezhiyan@gmail.com | Phone: 8778417527 | Coimbatore, Tamil Nadu\nGitHub: https://github.com/mrravanan03-debug\nLinkedIn: https://www.linkedin.com/in/ramanan-p-5810a9375\nEducation: B.Sc. Artificial Intelligence and Machine Learning (07/2024 – 05/2027), CGPA: 6.72\nInstitution: Kovai Kalaimagal College of Arts and Science, Tamil Nadu\nProfile: Motivated final-year B.Sc. AI & ML student with skills in data analysis, machine learning fundamentals, and basic web development.',
    skills:
      'Technical & IT Skills:\n• Self-Learning & Research | Retrieval-Augmented Generation (RAG) | Team Collaboration\n• Analytical Thinking | Project Management | Cryptography Fundamentals\n• Machine Learning Fundamentals (Python, Pandas, NumPy, Scikit-Learn)\n• Documentation Writing | Communication Skills | Network Security Fundamentals\n• Problem Solving | Time Management\nLanguages: English (Intermediate) | Tamil (Native)',
    projects:
      'Featured Projects:\n[01] CardioPredict AI — Clinical Decision Support Platform\n     Calibrated Ensemble ML (95.7% Acc, 0.978 AUC), SHAP XAI, SHA-256 Deduplication, FHIR\n[02] Restaurant Analytics & Recommendation System (07/2026 – 08/2026)\n     Python, Rating Prediction, Cuisine Classification, Geographical Analysis\n[03] Train Journey Time Prediction System (05/2025 – 06/2025)\n     ML-based transit duration estimation pipeline\n[04] Budget Planner (Open Source) - MIT License on GitHub\n     Expense & savings management with contributor workflows\n[05] Phishing Website Detector - Threat defense & security heuristics',
    exp:
      'Work Experience:\n• Cognifyz Technologies (06/2026 – 07/2026, Nagpur, Maharashtra) - Machine Learning Intern\n  Developed ML models using Python, Pandas, NumPy, Scikit-learn, EDA, & Feature Engineering.\n• Sysslan it solution (04/2026 – 06/2026, Yavatmal, Maharashtra) - Machine Learning Intern\n  Machine learning concepts, real-world data analysis tasks, problem solving, and data visualization.\n• IDM tech park (05/2025 – 05/2025, Coimbatore, Tamil Nadu) - Data Analytics Intern',
    certs:
      'Certifications & Professional Development:\n• CS260: Intro to Cryptography and Network Security - Saylor University (Jun 2026)\n• Artificial Intelligence Fundamentals - IBM SkillsBuild Ambassador (Jun 2026)\n• Fundamentals of ML and AI - AWS (May–Jun 2026)\n• Generative AI Engineering: Foundations, RAG & Deployment - HCL GUVI (May 2026)\n• Data Analysis - Sprout Knowledge Solutions (Feb–Mar 2026)\n• AI Tools Workshop - be10x\n• Building RAG Apps Using MongoDB',
    contact:
      'Contact Coordinates:\n• Email: ramananporchezhiyan@gmail.com\n• Phone: 8778417527\n• Location: Coimbatore, Tamil Nadu\n• GitHub: https://github.com/mrravanan03-debug\n• LinkedIn: https://www.linkedin.com/in/ramanan-p-5810a9375',
    github: 'https://github.com/mrravanan03-debug',
    linkedin:
      'https://www.linkedin.com/in/ramanan-p-5810a9375?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    resume:
      '=== P. RAMANAN - RESUME ===\nDegree: B.Sc. Artificial Intelligence and Machine Learning (07/2024 – 05/2027), CGPA: 6.72\nCollege: Kovai Kalaimagal College of Arts and Science, Tamil Nadu\nExperience: ML Intern @ Cognifyz Technologies (06/2026–07/2026), ML Intern @ Sysslan it solution (04/2026–06/2026), IDM tech park (05/2025)\nGitHub: https://github.com/mrravanan03-debug\nLinkedIn: https://www.linkedin.com/in/ramanan-p-5810a9375\nContact: ramananporchezhiyan@gmail.com | 8778417527',
  },
};


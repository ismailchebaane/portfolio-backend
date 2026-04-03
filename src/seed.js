const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Profile  = require('./models/Profile');
const Project  = require('./models/Project');
const { Experience, SkillGroup, Education, Language, Contact } = require('./models/index');

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected. Seeding...');

  // Clear all
  await Promise.all([
    Profile.deleteMany({}), Project.deleteMany({}), Experience.deleteMany({}),
    SkillGroup.deleteMany({}), Education.deleteMany({}), Language.deleteMany({}), Contact.deleteMany({}),
  ]);

  // Profile
  await Profile.create({
    name: 'Chebaane Ismail',
    title: 'AI Engineer | Data Scientist | Web Developer',
    email: 'chebaaneismail@gmail.com',
    phone: '+216 52 759 375',
    location: 'Monastir, Téboulba, Tunisia',
    github: 'https://github.com/chebaaneismail',
    linkedin: 'https://www.linkedin.com/in/ismail-chebaane-535b75146',
    cv: '#',
    about: "Professional Master's student in Data Science at the Faculty of Sciences of Monastir. Passionate about AI, web development, machine learning, and data analysis. Actively seeking to build innovative, data-driven and AI-powered applications that solve real-world problems.",
    status: 'Seeking new opportunities',
    focus: 'AI Engineering / Full-Stack / MLOps',
  });

  // Projects
  await Project.insertMany([
    {
      id: 'ai_csv_chatbot', fileName: 'AI_CSV_Chatbot', perms: '-rwxr--r--', icon: '◈',
      category: 'AI / Data', status: 'COMPLETED', year: '2024',
      shortDesc: 'Upload CSVs and query them in plain English. Powered by PandasAI + LLM backend with a clean Streamlit interface.',
      fullDesc: 'A natural-language data analysis tool that lets you upload any CSV file and ask questions in plain English.',
      tech: ['Python','PandasAI','Streamlit','LangChain','OpenAI','Pandas','NLP'],
      highlights: ['Natural language → Pandas query translation','Supports CSV files up to 100MB','Auto chart generation for numeric data','Full conversation memory across queries'],
      images: [], github: '#', live: '#', order: 0,
    },
    {
      id: 'disease_predictor', fileName: 'Disease_Predictor', perms: '-rwxr--r--', icon: '◈',
      category: 'ML / Healthcare', status: 'COMPLETED', year: '2024',
      shortDesc: 'ML-powered health diagnostic app predicting diseases from patient health parameters with multi-model ensemble.',
      fullDesc: 'A clinical decision-support ML application that predicts multiple disease categories from patient vitals and lab results.',
      tech: ['Python','Scikit-learn','XGBoost','SHAP','Streamlit','Pandas','NumPy'],
      highlights: ['Multi-model ensemble for higher accuracy','SHAP explainability','Supports 5+ disease categories','Feature importance visualization'],
      images: [], github: '#', live: '#', order: 1,
    },
    {
      id: 'lux_perfume', fileName: 'Lux_Perfume', perms: '-rw-r--r--', icon: '◈',
      category: 'Full-Stack / E-Commerce', status: 'COMPLETED', year: '2023',
      shortDesc: 'High-end e-commerce website with smooth animations, full product catalog, cart, and checkout flow.',
      fullDesc: 'A luxury perfume e-commerce platform with Redux-Toolkit cart and Framer Motion animations.',
      tech: ['React','Redux-Toolkit','TailwindCSS','Framer Motion','Node.js','MongoDB'],
      highlights: ['Parallax hero','Redux-Toolkit cart with persistence','Framer Motion page transitions','Mobile-first layout'],
      images: [], github: '#', live: '#', order: 2,
    },
    {
      id: 'barakat', fileName: 'BARAKAT', perms: '-rw-r--r--', icon: '◈',
      category: 'Full-Stack / Food-Tech', status: 'COMPLETED', year: '2023',
      shortDesc: 'Full-stack restaurant ordering platform with real-time menu, cart management, and order tracking.',
      fullDesc: 'A complete restaurant management & ordering platform with real-time updates, JWT auth, and admin dashboard.',
      tech: ['React','Node.js','MongoDB','Express','TailwindCSS','Framer Motion','JWT','Socket.io'],
      highlights: ['Real-time order tracking via Socket.io','JWT-based auth','Animated menu','Admin dashboard'],
      images: [], github: '#', live: '#', order: 3,
    },
  ]);

  // Experience
  await Experience.insertMany([
    {
      id: 'leoni', title: 'Data Science Intern', company: 'LEONI Wiring Systems',
      location: 'Sousse, Tunisia', date: '02/2025 – 08/2025',
      stack: 'Node.js · Spring Boot · ReactJS · TailwindCSS · MongoDB · Python · XGBoost · Transformers · PyTorch · PEFT/LoRA',
      bullets: [
        'Built a full-stack web platform for equipment management, predictive maintenance & AI-assisted document support',
        'Integrated a RAG-based AI chatbot connected to MongoDB for intelligent document retrieval',
        'Developed ML pipeline using XGBoost + Transformers for predictive maintenance forecasting',
        'Fine-tuned LLMs with PEFT/LoRA for domain-specific industrial QA',
      ], order: 0,
    },
    {
      id: 'fsm', title: 'Web Developer Intern', company: 'Faculty of Sciences of Monastir',
      location: 'Monastir, Tunisia', date: '02/2023 – 05/2023',
      stack: 'React · Redux-Toolkit · Node.js · TailwindCSS · Framer Motion · MongoDB',
      bullets: [
        'Built a MERN stack platform for reviewing and discovering leisure venues',
        'Implemented Redux-Toolkit state management for complex UI interactions',
        'Designed responsive animations with Framer Motion for enhanced UX',
      ], order: 1,
    },
  ]);

  // Skills
  await SkillGroup.insertMany([
    { id: 'web',   tree: '├──', name: 'Web',      amber: false, badges: ['ReactJS','Node.js','Spring Boot','JavaScript','Express','JWT','TailwindCSS','Bootstrap','jQuery'], order: 0 },
    { id: 'ai',    tree: '├──', name: 'AI & ML',  amber: true,  badges: ['PyTorch','Transformers','XGBoost','Scikit-learn','LangChain','PandasAI','PEFT / LoRA','Groq'], order: 1 },
    { id: 'data',  tree: '├──', name: 'Data & Viz',amber:false, badges: ['Pandas','NumPy','Matplotlib','Seaborn','Plotly','Power BI','Streamlit','ETL (Talend)'], order: 2 },
    { id: 'db',    tree: '├──', name: 'Database', amber: false, badges: ['MongoDB','SQL','Neo4J'], order: 3 },
    { id: 'tools', tree: '└──', name: 'Tools',    amber: false, badges: ['Docker','GitHub','Postman','Flask','Jinja2','Java'], order: 4 },
  ]);

  // Education
  await Education.insertMany([
    { id: 'masters', degree: "Professional Master's in Data Science", school: 'Faculty of Sciences of Monastir', year: '2023 – 2025', badge: 'CURRENT', order: 0 },
    { id: 'bachelor', degree: "Bachelor's in Software Engineering & IS", school: 'Faculty of Sciences of Monastir', year: '2020 – 2023', badge: 'COMPLETED', order: 1 },
  ]);

  // Languages
  await Language.insertMany([
    { id: 'ar', name: 'ARABIC',  level: 'Native', dots: 5, order: 0 },
    { id: 'en', name: 'ENGLISH', level: 'Fluent',  dots: 4, order: 1 },
    { id: 'fr', name: 'FRENCH',  level: 'Fluent',  dots: 4, order: 2 },
  ]);

  // Contact
  await Contact.insertMany([
    { id: 'email',    label: 'EMAIL',    value: 'chebaaneismail@gmail.com', href: 'mailto:chebaaneismail@gmail.com', order: 0 },
    { id: 'phone',    label: 'PHONE',    value: '+216 52 759 375',          href: 'tel:+21652759375',                order: 1 },
    { id: 'linkedin', label: 'LINKEDIN', value: 'ismail-chebaane',          href: 'https://www.linkedin.com/in/ismail-chebaane-535b75146', order: 2 },
    { id: 'github',   label: 'GITHUB',   value: 'github.com/chebaane',      href: 'https://github.com/chebaaneismail', order: 3 },
    { id: 'location', label: 'LOCATION', value: 'Monastir, Téboulba, TN',   href: '#', order: 4 },
  ]);

  console.log('✅ Seed complete!');
  await mongoose.disconnect();
};

seed().catch(err => { console.error(err); process.exit(1); });

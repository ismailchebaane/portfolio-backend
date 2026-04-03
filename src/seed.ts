// seed.ts (Deno version)
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

const env = config();
const client = new MongoClient();
await client.connect(env.MONGODB_URI || "");

const db = client.database("portfolio");

// Define collections
const Profiles = db.collection("profiles");
const Projects = db.collection("projects");
const Experiences = db.collection("experiences");
const SkillGroups = db.collection("skillGroups");
const Educations = db.collection("educations");
const Languages = db.collection("languages");
const Contacts = db.collection("contacts");

const seed = async () => {
  console.log("Connected. Seeding...");

  // Clear all collections
  await Promise.all([
    Profiles.deleteMany({}),
    Projects.deleteMany({}),
    Experiences.deleteMany({}),
    SkillGroups.deleteMany({}),
    Educations.deleteMany({}),
    Languages.deleteMany({}),
    Contacts.deleteMany({}),
  ]);

  // Profile
  await Profiles.insertOne({
    name: "Chebaane Ismail",
    title: "AI Engineer | Data Scientist | Web Developer",
    email: "chebaaneismail@gmail.com",
    phone: "+216 52 759 375",
    location: "Monastir, Téboulba, Tunisia",
    github: "https://github.com/chebaaneismail",
    linkedin: "https://www.linkedin.com/in/ismail-chebaane-535b75146",
    cv: "#",
    about: "Professional Master's student in Data Science at the Faculty of Sciences of Monastir. Passionate about AI, web development, machine learning, and data analysis. Actively seeking to build innovative, data-driven and AI-powered applications that solve real-world problems.",
    status: "Seeking new opportunities",
    focus: "AI Engineering / Full-Stack / MLOps",
  });

  // Projects
  await Projects.insertMany([
    {
      id: "ai_csv_chatbot", fileName: "AI_CSV_Chatbot", perms: "-rwxr--r--", icon: "◈",
      category: "AI / Data", status: "COMPLETED", year: "2024",
      shortDesc: "Upload CSVs and query them in plain English. Powered by PandasAI + LLM backend with a clean Streamlit interface.",
      fullDesc: "A natural-language data analysis tool that lets you upload any CSV file and ask questions in plain English.",
      tech: ["Python","PandasAI","Streamlit","LangChain","OpenAI","Pandas","NLP"],
      highlights: ["Natural language → Pandas query translation","Supports CSV files up to 100MB","Auto chart generation for numeric data","Full conversation memory across queries"],
      images: [], github: "#", live: "#", order: 0,
    },
    {
      id: "disease_predictor", fileName: "Disease_Predictor", perms: "-rwxr--r--", icon: "◈",
      category: "ML / Healthcare", status: "COMPLETED", year: "2024",
      shortDesc: "ML-powered health diagnostic app predicting diseases from patient health parameters with multi-model ensemble.",
      fullDesc: "A clinical decision-support ML application that predicts multiple disease categories from patient vitals and lab results.",
      tech: ["Python","Scikit-learn","XGBoost","SHAP","Streamlit","Pandas","NumPy"],
      highlights: ["Multi-model ensemble for higher accuracy","SHAP explainability","Supports 5+ disease categories","Feature importance visualization"],
      images: [], github: "#", live: "#", order: 1,
    },
    {
      id: "lux_perfume", fileName: "Lux_Perfume", perms: "-rw-r--r--", icon: "◈",
      category: "Full-Stack / E-Commerce", status: "COMPLETED", year: "2023",
      shortDesc: "High-end e-commerce website with smooth animations, full product catalog, cart, and checkout flow.",
      fullDesc: "A luxury perfume e-commerce platform with Redux-Toolkit cart and Framer Motion animations.",
      tech: ["React","Redux-Toolkit","TailwindCSS","Framer Motion","Node.js","MongoDB"],
      highlights: ["Parallax hero","Redux-Toolkit cart with persistence","Framer Motion page transitions","Mobile-first layout"],
      images: [], github: "#", live: "#", order: 2,
    },
    {
      id: "barakat", fileName: "BARAKAT", perms: "-rw-r--r--", icon: "◈",
      category: "Full-Stack / Food-Tech", status: "COMPLETED", year: "2023",
      shortDesc: "Full-stack restaurant ordering platform with real-time menu, cart management, and order tracking.",
      fullDesc: "A complete restaurant management & ordering platform with real-time updates, JWT auth, and admin dashboard.",
      tech: ["React","Node.js","MongoDB","Express","TailwindCSS","Framer Motion","JWT","Socket.io"],
      highlights: ["Real-time order tracking via Socket.io","JWT-based auth","Animated menu","Admin dashboard"],
      images: [], github: "#", live: "#", order: 3,
    },
  ]);

  console.log("✅ Seed complete!");
};

await seed();

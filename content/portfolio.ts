export const portfolio = {
  intro: "I’m Parag Patil, a final-year computer engineering student exploring how dependable backends, machine learning, and thoughtful interfaces can solve real operational problems.",
  contact: { email: "patilparag973@gmail.com", github: "https://github.com/parag005-ai", linkedin: "https://www.linkedin.com/in/1909parag-patil" },
  facts: [{ label: "Education", value: "B.E. · 2027" }, { label: "Current CGPA", value: "9.41 / 10" }, { label: "Based in", value: "Maharashtra, India" }],
  focus: ["Production-minded backend systems", "Applied machine learning", "Interfaces that clarify complexity"],
  projects: [
    { title: "NCEP Clinical Precision Platform", category: "Clinical data / Backend engineering", summary: "An ECG processing workflow designed around canonical records, reliable ingestion, validation, and reporting—not a claim of clinical deployment.", highlights: ["Multi-format ECG parsing and metadata validation", "FastAPI services with PostgreSQL, SQLAlchemy, and Alembic", "HTML and PDF reporting workflows with test coverage"], stack: ["FastAPI", "PostgreSQL", "Python", "Next.js"], href: "https://github.com/parag005-ai/NCEP_corrected.git", image: "/projects/ncep-ecg.jpeg", imageAlt: "ECG waveform visualization from the NCEP project repository" },
    { title: "KrishiSense", category: "SIH 2025 / Agricultural intelligence", summary: "A farm-level crop-yield and damage-analysis system combining weather, satellite, soil, segmentation, OCR, and ensemble models for PMFBY workflows.", highlights: ["Random Forest, XGBoost, and LightGBM ensemble pipeline", "Sentinel imagery, NASA weather data, and SAM segmentation", "Project-reported low-latency API and model evaluation workflows"], stack: ["Python", "ML", "Next.js", "Geospatial"], href: "https://github.com/parag005-ai/SIH25263.git", image: "/projects/krishisense-login.jpeg", imageAlt: "KrishiSense agricultural monitoring and crop insurance interface supplied by Parag Patil" },
    { title: "Quiz Central", category: "Full-stack / AI-assisted learning", summary: "A full-stack quiz platform that turns uploaded learning material into assessments, supports multiple sign-in flows, and tracks learner progress.", highlights: ["Gemini and Groq-assisted quiz generation", "MongoDB-backed auth, quiz, and analytics workflows", "Document ingestion plus AWS S3 and email integrations"], stack: ["Next.js", "TypeScript", "MongoDB", "Gemini"], href: "https://github.com/parag005-ai/Quiz_Central.git", image: "/projects/quiz-dashboard.jpeg", imageAlt: "Quiz Central dashboard interface supplied by Parag Patil" },
    { title: "Document Image Compression", category: "AI/ML / Applied research", summary: "A convolutional autoencoder experiment for compressing document imagery while measuring reconstruction quality and compression trade-offs.", highlights: ["Encoder-decoder architecture for 256 × 256 grayscale inputs", "SSIM, PSNR, MSE, and compression-ratio evaluation", "FastAPI interface for repeatable comparison workflows"], stack: ["TensorFlow", "Python", "FastAPI", "Autoencoder"], href: "https://github.com/parag005-ai/Image-Compression.git", image: "/projects/compression-results.png", imageAlt: "Compression quality comparison chart from the Image Compression repository" },
  ],
  experience: [
    { date: "01 Jul 2026 — 30 Sep 2026", role: "Backend Intern", company: "22Neuro · Transcend Discoveries Pvt Ltd", summary: "Résumé-listed placement focused on ECG ingestion, canonical records, FastAPI parsing and validation, PostgreSQL migrations, reporting workflows, and testing. The dates are future-facing as of this portfolio build." },
    { date: "01 Jan 2026 — 31 Jan 2026", role: "AI/ML Intern", company: "Sumago Infotech Pvt Ltd", summary: "Built and evaluated an autoencoder-based image-compression workflow, including preprocessing, encoder-decoder modeling, visual quality checks, metrics, and hyperparameter tuning." },
  ],
  research: [
    { meta: "IEEE INDISCON 2025 · DOI verified via LinkedIn", title: "Redefining Trust in the Food Chain with Blockchain and ML", description: "Published in the 2025 IEEE 6th India Council International Subsections Conference; conference held 21–23 August 2025 and added to IEEE Xplore on 2 December 2025.", href: "https://doi.org/10.1109/INDISCON66021.2025.11254735" },
    { meta: "IJIRMPS · 07 Dec 2025 · DOI verified via LinkedIn", title: "From Satellite to Soil: A High-Resolution Hybrid Sensing Framework for Accurate Farm-Level Yield Estimation and Transparent Crop Insurance", description: "Paper ID 232843 in the International Journal of Innovative Research in Engineering & Multidisciplinary Physical Sciences.", href: "https://doi.org/10.37082/IJIRMPS.v13.i6.232843" },
    { meta: "Smart India Hackathon 2025", title: "Winner · Team Graviton · PS-SIH25263", description: "A proud milestone for Team Graviton—winning the SIH 2025 Software Edition and receiving the ₹1,50,000 award.", href: null },
  ],
  credentials: [
    { date: "Oct 2025", title: "Generative AI Leader Track", issuer: "Google Cloud Skills Boost" },
    { date: "Aug 2025", title: "INDISCON presentation certificate", issuer: "IEEE · NIT Rourkela" },
    { date: "Sep 2024", title: "Red Hat System Administration I", issuer: "Red Hat training center" },
  ],
  skills: [
    { index: "01", title: "Languages", items: [{ name: "Python", level: "Core" }, { name: "Java", level: "Applied" }, { name: "JavaScript", level: "Applied" }, { name: "TypeScript", level: "Applied" }, { name: "SQL", level: "Applied" }] },
    { index: "02", title: "Product", items: [{ name: "React", level: "Applied" }, { name: "Next.js", level: "Applied" }, { name: "HTML", level: "Applied" }, { name: "CSS", level: "Applied" }, { name: "REST APIs", level: "Core" }] },
    { index: "03", title: "Backend & data", items: [{ name: "FastAPI", level: "Core" }, { name: "MySQL", level: "Applied" }, { name: "MongoDB", level: "Applied" }, { name: "PostgreSQL", level: "Applied" }, { name: "Git", level: "Core" }] },
    { index: "04", title: "Foundations", items: [{ name: "DSA", level: "Applied" }, { name: "OOP", level: "Applied" }, { name: "ML evaluation", level: "Applied" }, { name: "Problem solving", level: "Core" }, { name: "System design basics", level: "Familiar" }] },
  ],
  moreWork: [
    { title: "Food Traceability", note: "Solidity, Ethereum, QR-backed supply-chain records", href: "https://github.com/parag005-ai/Food_traceability_Blockchain.git" },
    { title: "Onion Storage Ventilation", note: "Random Forest control logic for an ESP32 ventilation system", href: "https://github.com/parag005-ai/ventilation_onion_system.git" },
  ],
} as const;

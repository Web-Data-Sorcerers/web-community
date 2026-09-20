export interface DomainSection {
  heading: string;
  type: "paragraph" | "bullets";
  content?: string;
  bullets?: string[];
}

export interface DomainDetail {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  sections: DomainSection[];
}

export const DOMAIN_DETAILS: Record<string, DomainDetail> = {
  "data-intelligence": {
    id: "data-intelligence",
    title: "DATA INTELLIGENCE",
    subtitle:
      "Transforming data into information, insights, and data systems that can be utilized for decision-making and AI development.",
    tags: [
      "Data Science",
      "Data Analytics",
      "Data Engineering",
      "Data Infrastructure",
    ],
    sections: [
      {
        heading: "LEARNING",
        type: "paragraph",
        content:
          "Python for Data Science, NumPy, Pandas, Data Cleaning, Exploratory Data Analysis (EDA), Statistical Analysis, Feature Engineering, Machine Learning Fundamentals, Model Evaluation, Data Visualization, Predictive Modeling.",
      },
      {
        heading: "Expected Skills",
        type: "bullets",
        bullets: [
          "Ability to understand and explore datasets.",
          "Ability to discover patterns and insights.",
          "Ability to build predictive models.",
          "Ability to explain analytical results scientifically.",
        ],
      },
      {
        heading: "OUTPUT",
        type: "paragraph",
        content:
          "Data analysis, Prediction model, Experiment, Research, Dataset analysis, Dashboard/visualization.",
      },
    ],
  },
  "core-ai-engineering": {
    id: "core-ai-engineering",
    title: "CORE AI & ENGINEERING",
    subtitle:
      "Building AI models and transforming them into real-world AI systems.",
    tags: ["Machine Learning", "Deep Learning", "AI Engineering", "MLOps"],
    sections: [
      {
        heading: "LEARNING",
        type: "paragraph",
        content:
          "Supervised Learning, Unsupervised Learning, Regression, Classification, Clustering, Feature Engineering, Model Selection, Model Evaluation, Hyperparameter Tuning, Ensemble Methods.",
      },
      {
        heading: "ALGORITHMS",
        type: "paragraph",
        content:
          "Linear Regression, Logistic Regression, Decision Tree, Random Forest, SVM, KNN, XGBoost, Clustering.",
      },
      {
        heading: "OUTPUT",
        type: "paragraph",
        content:
          "Prediction system, Classification system, ML experiment, Research, Prototype AI.",
      },
    ],
  },
  "language-reasoning": {
    id: "language-reasoning",
    title: "LANGUAGE & REASONING",
    subtitle:
      "Building AI capable of understanding language, generating information, utilizing knowledge, and performing reasoning.",
    tags: ["Natural Language Processing", "Generative AI"],
    sections: [
      {
        heading: "LEARNING",
        type: "paragraph",
        content:
          "Text Processing, Tokenization, Text Classification, Sentiment Analysis, Named Entity Recognition, Text Similarity, Information Extraction, Embedding, Semantic Search, Language Models.",
      },
      {
        heading: "OUTPUT",
        type: "paragraph",
        content:
          "Text classifier, Search system, NLP experiment, Information extraction system, Research.",
      },
    ],
  },
  "vision-multimodal": {
    id: "vision-multimodal",
    title: "VISION & MULTIMODAL",
    subtitle:
      "Building AI capable of understanding visuals, video, and combinations of various information types.",
    tags: [
      "Computer Vision",
      "Optical Character Recognition",
      "Video Understanding",
      "Multimodal AI",
    ],
    sections: [
      {
        heading: "LEARNING",
        type: "paragraph",
        content:
          "Image Processing, Image Classification, Object Detection, Image Segmentation, Image Recognition, Feature Extraction, Image Embedding, Face/Object Analysis, Visual Tracking.",
      },
      {
        heading: "FRAMEWORK/TOOLS",
        type: "paragraph",
        content: "OpenCV, PyTorch, TensorFlow, YOLO.",
      },
      {
        heading: "OUTPUT",
        type: "paragraph",
        content:
          "Object detection, Image classification, Visual recognition, Computer vision research, AI prototype.",
      },
    ],
  },
  "product-software": {
    id: "product-software",
    title: "PRODUCT & SOFTWARE",
    subtitle:
      "Turn ideas into impactful digital products through research, design, and development.",
    tags: ["UI/UX", "Front-end Development", "Back-end Development", "DevOps"],
    sections: [
      {
        heading: "LEARNING",
        type: "bullets",
        bullets: [
          "UX Research Learning: User Research, Interview, Observation, Survey, User Persona, User Journey, Problem Discovery, Usability Testing, Information Architecture, UX Evaluation.",
          "UI Design Learning: Design Principles, Visual Design, Typography, Color, Layout, Design System, Component Design, Responsive Design, Prototyping, Design Handoff.",
        ],
      },
      {
        heading: "TOOLS",
        type: "paragraph",
        content: "Figma, FigJam.",
      },
      {
        heading: "OUTPUT",
        type: "paragraph",
        content:
          "User research, User flow, Wireframe, UI Design, Design system, Prototype, Usability testing report.",
      },
    ],
  },
  "growth-community": {
    id: "growth-community",
    title: "GROWTH & COMMUNITY",
    subtitle:
      "Grow people, grow community, and make ideas, projects, and impact visible.",
    tags: ["Public Relations", "Creative", "Community & Partnership"],
    sections: [
      {
        heading: "FOCUS",
        type: "paragraph",
        content: "Building Data Sorcerers' communication and public reputation.",
      },
      {
        heading: "LEARNING",
        type: "paragraph",
        content:
          "Public Relations, Communication Strategy, Media Relations, Press Release, Brand Communication, Copywriting, Storytelling, Community Communication, Crisis Communication, External Communication.",
      },
      {
        heading: "OUTPUT",
        type: "paragraph",
        content:
          "Press release, Media publication, Community announcement, Organization profile, Campaign communication, Public communication.",
      },
    ],
  },
};

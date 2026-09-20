export interface AksaraChar {
  code: string;
  label: string;
  unicode: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badgeTags: string[];
  url: string;
  description: string;
  accentColor: string;
  glowColor: string;
  category: string;
}

export const AKSARA_CHARS: AksaraChar[] = [
  { code: "ha", label: "HA", unicode: "ꦲ" },
  { code: "na", label: "NA", unicode: "ꦤ" },
  { code: "ca", label: "CA", unicode: "ꦕ" },
  { code: "ra", label: "RA", unicode: "ꦫ" },
  { code: "ka", label: "KA", unicode: "ꦏ" },
  { code: "da", label: "DA", unicode: "ꦢ" },
  { code: "ta", label: "TA", unicode: "ꦠ" },
  { code: "sa", label: "SA", unicode: "ꦱ" },
  { code: "wa", label: "WA", unicode: "ꦮ" },
  { code: "la", label: "LA", unicode: "ꦭ" },
  { code: "pa", label: "PA", unicode: "ꦥ" },
  { code: "dha", label: "DHA", unicode: "ꦝ" },
  { code: "ja", label: "JA", unicode: "ꦗ" },
  { code: "ya", label: "YA", unicode: "ꦪ" },
  { code: "nya", label: "NYA", unicode: "ꦚ" },
  { code: "ma", label: "MA", unicode: "ꦩ" },
  { code: "ga", label: "GA", unicode: "ꦒ" },
  { code: "ba", label: "BA", unicode: "ꦧ" },
  { code: "tha", label: "THA", unicode: "ꦛ" },
  { code: "nga", label: "NGA", unicode: "ꦔ" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "arutala-aksara",
    title: "Arutala Aksara",
    badgeTags: ["HoDS Apa", "Lomba/research"],
    url: "arutalaaksara.com",
    description:
      "An intelligent handwriting recognition and interactive learning platform for the Javanese script (Aksara Jawa), powered by deep learning computer vision to preserve and revitalize cultural heritage through cutting-edge AI technology.",
    accentColor: "#2F80ED",
    glowColor: "rgba(47, 128, 237, 0.25)",
    category: "Computer Vision & Cultural AI",
  },
  {
    id: "medisense-ai",
    title: "Medisense AI",
    badgeTags: ["Core AI", "Healthcare AI"],
    url: "medisense.ds.org",
    description:
      "Deep learning diagnostic assistance system leveraging multi-scale convolutional vision and attention transformers to detect radiographic anomalies with clinical precision.",
    accentColor: "#00E5FF",
    glowColor: "rgba(0, 229, 255, 0.22)",
    category: "Medical Diagnostics",
  },
  {
    id: "finpulse-intelligence",
    title: "FinPulse Intelligence",
    badgeTags: ["Data Intelligence", "FinTech"],
    url: "finpulse.ds.org",
    description:
      "Predictive financial market sentiment engine fusing real-time unstructured macroeconomic disclosures with temporal graph networks for risk forecasting.",
    accentColor: "#8A4BFF",
    glowColor: "rgba(138, 75, 255, 0.25)",
    category: "Predictive Analytics",
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  badgeUrl: string;
  verificationUrl: string;
  pdfUrl?: string;
  issueDate?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: "3efea099-32d4-4a82-95d9-157b6a1cba73",
    title: "Python Essentials 1",
    issuer: "Cisco & Python Institute",
    badgeUrl: "/images/certifications/cisco-python-essentials-1.png",
    verificationUrl: "https://www.credly.com/badges/3efea099-32d4-4a82-95d9-157b6a1cba73",
    pdfUrl: "/certificates/cisco-python-essentials-1.pdf",
    skills: ["Python", "Algorithms", "Object-Oriented Programming", "Data Structures"],
  },
  {
    id: "9eca709f-793b-4465-ab5b-f6204c59b8d1",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    badgeUrl: "/images/certifications/cisco-intro-data-science.png",
    verificationUrl: "https://www.credly.com/badges/9eca709f-793b-4465-ab5b-f6204c59b8d1/public_url",
    pdfUrl: "/certificates/cisco-intro-data-science.pdf",
    skills: ["Data Analysis", "Statistics", "Machine Learning Basics", "Data Visualization"],
  },
];

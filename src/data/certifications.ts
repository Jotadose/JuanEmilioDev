export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  badgeUrl: string;
  verificationUrl: string;
  issueDate?: string;
  skills: string[];
}

export const certifications: Certification[] = [
  {
    id: "3efea099-32d4-4a82-95d9-157b6a1cba73",
    title: "Python Essentials 1",
    issuer: "Cisco & Python Institute",
    badgeUrl: "https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
    verificationUrl: "https://www.credly.com/badges/3efea099-32d4-4a82-95d9-157b6a1cba73/public_url",
    skills: ["Python", "Algorithms", "Object-Oriented Programming", "Data Structures"],
  },
  {
    id: "9eca709f-793b-4465-ab5b-f6204c59b8d1",
    title: "Introduction to Data Science",
    issuer: "Cisco",
    badgeUrl: "https://images.credly.com/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png",
    verificationUrl: "https://www.credly.com/badges/9eca709f-793b-4465-ab5b-f6204c59b8d1/public_url",
    skills: ["Data Analysis", "Statistics", "Machine Learning Basics", "Data Visualization"],
  },
];

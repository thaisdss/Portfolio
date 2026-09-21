import { FaGithub, FaReact } from "react-icons/fa"
import { SiGoogleappsscript, SiShadcnui } from "react-icons/si"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import { TbBrandTypescript } from "react-icons/tb"
import { GitBranch } from "lucide-react"
import type { ExperienceDomain } from "@/types/Experience"
import type { TechDomain } from "@/types/Tech"
import type { Course } from "@/types/Course";

export const technologies: TechDomain[] = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: FaGithub },
  { name: "Apps Script", icon: SiGoogleappsscript },
  { name: "Shadcn UI", icon: SiShadcnui },
  { name: "React Native", icon: FaReact },
]

export const experiences: ExperienceDomain[] = [
  {
    company: "Banestes",
    role: "Software Developer",
    period: "Jun/2025 — Atual",
    description:
      "Atuação no desenvolvimento de sistemas internos que apoiam os processos de crédito rural e crédito imobiliário, participando de todo o ciclo do produto — desde UX/UI, desenvolvimento front-end, integrações e testes.",
  },
  {
    company: "IFES/FAPES",
    role: "Software Developer",
    period: "Set/2026 — Atual",
    description:
      "Atuação no desenvolvimento de aplicação web integrada à Inteligência Artificial para monitoramento e análise da qualidade das praias do Espírito Santo, participando do desenvolvimento full-stack, integração de dados e implementação da infraestrutura da aplicação.",
  },
  {
    company: "CSP Tech",
    role: "Front-end Developer",
    period: "Jul/2024 — Nov/2025",
    description:
      "Desenvolvimento front-end de sistemas de gerenciamento e controle de processos para diferentes clientes, atuando em projetos reais com foco em usabilidade, boas práticas e manutenção de código.",
  },
]

export const courses: Course[] = [
  {
    title: "Jovem Programadora",
    institution: "Senac Espírito Santo",
    situation: "completed",
  },
  {
    title: "Arquitetura da Informação e Projeto de Sistemas",
    institution:
      "GGTTE - Unicamp",
    situation: "completed",
  },
  {
    title: "Introdução à Inteligência Artificial",
    institution: "Eldorado",
    situation: "completed",
  },
]

export const repoNames = ["If-data-merge", "municipalities-pre-verification", "Mini-Projects-React", "Mini-Projects-JS"]

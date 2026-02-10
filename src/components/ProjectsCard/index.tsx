import type { UserRepo } from "@/types/UseRepo"
import { motion } from "framer-motion"
import { ExternalLink, Star, GitFork } from "lucide-react"
import { FaGithub } from "react-icons/fa"

type Props = {
  repo: UserRepo
}

export function ProjectCard({ repo }: Props) {
  return (
    <motion.div
      whileHover={{ backgroundColor: "rgba(16,185,129,0.05)" }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-slate-700 bg-slate-500/5 p-6 flex flex-col justify-between hover:border-emerald-500 transition"
    >
      <div>
        <h3 className="text-lg font-semibold text-slate-100">
          {repo.name}
        </h3>

        <p className="mt-2 text-sm text-slate-400 line-clamp-3">
          {repo.description || "Projeto sem descrição"}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
          {repo.language && (
            <span className="px-2 py-1 rounded-md bg-slate-800">
              {repo.language}
            </span>
          )}

          <div className="flex items-center gap-1">
            <Star size={14} /> {repo.stargazers_count}
          </div>

          <div className="flex items-center gap-1">
            <GitFork size={14} /> {repo.forks_count}
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={repo.html_url}
          target="_blank"
          className="flex items-center gap-2 text-sm text-slate-200 hover:text-emerald-500 transition"
        >
          <FaGithub size={16} />
          Código
        </a>

        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            className="flex items-center gap-2 text-sm text-slate-200 hover:text-emerald-500 transition"
          >
            <ExternalLink size={16} />
            Site
          </a>
        )}
      </div>
    </motion.div>
  )
}

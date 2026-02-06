import { motion } from "framer-motion"

type Props = {
  exp: {
    role: string
    company: string
    period: string
    description: string
  }
  index: number
}

export function ExperienceCard({ exp, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="relative pl-8"
    >
      {/* Bolinha */}
      <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-emerald-500
                       shadow-[0_0_8px_rgba(16,185,129,0.6)]" />

      {/* Barrinha */}
      <span className="absolute left-1.25 top-4 h-full w-px bg-slate-700" />

      {/* Card */}
      <div
        className="rounded-xl border border-slate-700 bg-slate-500/5 p-6
                   hover:border-emerald-500 transition"
      >
        <h3 className="font-semibold text-slate-100">
          {exp.role}
        </h3>

        <p className="text-sm text-emerald-500">
          {exp.company}
        </p>

        <p className="text-xs text-slate-500 mb-3">
          {exp.period}
        </p>

        <p className="text-sm text-slate-400 leading-relaxed">
          {exp.description}
        </p>
      </div>
    </motion.div>
  )
}

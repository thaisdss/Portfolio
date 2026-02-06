import type { TechDomain } from "@/types/Tech"
import { motion } from "framer-motion"

type TechsProps = {
    techs: TechDomain[]
}

export function Techs({ techs }: TechsProps) {
  return (
    <div>
        <h2 className="text-xl font-bold mb-4 text-slate-200">Tecnologias</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {techs.map((tech, index) => {
            const Icon = tech.icon

            return (
            <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08 }}
                className="group flex items-center gap-2 rounded-lg
                        border border-slate-700 bg-slate-500/5 px-3 py-2
                        hover:border-emerald-500 transition cursor-default"
            >
                <motion.div
                whileHover={{ rotate: 6 }}
                className="text-emerald-500"
                >
                <Icon size={18} />
                </motion.div>

                <span className="text-sm text-slate-200">
                {tech.name}
                </span>
            </motion.div>
            )
        })}
        </div>
    </div>
  )
}


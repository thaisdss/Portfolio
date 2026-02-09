import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="space-y-4"
    >
      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
        Formação
      </h3>

      <div className="relative pl-6">
        <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-emerald-500" />

        <div className="flex items-center justify-between gap-4">
          <p className="font-medium text-slate-100">
            Análise e Desenvolvimento de Sistemas
          </p>

          <Badge className="bg-emerald-500/15 text-emerald-400 text-xs">
            Em curso
          </Badge>
        </div>

        <p className="text-sm text-slate-400 mt-1">
          Uninter
        </p>
      </div>
    </motion.div>
  )
}


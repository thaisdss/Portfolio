import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { Course } from "@/types/Course"

type CoursesProps = {
    courses: Course[]
}

export const Courses = ({ courses }: CoursesProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
        Cursos complementares
      </h3>

      <ul className="space-y-4">
        {courses.map((course, index) => (
          <motion.li
            key={course.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.06,
            }}
            className="relative pl-6"
          >
            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-emerald-500/70" />

            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-slate-100">
                {course.title}
              </p>

              <Badge className="bg-emerald-500/15 text-emerald-400 text-xs">
                Concluído
              </Badge>
            </div>

            <p className="text-xs text-slate-400 mt-1">
              {course.institution}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
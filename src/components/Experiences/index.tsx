import type { ExperienceDomain } from "@/types/Experience"
import { ExperienceCard } from "../ExperienceCard"

type ExperiencesProps = {
    experiences: ExperienceDomain[]
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section className="lg:mt-10">
      <h2 className="text-xl font-semibold mb-6 text-slate-100">
        Experiência profissional
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.company}
            exp={exp}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
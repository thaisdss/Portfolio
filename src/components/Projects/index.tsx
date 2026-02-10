import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { UserRepo } from "@/types/UseRepo"
import { ProjectCard } from "../ProjectsCard"

type Props = {
  repos: UserRepo[]
}

export function Projects({ repos }: Props) {
  return (
    <Carousel className="relative w-full px-12">
      <CarouselContent>
        {repos.map((repo) => (
          <CarouselItem
            key={repo.id}
            className="basis-full"
          >
            <ProjectCard repo={repo} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-0 bg-emerald-500 border-emerald-600 hover:bg-emerald-300 [&_svg]:text-slate-800" />
      <CarouselNext className="right-0 bg-emerald-500 border-emerald-600 hover:bg-emerald-300 [&_svg]:text-slate-800" />
    </Carousel>
  )
}

import { Courses } from "./components/Courses"
import { Education } from "./components/Education"
import { Experiences } from "./components/Experiences"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { Techs } from "./components/Techs"
import { courses, experiences, technologies } from "./constants"
import { useGithub } from "./hooks/useGithub"

export function App() {
    const user = useGithub("thaisdss", ["If-data-merge", "municipalities-pre-verification", "Mini-Projects-React", "Mini-Projects-JS"])

    return (
        <div className="w-full h-full bg-slate-800 font-sans px-8 py-4 flex flex-col max-lg:gap-8">
            <section className="flex items-start gap-8 rounded-xl p-8 text-slate-200 bg-slate-500/5 border border-slate-700 max-lg:flex-col">
                <img src={user.avatarUrl} alt="Avatar" className="w-32 h-32 rounded-full mb-4 border-2 border-emerald-500 max-lg:self-center" />

                <div>                    
                    <h1 className="text-xl font-bold">Thaís Silva</h1>
                    <p className="text-emerald-500 text-sm">Front-end Developer</p>

                    <p className="text-sm mt-5">Iniciei minha trajetória em TI após um curso de JavaScript e, desde então, atuo no desenvolvimento front-end para aplicações web e mobile.</p>
                    <p className="text-sm max-lg:mt-1">Atualmente, atuo no desenvolvimento de sistemas que dão suporte a processos de crédito rural, análises técnicas e outras operações internas de bancos e cooperativas financeiras.</p>
                    <p className="text-sm max-lg:mt-1">Acredito que aprender continuamente e adaptar-se a novas tecnologias é essencial para criar boas soluções.</p>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start lg:mt-12">
                <Techs techs={technologies} />
                <Projects repos={user.repos} />
            </section>

            <Experiences experiences={experiences} />

            <section className="lg:mt-13 lg:mb-4 max-lg:mt-2">
                <h2 className="text-xl font-semibold mb-6 max-lg:mb-4 text-slate-100">
                    Formação & cursos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-lg:gap-4 items-start">
                    <Education />
                    <Courses courses={courses} />
                </div>
            </section>

            <Footer />
        </div>
    )
}

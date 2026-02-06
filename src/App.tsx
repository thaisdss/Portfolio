import { Experiences } from "./components/Experiences"
import { Footer } from "./components/Footer"
import { Projects } from "./components/Projects"
import { Techs } from "./components/Techs"
import { experiences, technologies } from "./constants"
import { useGithub } from "./hooks/useGithub"

export function App() {
    const user = useGithub("thaisdss", ["banestes-test", "Mini-Projects-React", "Mini-Projects-JS"])

    return (
        <div className="w-full h-full bg-slate-800 font-sans px-8 py-4 flex flex-col gap-12 max-lg:gap-8">
            <div className="flex items-start gap-8 rounded-xl p-8 text-slate-200 bg-slate-500/5 border border-slate-700 max-lg:flex-col">
                <img src={user.avatarUrl} alt="Avatar" className="w-32 h-32 rounded-full mb-4 border-2 border-emerald-500 max-lg:self-center" />

                <div>                    
                    <h1 className="text-xl font-bold">Thaís Silva</h1>
                    <p className="text-emerald-500 text-sm">Front-end Developer</p>

                    <p className="text-sm mt-5">Iniciei minha trajetória em TI após um curso de JavaScript e, desde então, atuo no desenvolvimento front-end para aplicações web e mobile.</p>
                    <p className="text-sm">Atualmente, atuo no desenvolvimento de sistemas voltados ao suporte das demandas da área de crédito rural em bancos e cooperativas financeiras.</p>
                    <p className="text-sm">Acredito que aprender continuamente e adaptar-se a novas tecnologias é essencial para criar boas soluções.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <Techs techs={technologies} />
                <Projects repos={user.repos} />
            </div>

            <Experiences experiences={experiences} />

            <Footer />
        </div>
    )
}

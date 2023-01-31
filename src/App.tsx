import { useEffect, useState } from "react";
import { useGithub } from "./hooks/useGithub";
import * as C from "./App.styled";
import { Profile } from "./components/Profile";
import { Links } from "./components/Links";
import { Techs } from "./components/Techs";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Project } from "./components/Project";

function App() {
  const {avatarUrl, repos} = useGithub("https://api.github.com/users/thaisdss");
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const section = document.querySelector("section:first-of-type") as Element;
    setWidth(section.clientWidth);
  }, [screen.width])

  return (
    <C.Container>
      <Profile url={avatarUrl} />
      <Links width={width} />
      <Techs width={width} />
      <AboutMe width={width} />
      <Projects width={width} />
      { repos.map((repo, index) => (
        <Project
        key={index}
        dataRepo={repo}
        index={index+1}
        width={width}
        />
      )) }
      <C.Footer>
        <p>Feito com ❤️ por Thaís Silva</p>
      </C.Footer>
    </C.Container>
  )
}

export default App

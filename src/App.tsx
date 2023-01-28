import { useEffect, useState } from "react";
import { Repos } from "./types/Repos";
import * as C from "./App.styled";
import { Profile } from "./components/Profile";
import { Links } from "./components/Links";
import { Techs } from "./components/Techs";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Project } from "./components/Project";

function App() {
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [repos, setRepos] = useState<Repos[]>([]);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    fetch("https://api.github.com/users/thaisdss")
      .then(response => response.json())
      .then(data => {
        setAvatarUrl(data.avatar_url);

        fetch(data.repos_url)
          .then(response => response.json())
          .then(data => {
            let newListRepos = [...repos];

            data.forEach((dataRepo: any) => {
              if(dataRepo.name === "WaiterApp" || dataRepo.name === "Costs" || dataRepo.name === "Mini-Projects-React" || dataRepo.name === "Mini-Projects-JS"){
                newListRepos.push({
                  name: dataRepo.name,
                  description: dataRepo.description,
                  stargazers_count: dataRepo.stargazers_count,
                  forks_count: dataRepo.forks_count,
                  language: dataRepo.language,
                  page_url: dataRepo.html_url,
                })
              }

            setRepos(newListRepos);
            })
          })
      })
      .catch(err => console.log(err))
  }, [])

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

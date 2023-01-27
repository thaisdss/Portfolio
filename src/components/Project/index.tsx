import { Repos } from "../../types/Repos";
import * as C from "./styles";

type Props = {
    dataRepo: Repos;
    index: number;
}

export function Project({ dataRepo, index }: Props) {
    function redirectPage() {
        window.open(dataRepo.page_url, "_blank")
    }

    return(
        <C.Container className={`project${index}`} onClick={redirectPage}>
            <div className="name">
                <img src="../../public/assets/folder.svg" alt="Imagem de Folder" />
                <p>{dataRepo.name}</p>
            </div>

            <p className="description">{dataRepo.description}</p>

            <div className="star-fork">
                <img src="../../public/assets/star.svg" alt="Imagem de Estrela" />
                <p className="star">{dataRepo.stargazers_count}</p>

                <img src="../../public/assets/git-branch.svg" alt="Imagem de Branch" />
                <p>{dataRepo.forks_count}</p>
            </div>

            <div className="language">
                <C.colorLanguage language={dataRepo.language}></C.colorLanguage>
                <p>{dataRepo.language}</p>
            </div>
        </C.Container>
    );
}
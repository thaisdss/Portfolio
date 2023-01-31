import * as C from "./styles";

type Props = {
    width: number;
}

export function Projects( {width}: Props ) {
    return(
        <C.Container  width={width}>
            <h2>Meus Projetos</h2>
            <p>
                <a href="https://github.com/thaisdss?tab=repositories" target="_blank">Veja Todos</a>
            </p>
        </C.Container>
    );
}
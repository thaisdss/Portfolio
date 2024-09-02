import * as C from "./style";

type Props = {
    width: number;
}

export function AboutMe( {width}: Props ) {
    return(
        <C.Container width={width}>
            <h2>Sobre mim</h2>
            <C.AboutMeContainer>
                <p>No início de 2021, comecei a estudar Excel avançado e, então, despertei interesse pela área de TI. Foi quando comecei a pesquisar sobre e me apaixonei por programação.</p>
                <p>Atualmente, estudo e trabalho com NextJS, ReactJS, Typescript, Styled-Components e outras tecnologias web.</p>
                <p>Meu objetivo é me especializar em desenvolvimento front-end</p>
                <p>No futuro, quero aprender o básico de desenvolvimento back-end, especialmente Node.js. Também desejo trabalhar com desenvolvimento mobile.</p>
            </C.AboutMeContainer>
        </C.Container>
    );
}

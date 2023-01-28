import * as C from "./style";

type Props = {
    width: number;
}

export function Techs( { width }: Props ) {
    return(
        <C.Container width={width} >
            <h2>Tecnologias</h2>
            <C.TechsContainer>
                <p>JavaScript</p>
                <p>CSS</p>
                <p>HTML</p>
                <p>Git</p>
                <p>GitHub</p>
                <p>NodeJS</p>
                <p>ReactJS</p>
                <p>TypeScript</p>
            </C.TechsContainer>
        </C.Container>
    );
}
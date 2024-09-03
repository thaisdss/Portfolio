import * as C from "./style";

type Props = {
    width: number;
}

export function Techs( { width }: Props ) {
    const techs = ["ReactJS", "TypeScript", "JavaScript", "HTML", "CSS", "Git", "GitHub", "Next.js"]

    return(
        <C.Container width={width} >
            <h2>Tecnologias</h2>
            <C.TechsContainer>
                {techs.map(tech => (
                    <p key={tech}>{tech}</p>
                ))}
            </C.TechsContainer>
        </C.Container>
    );
}

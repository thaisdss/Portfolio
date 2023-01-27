import * as C from "./style";

type Props = {
    url: string;
}

export function Profile({ url }: Props) {
    return(
        <C.Container>
            <img src={url} alt="Foto de Perfil" />
            <h1>Thaís Silva</h1>
            <p>Front-end Developer</p>
        </C.Container>
    );
}
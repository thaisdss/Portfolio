import * as C from "./style";

export function Links() {
    return(
        <C.Container>
           <ul>
            <li>
                <img src="public/assets/map-pin.svg" alt="ícone de Mapa" />
                <p>Brazil</p>
            </li>
            <li>
                <img src="../../public/assets/github.svg" alt="ícone do GitHub" />
                <p><a href="https://github.com/thaisdss">thaisdss</a></p>
            </li>
            <li>
                <img src="../../public/assets/linkedin.svg" alt="ícone do Linkedin" />
                <p><a href="https://www.linkedin.com/in/thaisdss/">thaisdss</a></p>
            </li>
            <li>
                <img src="../../public/assets/instagram.svg" alt="Ícone do Instagram" />
                <p><a href="https://www.instagram.com/thaisdss.silva/">thaisdss.silva</a></p>
            </li>
            <li>
                <img src="../../public/assets/mail.svg" alt="Ícone do E-mail" />
                <p><a href="mailto:thaisdss.silva@gmail.com">thaisdss.silva@gmail.com</a></p>
            </li>
           </ul>
        </C.Container>
    );
}

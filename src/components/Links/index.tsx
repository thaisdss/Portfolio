import { Link } from "../../types/Link";
import * as C from "./style";

type Props = {
    width: number;
}

export function Links( {width}: Props ) {
    const links: Link[] = [
        {
            title: "thaisdss",
            src: "github",
            alt: "Ícone do GitHub",
            link: "https://github.com/thaisdss",
        },
        {
            title: "thaisdss",
            src: "linkedin",
            alt: "Ícone do Linkedin",
            link: "https://www.linkedin.com/in/thaisdss/",
        },
        {
            title: "thaisdss.silva",
            src: "instagram",
            alt: "Ícone do Instagram",
            link: "https://www.instagram.com/thaisdss.silva/",
        },
        {
            title: "thaisdss.silva@gmail.com",
            src: "mail",
            alt: "Ícone do E-mail",
            link: "mailto:thaisdss.silva@gmail.com",
        },
    ]

    return(
        <C.Container width={width}>
           <ul>
                <li>
                    <img src="assets/map-pin.svg" alt="Ícone de Mapa" />
                    <p>Brazil</p>
                </li>
                
                {links.map(link => (
                    <li key={link.link}>
                        <img src={`assets/${link.src}.svg`} alt={link.alt} />
                        <p><a href={link.link} target="_blank">{link.title}</a></p>
                    </li>
                ))}
           </ul>
        </C.Container>
    );
}

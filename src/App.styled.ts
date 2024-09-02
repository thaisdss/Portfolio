import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    padding: 30px 30px 10px 30px;
    background-color: #22212C;
    color: #837E9F;

    display: grid;
    grid-template-areas: 
    "profile aboutMe aboutMe"
    "profile projects projects"
    "links project1 project2"
    "tech project3 project4"
    "footer footer footer";
    justify-content: start;
    gap: 30px;

    .project1{
        grid-area: project1;
    }

    .project2{
        grid-area: project2;
    }

    .project3{
        grid-area: project3;
    }

    .project4{
        grid-area: project4;
    }

    @media(max-width: 1326px) {
        grid-template-areas: 
        "profile aboutMe aboutMe"
        "profile projects projects"
        "links project3 project3"
        "tech project4 project4"
        "footer footer footer";

        .project1, .project2{
            display: none;
        }
    }

    @media(max-width: 826px) {
        grid-template-areas: 
        "profile"
        "links"
        "aboutMe"
        "tech"
        "projects"
        "project3"
        "project4"
        "footer";
        justify-content: center;
        align-content: center;
    }
`;

export const Footer = styled.footer`
    grid-area: footer;
    text-align: center;
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.521);
`;

import styled from "styled-components";

export const Container = styled.section`
    cursor: pointer;
    min-width: 300px;
    height: 300px;
    padding: 30px;

    display: grid;
    grid-template-areas: 
    "name name"
    "description description"
    "star-fork language";
    align-content: space-around;

    div{
        display: flex;
        align-items: center;
        gap: 10px;
    }

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

    .name{
        grid-area: name;
    }

    .description{
        grid-area: description;
    }

    .star-fork{
        grid-area: star-fork;
    }

    .star{
        margin-right: 10px;
    }

    .language{
        grid-area: language;
        justify-self: center;
    }
`;

export const colorLanguage = styled.div< {language: string} >`
    width: 15px;
    height: 15px;
    border-radius: 100%;

    background-color: ${ props => props.language === "JavaScript" ? "#F1E05A" : "#3178C6" };
    border: 1px solid ${ props => props.language === "JavaScript" ? "#DED372" : "#4A6F9F" };
`;
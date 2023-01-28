import styled from "styled-components";

export const Container = styled.section< {width: number} >`
    grid-area: aboutMe;

    padding: 30px;
    max-width: 960px;
    min-height: 200px;

    @media(max-width: 826px) {
        max-width: ${props => `${props.width}px`};
    }
`;

export const AboutMeContainer = styled.div`
    margin-top: 15px;

    p{
        line-height: 1.5;
    }

    & p:not(:last-of-type){
        margin-bottom: 15px;
    }
`;
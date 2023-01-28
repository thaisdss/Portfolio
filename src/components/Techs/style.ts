import styled from "styled-components";

export const Container = styled.section< {width: number} >`
    grid-area: tech;

    max-width: 400px;
    max-height: 350px;
    min-height: 250px;
    padding: 30px;

    h2{
        margin-bottom: 30px;
    }

    @media(max-width: 826px) {
        max-width: ${props => `${props.width}px`};

        display:grid;
        grid-template-areas: 
        "h2"
        "techs-container";

        h2{
            grid-area: h2;
            height: 20px;
            margin-bottom: 0px;
        }
    }

    @media(max-width: 660px) {
        min-height: 350px;
    }

    @media(max-width: 396px) {
        min-height: 600px;

        h2{
            margin-bottom: 30px
        }
    }
`;

export const TechsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;

    p{
        background-color: #CB92B1;
        color: black;
        padding: 15px;
        width: 120px;
        border-radius: 18px;
        text-align: center;
        font-weight: bold;
    }

    @media(max-width: 600px) {
        grid-area: techs-container;
        align-self: center;
    }
`;
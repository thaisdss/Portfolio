import styled from "styled-components";

export const Container = styled.section`
    grid-area: tech;

    max-width: 400px;
    max-height: 350px;
    min-height: 250px;
    padding: 30px;

    h2{
        margin-bottom: 30px;
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
`;
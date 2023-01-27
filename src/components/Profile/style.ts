import styled from "styled-components";

export const Container = styled.section`
    grid-area: profile;

    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 350px;

    img{
        width: 45%;
        border-radius: 100%;
        border: 2px solid rgb(0, 206, 41);
    }

    h1{
        margin: 30px 0px 5px 0px;
        font-size: 2em;
    }
`;
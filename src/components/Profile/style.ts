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

    @media(max-width: 826px) {
        min-width: 600px;

        img{
            width: 36%;
        }
    }

    @media(max-width: 660px) {
        min-width: 500px;
    }

    @media(max-width: 554px) {
        min-width: 400px;
    }

    @media(max-width: 444px) {
        min-width: 350px;
    }

    @media(max-width: 396px) {
        min-width: 300px;
    }

    @media(max-width: 344px) {
        min-width: 280px;
    }
`;
import styled from "styled-components";

export const Container = styled.section`
    grid-area: links;

    max-width: 400px;
    height: 300px;

    li{
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 30px;
    }
`;
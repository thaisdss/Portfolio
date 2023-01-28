import styled from "styled-components";

export const Container = styled.section< {width : number} >`
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

    @media(max-width: 826px) {
        min-width: ${ props => `${props.width}px` };

        li{
            justify-content: center;
        }
    }
`;
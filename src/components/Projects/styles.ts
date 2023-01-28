import styled from "styled-components";

export const Container = styled.section< {width: number} >`
    grid-area: projects;

    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    height: 90px;
    padding: 0px 30px;

    @media(max-width: 826px) {
        width: ${props => `${props.width}px`};
    }

    @media(max-width: 396px) {
        display: block;
        text-align: center;
        padding-top: 15px;
        
        p{
            margin-top: 15px;
        }
    }
`;
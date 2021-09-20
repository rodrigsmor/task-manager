import styled from 'styled-components';

export const ContainerSvg = styled.div`
    width: 50px;
    height: 50px;

    svg {
        width: 100%;
        height: 100%;
        fill: #E9FFF0;
        cursor: pointer;            
        
        g {
            transition: fill .5s ease;
            fill: #E9FFF0;
        }

        &:hover {
            g {
                fill: #DDC8C4;
            }     
        }
    }
`;
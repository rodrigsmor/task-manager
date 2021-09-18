import styled from 'styled-components';

export const HeaderComponent = styled.header`
    width: 100%;
    height: 4rem;
    display: flex;
    padding: 8px 30px;
    position: relative;
    align-items: center;
    background: transparent;
    justify-content: space-between;
`;

export const BoxTitle = styled.div`
    height: 100%;
    display: grid;
    width: fit-content;
    place-items: center;

    h1 {
        font-weight: 800;
        font-family: 'Raleway', sans-serif;
    }
`;

export const SectionUser = styled.div`
    height: 100%;
    display: flex;
    grid-gap: 50px;
    width: fit-content;
    align-items: center;
`;

export const ButtonIcon = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    display: grid;
    outline: none;
    cursor: pointer;
    font-size: 20pt;
    line-height: 0px;
    border-radius: 50%;
    background: #DDC8C4;
    place-items: center;

    &.userPhoto {
        width: 48px;
        height: 48px;
        background: #6B4D57;

        img {
            width: 90%;
            height: auto;
            border-radius: 50%;
        }
    }
`;
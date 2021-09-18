import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.div`
    height: 95%;
    width: 210px;
    display: flex;
    position: fixed;
    background: #13070c;
    border-radius: 30px;
    box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.5);
`;

export const NavbarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px;
    color: #EFF9F0;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`;

export const NavComponent = styled.nav`
    width: 90%;
    height: fit-content;

    ul {
        display: flex;
        grid-gap: 5px;
        flex-direction: column;

        li {
            padding: 5px;
            list-style: none;
            line-height: 35px;
            border-radius: 10px;
            transition: .3s linear;
            background: transparent;

            &:hover {
                background: rgba(239,249,240,0.05);
            }

            &:nth-of-type(1) {
                width: 125%;
                background: #EFF9F0;

                color: #13070c;
            }
        }
    }
`;

export const LinkTo = styled(Link)`
    color: #EFF9F0;
    display: flex;
    grid-gap: 10px;
    font-size: 18px;
    list-style: none;
    align-items: center;
    text-decoration: none;

    span {
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
    }
    
    &.selected {
        color: #13070c;
        font-weight: 600;

        span {
            color: #13070c;
        }
    }

`;

export const LogOut = styled.button`
    border: none;
    outline: none;
    padding: 10px;
    line-height: 0;
    color: #EFF9F0;
    cursor: pointer;
    font-size: 25px;
    border-radius: 15px;
    transition: .3s linear;
    background: transparent;

    &:hover {
        background: rgba(239,249,240,0.05);
    }
`;
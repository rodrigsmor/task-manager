import styled from 'styled-components';

export const FormContainer = styled.div`
    width: fit-content;
    height: fit-content;
`;

export const FormSearchBar = styled.form`
    display: flex;
    width: fit-content;
    background: #896a67;
    align-items: center;
    height: 30px;
    padding: 0px 0 0px 15px;
    border: solid 1px #6B4D57;
    border-radius: 35px;
`;

export const InputBox = styled.input`
    width: 250px;
    color: #EFF9F0;
    font-size: 15px;
    border: none;
    outline: none;
    background: transparent;

    &::-webkit-input-placeholder {
        color: #EFF9F0;
    }

    &::-webkit-search-cancel-button {
        display: none;
    }
`;

export const SearchButton = styled.button`
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
    margin-right: -5px;
`;
import {
    FormContainer,
    FormSearchBar,
    InputBox,
    SearchButton
}  from './styled';

import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
    return (
        <FormContainer>
            <FormSearchBar>
                <InputBox type="search" aria-label="realizar uma busca pelo site" placeholder="O que deseja buscar?"/>
                <SearchButton onClick={(click) => {
                        click.preventDefault();
                    }}>
                    <IoSearch />
                </SearchButton>
            </FormSearchBar>
        </FormContainer>
    );
}

export default SearchBar;
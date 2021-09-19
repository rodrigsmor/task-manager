import {
    HeaderComponent,
    BoxTitle,
    SectionUser,
    ButtonIcon
} from './styled';

import { VscBell } from 'react-icons/vsc';
import userPhoto from '../../img/user.jpg';
import SearchBar from '../../components/SearchBar';
import { PropsHeader } from '../../types/types'

const Header = (props: PropsHeader) => {
    return (
        <HeaderComponent>
            <BoxTitle>
                <h1>
                    {props.pageTitle}
                </h1>
            </BoxTitle>

            <SectionUser>
                <SearchBar />

                <ButtonIcon> 
                    <VscBell />
                </ButtonIcon>

                <ButtonIcon className="userPhoto">
                    <img src={userPhoto} alt="imagem de perfil do usuário" />
                </ButtonIcon>
            </SectionUser>
        </HeaderComponent>
    );
}

export default Header;
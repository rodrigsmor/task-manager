import {
    NavigationWrapper,
    NavbarContainer,
    NavComponent,
    LinkTo, 
    LogOut
} from './styled';

import LogoSvg from '../LogoSvg';
import { BiPlus } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { VscHome } from 'react-icons/vsc';
import { BsListNested } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';

const NavBar = () => {
    return (
        <NavigationWrapper>
            <NavbarContainer>
                <LogoSvg />

                <NavComponent>
                    <ul>
                        <li><LinkTo to="/" className="selected"> <VscHome /> <span> Home </span> </LinkTo></li>
                        <li><LinkTo to="/MyTasks"> <BsListNested /> <span> Minhas Tarefas </span> </LinkTo></li>
                        <li><LinkTo to="/"> <BiPlus /> <span> Adicionar </span> </LinkTo></li>
                        <li><LinkTo to="/"> <AiOutlineUser /> <span> Minha conta </span> </LinkTo></li>
                        <li><LinkTo to="/"> <IoSettingsOutline/> <span> Configuração </span> </LinkTo></li>
                    </ul>
                </NavComponent>

                <LogOut>
                    <FiLogOut />
                </LogOut>
            </NavbarContainer>
        </NavigationWrapper>
    );
}

export default NavBar;
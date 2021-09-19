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
import { PropsHeader } from '../../utils/types'

const NavBar = (props: PropsHeader) => {
    return (
        <NavigationWrapper>
            <NavbarContainer>
                <LogoSvg />

                <NavComponent>
                    <ul>
                        <li className={ props.nameClass === 'home' ? 'selected' : '' }>
                            <LinkTo to="/" > <VscHome /> <span> Home </span> </LinkTo></li>
                        <li className={ props.nameClass === 'mytask' ? 'selected' : '' }>
                            <LinkTo to="/MyTasks"> <BsListNested /> <span> Minhas Tarefas </span> </LinkTo></li>
                        <li>
                            <LinkTo to="/"> <BiPlus /> <span> Adicionar </span> </LinkTo></li>
                        <li className={ props.nameClass === 'account' ? 'selected' : '' }>
                            <LinkTo to="/"> <AiOutlineUser /> <span> Minha conta </span> </LinkTo></li>
                        <li className={ props.nameClass === 'configs' ? 'selected' : '' }>
                            <LinkTo to="/"> <IoSettingsOutline/> <span> Configurações </span> </LinkTo></li>
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
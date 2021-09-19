import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import MainHome from '../../components/MainHome';

import {
    PageSection,
    Container
} from '../generalStyled'

const Home: React.FC = () => {
    return (
        <>
            <PageSection>
                <NavBar nameClass='home'/>
                <Container>
                    <Header
                        pageTitle='Home' />
                    <MainHome />
                </ Container>
            </PageSection>
        </>
    );
}

export default Home;
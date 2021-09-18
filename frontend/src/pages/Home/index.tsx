import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import MainHome from '../../components/MainHome';

import {
    HomeSection,
    Container
} from './styled';

const Home: React.FC = () => {
    return (
        <>
            <HomeSection>
                <NavBar />
                <Container>
                    <Header />
                    <MainHome />
                </ Container>
            </HomeSection>
        </>
    );
}

export default Home;
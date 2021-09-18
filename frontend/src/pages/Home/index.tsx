import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import {
    HomeSection
} from './styled';

const Home: React.FC = () => {
    return (
        <>
            <HomeSection>
                <NavBar />
                <Header />
            </HomeSection>
        </>
    );
}

export default Home;
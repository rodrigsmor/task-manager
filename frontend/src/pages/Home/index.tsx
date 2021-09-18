import NavBar from '../../components/NavBar';
import {
    HomeSection
} from './styled';
// import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <HomeSection>
                <NavBar />
            </HomeSection>
        </>
    );
}

export default Home;
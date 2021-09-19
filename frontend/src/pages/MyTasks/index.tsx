import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import {
    PageSection,
    Container
} from '../generalStyled';

const MyTasks: React.FC = () => {
    return (
        <> 
            <PageSection>
                <NavBar nameClass='mytask'/>
                <Container>
                    <Header 
                        pageTitle='Minhas Tarefas'/>
                    
                </Container>
            </PageSection>
        </>
    );
}

export default MyTasks;
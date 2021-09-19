import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import ListTasks from '../../components/TaskList';

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
                    <ListTasks />
                </Container>
            </PageSection>
        </>
    );
}

export default MyTasks;
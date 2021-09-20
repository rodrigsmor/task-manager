import{
    MainContainer,
    TopSection,
    BottomSection,
    TableRecentTasks,
    TableStatistics
} from './styled';

import user from '../../img/user.jpg'
import Figure from '../../img/Rocket Boy.svg';
import { useEffect } from 'react';
import { getTasksPagination } from '../../store/Tasks/Task.actions';
import { useDispatch, useSelector } from 'react-redux';
// import { Tasks } from '../../store/Task/Task.types';

const MainHome = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasks);
    const loading = useSelector(state => state.tasks.loading);
    const error = useSelector(state => state.tasks.error);

    useEffect(() => {
        dispatch(getTasksPagination());
    }, [dispatch]);

    return (
        <MainContainer> 
            <TopSection>
                <div className="greetings">
                    <h1>Bem-vindo, Usuário!</h1>
                    <h3> É bom te ter de volta! </h3>
                </div>

                <img src={Figure} alt="imagem de um homem em cima de um foguete voando pelo espaço"/>
            </TopSection>

            <BottomSection>
                <div>
                    <h2> Tarefas Recentes </h2>

                    <div className="tableTask">
                        {tasks.loading && <h5>carregando...</h5>}
                        {
                            tasks.length > 0
                                && tasks.map((tasks) => (
                                    <TableRecentTasks key={tasks.id}>
                                        <img src={user} alt="imagem da tarefa" />

                                        <h4>{tasks.title}</h4>

                                        <h5 className={tasks.status}>{tasks.status}</h5>

                                        <button className="viewTask">
                                            Visualizar
                                        </button>
                                    </TableRecentTasks>
                                ))
                        }
                        {error && !loading && <p>{error}</p> }
                    </div>
                </div>

                <div className="statistics"> 
                    <h2>Estatísticas</h2>

                    <TableStatistics>
                        <div className="item">
                            <h5>Total de tarefas</h5>
                            <p>15</p>
                        </div>
                        <div className="item">
                            <h5>Tarefas feitas</h5>
                            <p>8</p>
                        </div>
                        <div className="item">
                            <h5>Tarefas a Fazer</h5>
                            <p>15</p>
                        </div>

                        <div className="graph">
                            <div>
                                <h5>Gráfico</h5>
                                <h5> 15% </h5>
                            </div>
                            <div className="">
                                <span></span>
                            </div>
                        </div>
                    </TableStatistics>
                </div>
            </BottomSection>
        </MainContainer>
    );
}

export default MainHome;
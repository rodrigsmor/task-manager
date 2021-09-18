import{
    MainContainer,
    TopSection,
    BottomSection,
    TableRecentTasks,
    TableStatistics
} from './styled';

import user from '../../img/user.jpg'
import Figure from '../../img/Rocket Boy.svg';

const MainHome = () => {
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
                        <TableRecentTasks>
                            <img src={user} alt="imagem da tarefa" />
        
                            <h4>Título da tarefa 1</h4>
        
                            <h5 className="FINALIZADO">FINALIZADO</h5>
        
                            <button className="viewTask">
                                Visualizar
                            </button>
                        </TableRecentTasks>
                        <TableRecentTasks>
                            <img src={user} alt="imagem da tarefa" />
        
                            <h4>Título da tarefa 1</h4>
        
                            <h5 className="FINALIZADO">FINALIZADO</h5>
        
                            <button className="viewTask">
                                Visualizar
                            </button>
                        </TableRecentTasks>
                        <TableRecentTasks>
                            <img src={user} alt="imagem da tarefa" />
        
                            <h4>Título da tarefa 1</h4>
        
                            <h5 className="PENDENTE">PENDENTE</h5>
        
                            <button className="viewTask">
                                Visualizar
                            </button>
                        </TableRecentTasks>
                        <TableRecentTasks>
                            <img src={user} alt="imagem da tarefa" />
        
                            <h4>Título da tarefa 1</h4>
        
                            <h5 className="FINALIZADO">FINALIZADO</h5>
        
                            <button className="viewTask">
                                Visualizar
                            </button>
                        </TableRecentTasks>
                        <TableRecentTasks>
                            <img src={user} alt="imagem da tarefa" />
        
                            <h4>Título da tarefa 1</h4>
        
                            <h5 className="PENDENTE">PENDENTE</h5>
        
                            <button className="viewTask">
                                Visualizar
                            </button>
                        </TableRecentTasks>
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
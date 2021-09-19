import {
    MainComponent,
    ListContainer,
    HeaderTable,
    ItemWrapper,
    ItemRow,
    PaginationSelector
} from './styled';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import user from '../../img/user.jpg';

const TaskList = () => {
    return (
        <MainComponent>
            <ListContainer>
                <HeaderTable>
                    <h2>Lista de tarefas</h2>

                    <div>
                        <button className="selected">Todas</button>
                        <button>Pendentes</button>
                        <button>Finalizadas</button>
                    </div>
                </HeaderTable>

                <ItemWrapper>
                    <ItemRow>
                        <img src={user} alt="imagem da tarefa" />

                        <h4>Título da tarefa 1</h4>

                        <h5 className="FINALIZADO">FINALIZADO</h5>

                        <button className="viewTask">
                            Visualizar
                        </button>
                    </ItemRow>
                    <ItemRow>
                        <img src={user} alt="imagem da tarefa" />

                        <h4>Título da tarefa 1</h4>

                        <h5 className="FINALIZADO">FINALIZADO</h5>

                        <button className="viewTask">
                            Visualizar
                        </button>
                    </ItemRow>
                    <ItemRow>
                        <img src={user} alt="imagem da tarefa" />

                        <h4>Título da tarefa 1</h4>

                        <h5 className="FINALIZADO">FINALIZADO</h5>

                        <button className="viewTask">
                            Visualizar
                        </button>
                    </ItemRow>
                    <ItemRow>
                        <img src={user} alt="imagem da tarefa" />

                        <h4>Título da tarefa 1</h4>

                        <h5 className="FINALIZADO">FINALIZADO</h5>

                        <button className="viewTask">
                            Visualizar
                        </button>
                    </ItemRow>
                    <ItemRow>
                        <img src={user} alt="imagem da tarefa" />

                        <h4>Título da tarefa 1</h4>

                        <h5 className="FINALIZADO">FINALIZADO</h5>

                        <button className="viewTask">
                            Visualizar
                        </button>
                    </ItemRow>
                    <ItemRow>
                        <img src={user} alt="imagem da tarefa" />

                        <h4>Título da tarefa 1</h4>

                        <h5 className="FINALIZADO">FINALIZADO</h5>

                        <button className="viewTask">
                            Visualizar
                        </button>
                    </ItemRow>
                </ItemWrapper>

                <PaginationSelector>
                    <button><IoIosArrowBack/></button>
                    <span>10</span>
                    <button><IoIosArrowForward/></button>
                </PaginationSelector>
            </ListContainer>
        </MainComponent>
    );
}

export default TaskList;
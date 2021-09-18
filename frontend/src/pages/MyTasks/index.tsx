import { Link } from 'react-router-dom';

const MyTasks = () => {
    return (
        <> 
            <h1>Minhas Tarefas</h1>

            <button>
                <Link to='/'>
                    Click on me
                </Link>
            </button>
        </>
    );
}

export default MyTasks;
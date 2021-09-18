import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MyTasks from './pages/MyTasks';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/mytasks' component={MyTasks} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
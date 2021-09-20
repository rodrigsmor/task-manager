import { combineReducers } from 'redux';
import taskReducer from './Task.reducer';

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;
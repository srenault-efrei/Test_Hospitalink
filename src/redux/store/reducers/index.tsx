import { combineReducers } from "redux";
import taskReducer from './task'
import { reducer as formReducer } from 'redux-form';


const rootReducers = combineReducers({
 task: taskReducer,
 form: formReducer
})

export default rootReducers
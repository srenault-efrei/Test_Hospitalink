import { createStore } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';


const composeEnchancers = composeWithDevTools({

});

const configureStore = () => {
    const store = createStore(
    rootReducer,
    [],
    composeEnchancers()
    );
    return store;
}

export default configureStore;
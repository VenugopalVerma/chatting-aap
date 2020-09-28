import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';


const configStore = () => {
    const store = createStore(rootReducer);

    return store;
}

const store = configStore();
export default store;
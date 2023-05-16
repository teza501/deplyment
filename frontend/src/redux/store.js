import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { jobDetailsReducer, loadJobReducer } from './reducers/jobReducer';
import { loadJobTypeReducer } from './reducers/jobTypeReducer';
import { userReducer } from './reducers/userReducer';

//combine reducers
const reducer = combineReducers({
    loadJobs : loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    jobDetails: jobDetailsReducer,
    user:userReducer,

});

//initial state
let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
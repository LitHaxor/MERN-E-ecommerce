import {combineReducers} from 'redux';

import RunsReducer from './RunsReducer.js';
import BallsReducer from './BallsReducer';
import OverReducer from './OverReducer';
import WicketReducer from './WicketReducer';
import setOverReducer from './setOverReducer';
const rootReducer = combineReducers({
    RunsReducer,
    BallsReducer,
    OverReducer,
    WicketReducer,
    setOverReducer
})

export default rootReducer;
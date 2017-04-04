//This is the store where we export each of the reducer

import { createStore } from 'redux';
import number from './redux/number';

export default createStore(number)
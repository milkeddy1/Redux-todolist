import { createStore } from 'redux'
import { dataReducer } from './reducer/data'

const store = createStore(dataReducer)

export default store
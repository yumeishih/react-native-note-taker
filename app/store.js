import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from 'Reducers'

const enhancerList = []
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension())
}

const composedEnhancer = compose(applyMiddleware(ReduxThunk), ...enhancerList)

export default () => createStore(rootReducer, {}, composedEnhancer)

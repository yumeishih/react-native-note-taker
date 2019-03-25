/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'
import App from 'Containers/appContainer'
import initStore from './store'

const store = initStore()

const NoteTaker = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default NoteTaker

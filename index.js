import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './todoListRedux'
const store = createStore(reducer)

// Import the App container component
import App from './App'

// Pass the store into the Provider
const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('App', () => AppWithStore)

import '../../styles/App.scss'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import { Layout } from '../Layout'

export function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

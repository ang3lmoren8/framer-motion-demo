import 'bootstrap-4-grid/css/grid.min.css'
import './App.css'
import loadable from './loadable'

const Home = loadable(() => import('./views/Home/Home.jsx'))

const App = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App

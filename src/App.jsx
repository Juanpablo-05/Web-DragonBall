import { useContext } from 'react'
import Card from './components/Card'
import Nav from './components/Nav'
import Paginate from './components/Paginate'
import { ApiContext } from './context/apiContext'
import CardPlanets from './components/CardPlanets'
function App() {

  const {dataType} = useContext(ApiContext)

  return (
    <>
      <Nav />
      <section className='section-card'>
        {
          dataType == 'characters' 
          ? <Card/> 
          : <CardPlanets/>
        }
      </section>
      <Paginate/>
    </>
  )
}

export default App

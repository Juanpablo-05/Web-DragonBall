import {useContext} from 'react'
import { ApiContext } from '../context/apiContext';
function CardPlanets() {
  const { items, dataFilter } = useContext(ApiContext);

  const displayItems = dataFilter.length > 0 ? dataFilter : items;

  return (
    <>
      {displayItems.map((item, index) => (
        <div key={index} className="card-container">
          <div className="img-con">
            <img src={item.image} alt="dragon ball img" className='img-planet'/>
          </div>

          <div className="description-contain">
            
            <div className="name-container">
              <h2 className='title-planet'>{item.name}</h2>
            </div>

            <div className="grup-container">
              <span className="title-card">Destroy:</span>
              <span className="des-card">{item.isDestroyed === true ? 'Yes' : 'No'}</span>
            </div>

            <div className="grup-container">
              <span className="title-card">description:</span>
              <span className="des-card des-card-planet">{item.description}</span>
            </div>

          </div>
        </div>
      ))}
    </>
  )
}

export default CardPlanets
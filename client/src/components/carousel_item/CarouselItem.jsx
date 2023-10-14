import './carouselitem.css';
import PropTypes from 'prop-types';

const CarouselItem = ({ item }) => {
  return (
    <div className='carousel-item'>
      <div></div>
      <img src={item.img} alt="" className='carousel-img' />
      <div className="carousel-details">
        <h1>{`"${item.quote}"`}</h1>
        <h3>- {item.name}</h3>
      </div>
    </div>
  )
}

export default CarouselItem;
CarouselItem.propTypes = {
  item: PropTypes.object.isRequired
}
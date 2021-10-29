import { BsCartPlus } from 'react-icons/bs';
import '../styles/tile.css';

const Tile = ({ name, image, price, id, handleSetCart, handleOpenAbout }) => {
  const submitToCart = e => {
    handleSetCart(e, {
      name: name,
      price: price,
      id: id,
      image: image,
    });
  };

  const openAbout = e => {
    e.preventDefault();
    handleOpenAbout(id);
  };

  return (
    <div className="cat-tile">
      <a onClick={openAbout} href="./about">
        <img src={image} alt="" value="About"></img>
      </a>
      <h2>{name}</h2>
      <h4>£{price}</h4>
      <div>
        <button data-value="add" onClick={submitToCart} className="tile-cart">
          <BsCartPlus />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Tile;

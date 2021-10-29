import { BsCartPlus } from 'react-icons/bs';

const Tile = ({ name, image, price, id, handleSetCart, handleOpenAbout }) => {
  const submitToCart = e => {
    e.preventDefault();

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
      <div className="tile-cart">
        <BsCartPlus data-value="add" onClick={submitToCart} />
        <span>Add to cart</span>
      </div>
    </div>
  );
};

export default Tile;

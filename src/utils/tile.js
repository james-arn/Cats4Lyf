import { BsCartPlus } from 'react-icons/bs';

const Tile = ({ name, image, price, id, handleSetCart }) => {
  const submitToCart = e => {
    e.preventDefault();

    handleSetCart(e, {
      name: name,
      price: price,
      id: id,
      image: image,
    });
  };
  return (
    <div className="cat-tile">
      <a href="./about">
        <img src={image} alt="" value="About"></img>
      </a>
      <h2>{name}</h2>
      <h3>£{price}</h3>
      <BsCartPlus data-value="add" onClick={submitToCart} />
    </div>
  );
};

export default Tile;

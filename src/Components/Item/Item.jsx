import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={() => window.scrollTo(0, 0)} />
      </Link>
      <Link
        to={`/product/${props.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <p>{props.name}</p>
      </Link>
      <div className="item-prices">
        <div className="item-price">
          <div className="item-price-new">${props.new_price}</div>
          <div className="item-price-old">${props.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;

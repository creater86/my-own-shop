import Mendata from "./MenData.json";
import womendata from "./WomenData.json";
import "./Main.css";
import Star from "./Star";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Main() {
  const navigation = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log(query,query.get("se"))
  const search = query.get("search") || "";
  const product = search ? [...womendata, ...Mendata] : Mendata;
  const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );
  const handelClick = (item) => {
    navigation(`/Product/${item.id}`);
  };

  return (
    <>
      <h2 className="collection-title"> Collection</h2>
      <div className="Product-Container">
        {filteredProducts.length === 0 ? (
          <h1 className="no-result">Product Not Found</h1>
        ) : (
          filteredProducts.map((item) => (
            <div className="PathSlider" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                onClick={() => handelClick(item)}
              />
              <h3 className="para">{item.title}</h3>
              <p className="para">{`Price: ₹${item.price}`}</p>
              <Star />
            </div>
          ))
        )}
        ;
      </div>

      <div></div>
    </>
  );
}

export default Main;

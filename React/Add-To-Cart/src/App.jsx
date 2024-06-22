import Item from "./components/Item";
import Cart from "./components/Cart";
import "./index.css";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        <Item
          name="Macbook"
          price={20000}
          url="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <Item
          name="iPhone"
          price={1000}
          url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781"
        />
        <Item
          name="AirPods"
          price={200}
          url="https://www.jiomart.com/images/product/original/rvgu4opiar/karimotech-airpods-pro-wireless-mobile-bluetooth-compatible-with-all-android-ios-devices-airpod-product-images-orvgu4opiar-p599113178-0-202303070858.jpg?im=Resize=(1000,1000)"
        />
      </div>
      <div className="w-full flex justify-center mt-8">
        <Cart />
      </div>
    </div>
  );
};

export default App;

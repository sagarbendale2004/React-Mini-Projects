import "./App.css";
import Card from "./Components/Card";

function App() {
  let img1 =
    "https://images.pexels.com/photos/20441501/pexels-photo-20441501/free-photo-of-a-woman-sitting-on-a-red-bench-in-front-of-a-construction-site.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  let img2 =
    "https://images.pexels.com/photos/23644605/pexels-photo-23644605/free-photo-of-a-woman-standing-by-the-water-in-front-of-houses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  let img3 =
    "https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <>
      <div className="flex gap-10">
        <Card username={"Bella"} imgPath={img1}/>
        <Card username={"Marganita"} imgPath={img2} />
        <Card username={"Sam"} imgPath={img3} />
      </div>
    </>
  );
}

export default App;

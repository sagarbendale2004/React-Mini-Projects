import List from "../Components/List";
import Navbar from "../Components/Navbar";
import Heading from "../Components/Heading";
import Footer from "../Components/Footer";

function NetflixDemo() {
  return (
    <div className="w-full flex flex-col bg-black text-gray-400">
      <div className="flex-grow">
        <Navbar />
        <Heading />
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default NetflixDemo;

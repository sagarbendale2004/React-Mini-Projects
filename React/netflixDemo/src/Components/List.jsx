import seriesData from "../api/seriesData.json";
import Li from "../Components/Li";

function List() {
  return (
    <div className="w-[96rem] mx-auto">
      <h1 className="text-3xl font-mono py-12 text-gray-400">
        Trending Movies :
      </h1>
      <ul className="grid grid-cols-4 mb-4 gap-4">
        {seriesData.map((item) => {
          return <Li key={item.id} items={item} />;
        })}
      </ul>
    </div>
  );
}

export default List;


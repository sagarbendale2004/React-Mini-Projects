import seriesData from "../api/seriesData.json";
import Li from "../Components/Li";

function List() {
  return (
    <ul className="flex gap-8 justify-center mb-8">
      {seriesData.map((item) => {
        return <Li key={item.id} items={item} />;
      })}
    </ul>
  );
}

export default List;

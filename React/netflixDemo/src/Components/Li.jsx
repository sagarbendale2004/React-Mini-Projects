// eslint-disable-next-line react/prop-types
function Li({ items: { url, title, genre, rating, description } }) {
  return (
    <li className="w-[320px] max-h-min bg-gray-800 rounded-2xl border-2 border-gray-600 p-3">
      <img className="h-48 w-80 rounded-2xl" src={url} alt="new image" />
      <h2 className="py-2 text-xl font-sans">Title : {title}</h2>
      <h2 className="pb-2 text-lg">Genre : {genre}</h2>
      <h2 className="text-lg">Rating : {rating}</h2>
      <p className="text-lg py-2 text-wrap">Description : {description}</p>
    </li>
  );
}

export default Li;

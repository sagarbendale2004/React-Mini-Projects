// eslint-disable-next-line react/prop-types
function Li({ items: { url, title, genre, rating, description, watchUrl } }) {
  function handleClick() {
    window.open(watchUrl, "_blank", "noopener,noreferrer");
  }

  let rate = rating >= 8.5 ? "superHit" : "average";

  return (
    <li className="w-[350px] max-h-min bg-gray-800 rounded-xl border-2 border-gray-600 p-3">
      <img className="h-48 w-full rounded-2xl" src={url} alt="new image" />
      <h2 className="py-2 text-xl font-sans font-bold">Title : {title}</h2>
      <h2 className={`text-lg font-bold pb-2`}>
        Rating : <span className={`rating ${rate}`}>{rating}</span>
      </h2>
      <h2 className="text-lg ">Genre : {genre}</h2>
      <p className="text-lg py-2 text-wrap">Description : {description}</p>
      <button
        className={`py-2 w-full bg-slate-700 ${rate}`}
        onClick={handleClick}
      >
        Watch Now
      </button>
    </li>
  );
}

export default Li;

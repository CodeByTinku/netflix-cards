import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <>
      {seriesData.map((curElem) => (
        <div className="mainDiv" key={curElem.id}>
          <div className="imgContainer">
            <img src={curElem.img_url} alt="Image can't be loaded" className="seriesImg" />
          </div>
          <h2 className="seriesName">Name: {curElem.name}</h2>
          <h3 className="seriesRating">Rating: {curElem.rating}</h3>
          <p className="seriesSummary"><strong>Summary:</strong> {curElem.description}</p>
          <p className="seriesGenre"><strong>Genre:</strong> {curElem.genre}</p>
          <p className="seriesCast"><strong>Cast:</strong> {curElem.cast}</p>
          <a href={curElem.watch_url} target="_blank" rel="noopener noreferrer">
            <button className="watchBtn">Watch Now</button>
          </a>
        </div>
      ))}
    </>
  );
};

export default NetflixSeries;
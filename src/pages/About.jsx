import countryData from "../api/countryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h1 className="container-title">
        Here are the Intresting Facts <br /> we're proud of
      </h1>

      <div className="gradient-cards">
        {countryData.map((curEle) => {
          const { id, countryName, capital, population, interestingFacts } =
            curEle;

          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Intresting Facts: </span>
                  {interestingFacts}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

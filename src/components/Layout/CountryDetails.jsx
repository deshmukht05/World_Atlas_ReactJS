import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Loader } from "../UI/Loader";
import { getCountryApi, getCountryIndApi } from "../../api/postApi";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndApi(params.id);
      console.log(res.data[0]);

      setCountry(res.data[0]);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />

            <div className="country-content">
              <p className="card-title">{country.name.common}</p>

              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description">Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description">Capital: </span>
                  {country.capital[0]}
                </p>
                <p>
                  <span className="card-description">Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description">Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curEle) => country.currencies[curEle].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((curEle) => country.languages[curEle])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

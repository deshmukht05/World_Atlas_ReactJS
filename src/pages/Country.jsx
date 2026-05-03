import { useEffect, useState, useTransition } from "react";
import { getCountryApi } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  // Search filter
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryApi();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // Search Logic
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  // Filter Logic
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return filter.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country),
  );

  return (
    <section className="country-section">
      {/* Search Filter */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curEle, index) => {
          return <CountryCard key={index} data={curEle} />;
        })}
      </ul>
    </section>
  );
};

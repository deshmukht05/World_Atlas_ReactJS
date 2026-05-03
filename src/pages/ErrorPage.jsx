import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  
  return (
    <>
      <h1>Oops! An error occured.</h1>
      <p>{error && error.data}</p>
      <NavLink to="/">
        <button>Go Home</button>
      </NavLink>
    </>
  );
};

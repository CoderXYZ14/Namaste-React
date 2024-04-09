import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Error occured</h2>
      <h3>{err.status} Not found</h3>
    </div>
  );
};
export default Error;

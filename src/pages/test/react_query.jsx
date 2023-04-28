import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const ReactQuery = () => {
  const { isLoading, error, data } = useQuery("randomData", () =>
    fetch("https://random-data-api.com/api/v2/users").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const { address, first_name, last_name, date_of_birth } = data;
  console.log(data);

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div>
      name :{" "}
      <span>
        {first_name} {last_name}
      </span>
      <p> DOB : {date_of_birth}</p>
      <p>City : {address.city}</p>
      <button
        onClick={goHome}
        className="px-5 py-1 text-white rounded-full bg-slate-500 hover:bg-slate-100 hover:text-black"
      >
        Home
      </button>
    </div>
  );
};

function Example() {}
export default ReactQuery;

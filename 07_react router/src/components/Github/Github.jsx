import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


export default function Github() {
    const data =useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/Vicky-7875`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 p-4 text-3xl">
      {" "}
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export const gitHubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/Vicky-7875`);
  return response.json();
};

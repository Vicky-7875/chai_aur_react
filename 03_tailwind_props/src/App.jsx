import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);

  // let myobj = { username: "vivek", age: 31 };
  // let newArr =[1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-3">
        Tailwind Test
      </h1>
      {/* <Card channel="chai aur code" somObj={myobj} /> */}
      <Card username="vivek tondare"  btnText='click me'/>
      <Card username="SUrbhi tondare"/>
    </>
  );
}

export default App;

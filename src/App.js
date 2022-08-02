import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [DatailsLoaded, setDatailsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setDatailsLoaded(true);
      });
  });

  return (
    <div className="App">
      <h1>API Task 1 </h1>{" "}
      {items.map((item) => (
        <div className="users">
          {" "}
          <ol key={item.id}>
            <h2> userName: {item.username}</h2>
            <span>
              Full_Name: {item.name}
              <br />
              Email: {item.email}
              <br />
              <span>
                Address:{item.address.suite}, {item.address.street},
                {item.address.city}
              </span>
              <p>Phone: {item.phone}</p>
              <span>Works at: {item.company.name}</span>
            </span>
          </ol>
        </div>
      ))}
    </div>
  );
}

export default App;

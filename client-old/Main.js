import axios from "axios";
import React, { useEffect, useState } from "react";

// get => '/api/authors => [{id, name}, {id, name}]
// onMount get data
const Main = () => {
  const [count, setCount] = useState(0);
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    const getAuthors = async () => {
      // axios takes the json and converts to js object for us
      try {
        let res = await axios.get("/api/authorssdfsd");
        console.log(res.data);
        setAuthors(res.data);
      } catch (err) {
        alert("err");
        console.log(err);
      }
    };
    getAuthors();
  }, []);
  const renderAuthors = () => {
    if (!authors) {
      return <p>authors not loaded yet todo spinner here</p>;
    }
    return authors.map((a) => {
      return (
        <div className="comp" key={`author-${a.id}`}>
          <h1>{a.name}</h1>
          <p>{a.id}</p>
        </div>
      );
    });
  };
  return (
    <div id="main" className="row container">
      <h1>Amayoz</h1>
      <p>count: {count}</p>
      <p onClick={() => setCount(count + 1)}>add</p>
      {renderAuthors()}
    </div>
  );
};

export default Main;

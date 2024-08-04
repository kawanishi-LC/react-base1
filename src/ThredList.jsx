import { useState, useEffect } from "react";

export const ThredList = () => {

  const [threds, setThreds] = useState([]);

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=1`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setThreds(data)
      });
  }, []);

  return (
    <>
      <div className="thredList">
        <div className="container">
          <h3>新着スレッド</h3>
          <ul>
            {threds.map((threds) => {
              return (              
                <li key={threds.id}>{threds.title}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ThredList;

import { useState, useEffect } from "react";

export const Home = () => {

  const [threds, setThreds] = useState([]);

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=1`)
      .then((res) => res.json())  //格納データは配列
      .then((data) => {
        console.log(data);
        setThreds(data)
      });
  }, []);

  return (
    <>
      <div className="contents">
        <div className="container">
          <h3>新着スレッド</h3>
          <ul>
            {threds.map((threds) => {
              return (              
                <li className="listthreds" key={threds.id}>{threds.title}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

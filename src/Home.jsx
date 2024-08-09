import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();
  const [threds, setThreds] = useState([]);

  useEffect(() => {
	  const fetchData = async () => {
		  try {
				const response = await axios.get(`https://railway.bulletinboard.techtrain.dev/threads?offset=0`);			
			  setThreds(response.data);  //格納データは配列
        console.log(response.data)
		  } catch (error) {
			  console.log(error);
		  }
	  };
	  fetchData();
  }, []);

  return (
    <>
      <div className="contents">
        <div className="container">
          <h3>新着スレッド</h3>
          <ul>
            {threds.map((threds) => {
              return (
                <li
                  className="listthreds"
                  key={threds.id}
                  onClick={() => navigate(`/threads/${threds.id}`)}
                >
                  {threds.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

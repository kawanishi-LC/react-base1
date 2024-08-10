import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {

  const navigate = useNavigate();
  const [threads, setThreads] = useState([]);

  useEffect(() => {
	  const fetchData = async () => {
		  try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads?offset=0`
        );
        console.log(response.data); //レスポンスデータは配列
        setThreads(response.data);

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
            {threads.map((thread) => {
              return (
                <li
                  className="listthreds"
                  key={thread.id}
                  onClick={() => navigate(`/threads/${thread.id}`)}
                >
                  {thread.title}
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

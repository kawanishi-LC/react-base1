import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Home = () => {

  const navigate = useNavigate();
  const [threads, setThreads] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
	  const fetchData = async () => {
		  try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads?offset=${pageIndex}`
        );
        console.log(response.data); //レスポンスデータは配列
        setThreads(response.data);

      } catch (error) {
			  console.log(error);
		  }
	  };
	  fetchData();
  }, [pageIndex]);

  return (
    <>
      <div className="contents">
        <div className="container">
          <h3>新着スレッド</h3>
          <ul>
            {threads.map((thread) => {
              return (
                <li
                  className="listthreads"
                  key={thread.id}
                  onClick={() => navigate(`/threads/${thread.id}`)}
                >
                  {thread.title}
                </li>
              );
            })}
          </ul>
          <div className="navi">
            <button className="pagebtn" onClick={() => setPageIndex(pageIndex - 10)}>前の10件</button>
            <button className="pagebtn" onClick={() => setPageIndex(pageIndex + 10)}>次の10件</button>
            <button className="pagebtn" onClick={() => setPageIndex(0)}>最初に戻る</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import { useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";

export const Thred = () => {

  const location = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads/${threds.id}/posts?offset=0`
        );
        setPosts(response.data); //格納データはオブジェクト
        console.log(response.data);
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
          <h3>投稿一覧</h3>
          <ul>
            {posts.map((posts) => {
              return (
                <li className="listposts" key={posts.id}>{posts.post}</li>
              );
            })}
          </ul>
        </div>
        <div className="container2">          
        </div>
      </div>
    </>
  );

};

export default Thred;

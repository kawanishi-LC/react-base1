import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Thread = () => {

  const { thread_id } = useParams();
  const navigate = useNavigate();
  const [threadPosts, setThreadPosts] = useState([]);
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=0`
        );
        console.log(response.data); //レスポンスデータはオブジェクト（postsは配列）
        const posts = response.data.posts.map((post) => ({
          id: post.id,
          post: post.post,
        }));
        console.log(posts);
        setThreadPosts(posts);        

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
        {
          post: post,
        }
      );
      console.log(response.data);
      navigate(`/threads/${thread.id}`);
      
    } catch (error) {
      console.log(error);
    }
  };
  
  const onClickTop = () => {
      navigate("/");
  };

  return (
    <>
      <div className="contents">
        <div className="container">
          <h3>コメント投稿</h3>
          <form onSubmit={handleSubmit}>
            <input
              className="inputpost"
              type="text"
              value={post}
              onChange={(e) => setPost(e.target.value)}
              required
            />
            <input className="inputcreate" type="submit" value="投稿" />
          </form>
        </div>
        <div className="container">
          <h3>投稿一覧</h3>
          <ul>
            {threadPosts.map((post) => {
              return (
                <li className="listposts" key={post.id}>
                  {post.post}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navi">
          <button onClick={onClickTop}>Topに戻る</button>
        </div>
      </div>
    </>
  );

};

export default Thread;

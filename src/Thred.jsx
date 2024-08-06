import { useState ,useEffect} from "react";

export const Thred = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/57784d6a-e92c-4a6b-81a8-c1b68c0aabff/posts?offset=1`)
      .then((res) => res.json())  //格納データはオブジェクト
      .then((data) => {
        console.log(data.threadId);
        console.log(data.posts);
        setPosts(data.posts);
      });
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

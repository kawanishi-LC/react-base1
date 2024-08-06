import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateThred = () => {

  const [title,setTitle] = useState("スレッドタイトル")

  const handleSubmit = (e) => {
    e.preventDefault();  //作成押下後の再読み込みを止める
    axios
      .post("https://railway.bulletinboard.techtrain.dev/threads", {
        title: title
      })
      .then((res) => {
        console.log(res.data);          
      })
      .catch((err) => {
        console.log(err);
      });
    setTitle("スレッドタイトル");
  };

  const navigate = useNavigate();
  
  const onClickTop = () => {
    navigate("/");
  };

  return (
    <>
      <div className="contents">
        <div className="container">
          <h3>スレッド新規作成</h3>
          <form onSubmit={handleSubmit}>
            <input
              className="inputtitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input className="inputcreate" type="submit" value="作成" />
          </form>
        </div>
        <div className="navi">
          <button onClick={onClickTop}>Topに戻る</button>
        </div>
      </div>
    </>
  );
};

export default CreateThred;

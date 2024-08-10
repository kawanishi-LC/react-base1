import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateThread = () => {

  const navigate = useNavigate();
  const [title,setTitle] = useState("スレッドタイトル")

  const handleSubmit = async (e) => {
    e.preventDefault();  //作成押下後の再読み込みを止める
		try {
    	const response = await axios.post(
        "https://railway.bulletinboard.techtrain.dev/threads",
        {
          title: title,
        }
      );
      console.log(response.data)
      navigate("/");
      
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

export default CreateThread;

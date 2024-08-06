import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <h2>掲示板</h2>
        </div>
        <div>
          <Link to={`/threads/new`}>スレッドをたてる</Link>
        </div>
      </header>
    </>
  );
};

export default Header;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo.png";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <div className="logo">
        {/* <img src={Logo} alt="Logo"></img> */}
        <span className="gap"></span>
        <h1>Waves</h1>
      </div>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <span className="gap"></span>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;

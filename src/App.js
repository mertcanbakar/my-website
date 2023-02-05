import { Link } from "react-scroll";
//ICONS
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn} from "react-icons/fa";
//COMPONENTS
import Welcome from "./Components/Welcome";
import MyAbout from "./Components/MyAbout";
import MyRepos from "./Components/MyRepos";
import Contact from "./Components/Contact";
function App() {

  return (
    <>
      <div className="header-container">
        <nav className="header">
          <span>
            <a href="/" className="navbar-logo">
              MCB
            </a>
          </span>
          <div className="nav-items">
            <div className='nav-links'>
              <Link to="home" spy={true} smooth={true} offset={0} duration={500}>HOME</Link>
              <Link to="about" spy={true} smooth={true} offset={-200} duration={500}>ABOUT</Link>
              <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>PROJECTS</Link>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>CONTACT</Link>
            </div>
            <div className="icons">
              <a href="#">
                <AiOutlineTwitter />
              </a>
              <a href="#">
                <AiFillGithub />
              </a>
              <a href="#">
                <FaLinkedinIn size={"13px"} />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <Welcome/>
      <MyAbout/>
      <MyRepos/>
      <Contact/>
    </>
  );
}

export default App;

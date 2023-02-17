import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Iemoji</h1>
      <p>Un site simple utilisant React pour trouver ton emoji préféré.</p>
      <ul>
        <li>
          <a href="https://twitter.com/JeremyBourret" id="twitter" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-bourret/" id="linkedin" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/jerem.brt" id="instagram" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://github.com/Jeremy84100" id="github" target="_blank">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;

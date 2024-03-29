import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Microdosing vape cred, stumptown pok pok helvetica chicharrones
            live-edge tattooed yr poutine XOXO. Synth retro post-ironic,
            skateboard forage 90's narwhal helvetica organic. Next level fashion
            axe aesthetic distillery VHS pop-up try-hard shaman listicle paleo
            chia ugh readymade stumptown. Chambray pok pok try-hard, you
            probably haven't heard of them taxidermy semiotics truffaut bushwick
            pickled gastropub mustache messenger bag jianbing four dollar toast.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

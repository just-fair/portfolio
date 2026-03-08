import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const nameBanner = [
  "     _                 _                 ____                       _             ",
  "    | | __ _ ___ _ __ | |__   ___ _ __  / ___|  ___ _ __ __ _ _   _(_)_ __   __ _ ",
  " _  | |/ _` / __| '_ \\| '_ \\ / _ \\ '__| \\___ \\ / _ \\ '__/ _` | | | | | '_ \\ / _` |",
  "| |_| | (_| \\__ \\ |_) | | | |  __/ |     ___) |  __/ | | (_| | |_| | | | | | (_| |",
  " \\___/ \\__,_|___/ .__/|_| |_|\\___|_|    |____/ \\___|_|  \\__, |\\__,_|_|_| |_|\\__,_|",
  "                 |_|                                        |_|                     ",
].join("\n");

const nameBannerMobile = [
  "     _                 _                  ",
  "    | | __ _ ___ _ __ | |__   ___ _ __    ",
  " _  | |/ _` / __| '_ \\| '_ \\ / _ \\ '__|   ",
  "| |_| | (_| \\__ \\ |_) | | | |  __/ |      ",
  " \\___/ \\__,_|___/ .__/|_| |_|\\___|_|      ",
  "/ ___|  ___ _ __|_| _ _   _(_)_ __   __ _ ",
  "\\___ \\ / _ \\ '__/ _` | | | | | '_ \\ / _` |",
  " ___) |  __/ | | (_| | |_| | | | | | (_| |",
  "|____/ \\___|_|  \\__, |\\__,_|_|_| |_|\\__,_|",
  "                   |_|                    ",
].join("\n");

function HeroSection() {
  return (
    <section className="hero">
      <p className="prompt-line">$ whoami</p>
      <pre className="name-banner name-banner-desktop" aria-label="Name banner">
        {nameBanner}
      </pre>
      <pre className="name-banner name-banner-mobile">{nameBannerMobile}</pre>

      <p className="role">Jaspher Serquiña · Software Developer</p>

      <TypeAnimation
        sequence={[
          "$ cat skills.txt",
          900,
          "React, Django, PostgreSQL, APIs, Automation",
          1400,
          "$ cat focus.txt",
          900,
          "Building useful products with clear UX and reliable backend systems.",
          1400,
        ]}
        speed={50}
        repeat={Infinity}
        className="type-output"
      />

      <div className="contact">
        <a href="mailto:jsphr.serquina@gmail.com">
          <MdEmail size="1.1rem" />
          <span>Email</span>
        </a>
        <a href="https://github.com/just-fair" target="_blank" rel="noreferrer">
          <FaGithub size="1.1rem" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/just-fair"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size="1.1rem" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;

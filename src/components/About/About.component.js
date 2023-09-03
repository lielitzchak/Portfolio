import AboutBottomPicturersComponent from "./AboutBottomPicturersComponent";

export default function About() {
  return (
    <div className="About information">
      <div className="AboutUp">
        <section className="AboutMe">
          <h1> I am a full-stack developer.</h1>
          <p>
            Some of my passions include problem solving, coding, and thinking
            outside the box.
          </p>
          <p>
            I am a well-organized, independent employee (also an excellent team
            player) with a high level of attention to detail. A fan of
            Powerlifting, TV series, anime, and books that are related to
            personal development, career advancement, and interpersonal
            relationships.
          </p>
          <p>
            Whenever I'm not coding, you can find me at the gym, learning
            Amharic, or looking for interesting videos on TED.
          </p>
        </section>
        <div className="pictureOfMe">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHc4WsCx9L49g/profile-displayphoto-shrink_800_800/0/1642848341301?e=1675900800&v=beta&t=zsPVh-6P9zqLuRgJuiv3_RvaN1DE8HGq6TjKr4ZkMgE"
            alt="my profile on linkedin"
          />
        </div>
      </div>
      <div className="RandomFacts">
        <h1>Random facts</h1>
        <p>
          I drink a lot of tea I'm into powerlifting nail contractor is my zen
          time I'm a bit of a clean freak I'm slightly addicted to Netflix
          spiderMan is my mentor
        </p>
      </div>
    </div>
  );
}

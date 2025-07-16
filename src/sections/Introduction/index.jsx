import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1_dC5auNY2tL3deRcrb1wqA8p5GKPgl9u/view?usp=sharing",
      "_blank",
    );
  };
  return (
    <IntroComp>
      <h3 className="my-name-is lazy-load">Hi, my name is</h3>
      <h1 className="name lazy-load">Mounika Moram</h1>
      <h2 className="desg lazy-load">
        {"<>"}Fullstack Developer {"</>"}
      </h2>
      <p className="description lazy-load">
        Fullstack Developer, with a good understanding of ReactJS and the
        front-end eco-system, eagerly looking for good opportunities to learn
        and grow.
        <br />
      </p>
      <Button
        className="lazy-load"
        css={BtnStyle}
        text={"View Resume"}
        onClick={onViewResume}
      />
    </IntroComp>
  );
}

export default Introduction;

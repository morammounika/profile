import { useEffect, useRef, useState } from "react";

import { SkillSection, SkillContent, SkillGrid, GridItem } from "./styles";

import skillData from "./data";

import useOnIntersect from "../../hooks/intersection";
import { Header } from "../Experience/styles";

function Skills() {
  const skillRef = useRef(null);
  const show = useOnIntersect(skillRef);
  const [active, setActive] = useState(0);
  const hoverIdRef = useRef(null);
  const onMouseEnter = (id) => {
    hoverIdRef.current = id;
    setActive(id);
  };
  const onMouseLeave = () => {
    hoverIdRef.current = null;
  };
  useEffect(() => {
    if (!show) return;
    const totalSkills = skillData.length;
    const timerId = setInterval(() => {
      if (hoverIdRef?.current !== null) return;
      setActive((oldActive) => {
        if (oldActive === totalSkills - 1) {
          return 0;
        }
        return oldActive + 1;
      });
    }, 1500);
    return () => {
      clearInterval(timerId);
    };
  }, [show]);

  return (
    <SkillSection
      ref={skillRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="skills"
    >
      <Header>Skills</Header>
      <SkillContent>
        <SkillGrid>
          {skillData.map((skill, index) => (
            <GridItem
              className={`grid-item-${index + 1}`}
              key={"skill-" + index}
            >
              <div
                className={`item-wrpper ${active === index ? "active" : ""}`}
                onMouseEnter={() => onMouseEnter(index)}
                onMouseLeave={() => onMouseLeave()}
              >
                <img src={skill.image} alt={skill.name} className="skill-img" />
                <span className="skill-name">{skill.name}</span>
              </div>
            </GridItem>
          ))}
        </SkillGrid>
      </SkillContent>
    </SkillSection>
  );
}

export default Skills;

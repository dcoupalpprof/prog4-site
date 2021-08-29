import React, {useState} from "react";
import classes from "./Features.module.scss";
import Feature from "./Feature/Feature";

const Features = () => {
  const [features] = useState([
    { key: 1, name: "Notes de cours", link: "/cours", info: "Info about", icon: 'pi-file' },
    { key: 2, name: "Travaux", link: "/travaux", info: "Info about", icon: 'pi-inbox' },
    { key: 3, name: "Références", link: "/references", info: "Info about", icon: 'pi-info-circle' }
  ]);

  return (
    <ul className={classes.Features}>
      {features.map(obj => (
        <Feature key={obj.key} name={obj.name} link={obj.link} icon={obj.icon}/>
      ))}
    </ul>
  );
};

export default Features;

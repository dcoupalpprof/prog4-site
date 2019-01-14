import React from "react";
import classes from "./Features.module.scss";
import Feature from "./Feature/Feature";

class Features extends React.Component {
  state = {
    features: [
      { key: 1, name: "Notes de cours", link: "/cours", info: "Info about", icon: 'pi-file' },
      { key: 2, name: "Travaux", link: "/references", info: "Info about", icon: 'pi-inbox' },
      { key: 3, name: "Références", link: "/references", info: "Info about", icon: 'pi-info-circle' }
    ]
  };

  render() {
    return (
      <ul className={classes.Features}>
        {this.state.features.map(obj => (
          <Feature key={obj.key} name={obj.name} link={obj.link} icon={obj.icon}/>
        ))}
      </ul>
    );
  }
}

export default Features;

import React from "react";
import { render } from "react-dom";

const Root = () => {
  return <>Hi there boy { drupalSettings.react_bootstrap.settings ?? '' }</>;
};

render(<Root />, document.getElementsByTagName("article")[0]);

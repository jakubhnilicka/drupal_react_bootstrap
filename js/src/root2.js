import React from "react";
import { render } from "react-dom";

const Root2 = () => {
  return <>Hi there grrrrlz { drupalSettings.react_bootstrap.settings ?? '' }</>;
};

render(<Root2 />, document.getElementById("block-seven-page-title"));

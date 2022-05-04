import React from "react";
import PropTypes from "prop-types";

Hero.propTypes = {
  name: PropTypes.string,
};

function Hero({ name = "" }) {
  console.log("Hero render: ", name);

  return <div>Hero name: {name}</div>;
}

export default React.memo(Hero);

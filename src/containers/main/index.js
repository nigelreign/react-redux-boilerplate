import React from "react";
import { connect } from "react-redux";

import getServicesRoutine, {
  getRatesRoutine
} from "./routines";

function Main(props) {
  return (
    <>
      {" "}
      <h1>My Redux Boiler Plate</h1>
    </>
  );
}

Main.defaultProps = {
  services: [],
  rates: {},
};

Main.propTypes = {};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getServices: () => dispatch(getServicesRoutine.trigger({})),
    getRates: (amount) => dispatch(getRatesRoutine.trigger({ amount })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

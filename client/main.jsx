import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import HelloMeteor from "/imports/ui/HelloMeteor";

Meteor.startup(() => {
  render(<HelloMeteor />, document.getElementById("app"));
});

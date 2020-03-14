import React from "react";
import { Card } from "@material-ui/core";

const Block = ({ children }) => {
  return <Card style={{ padding: "10px", margin: "10px 0" }}>{children}</Card>;
};

export default Block;

import React from "react";
import css from "./container.module.css";

export default ({ children }) => (
  <div className={css.container}>{children}</div>
);

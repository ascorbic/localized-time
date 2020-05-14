import React from "react";
import { LocalizedTime } from "../src";

export const App: React.FC = () => (
  <p>
    Hello, the time will be{" "}
    <LocalizedTime dateTime="2020-05-14T09:22:20.567Z">2pm</LocalizedTime>
  </p>
);

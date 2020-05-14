import React from "react";
import { LocalizedTime } from "../src";

export const App: React.FC = () => (
  <p>
    Hello, the time will be{" "}
    <LocalizedTime dateTime="1 June 2020 09:00 PST">2pm</LocalizedTime>
  </p>
);

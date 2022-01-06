import * as dotenv from "dotenv";

import "./styles.css";
import { render } from "react-dom";

import "antd/dist/antd.css";

import { App } from "./App";

dotenv.config();
const rootElement = document.getElementById("root");
render(<App />, rootElement);

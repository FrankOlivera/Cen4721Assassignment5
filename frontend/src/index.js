import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Header from "./components/header";
import TEXT_BOXES from "./components/text_boxes";
import Formbutton from "./components/formbutton";

ReactDOM.render(<TEXT_BOXES />, document.getElementById("english_box"));
ReactDOM.render(<Formbutton />, document.getElementById("spanish_box"));
ReactDOM.render(<Header />, document.getElementById("root"));
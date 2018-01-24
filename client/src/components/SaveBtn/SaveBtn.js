import React from "react";
import "./SaveBtn.css";
import bookmark from './bookmark-blue.png'

const SaveBtn = props => (
  <img src ={bookmark} {...props} className = "bookmark col-md-1"/>
);

export default SaveBtn;

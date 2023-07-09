import React, { Component } from "react";
import "./App.css";
import { imageData } from "./components/DataComponent";


export default class AppClass extends Component {
  render() {
    return (
      <div className="app">
        <h1>Kalvium Gallery</h1>
        <div className="image-container">
          {imageData.map((item) => (
            <img key={item.id} src={item.img} alt={`${item.id}`} />
          ))}
        </div>
      </div>
    );
  }
}

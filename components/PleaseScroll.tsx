import React, { Component } from "react";
import MouseScrollIcon from "./MouseScrollIcon";

export default class PleaseScroll extends Component {
  render() {
    return (
      <div className="flex flex-row space-x-4 items-center">
        <MouseScrollIcon />
        <p className="text-transparent text-sm font-light tracking-wide bg-gradient-to-r bg-clip-text from-gray-400 to-gray-400 via-gray-50 animate-text">
          Please scroll
        </p>
      </div>
    );
  }
}

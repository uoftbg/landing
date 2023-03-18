import React, { Component } from "react";

import {
  SparklesIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

export default class UnderConstruction extends Component {
  render() {
    return (
      <div className="flex flex-row space-x-4 items-center text-transparent text-sm font-light tracking-wide bg-gradient-to-r bg-clip-text from-gray-400 to-gray-400 via-gray-50 animate-text">
        <SparklesIcon className="h-6 w-6 text-gray-400" />
        <span>Stay tuned! We are working hard to bring you this page.</span>
      </div>
    );
  }
}

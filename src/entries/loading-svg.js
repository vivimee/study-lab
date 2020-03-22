import React from "react";
import render from "../utils/render";

const Icon = ({ width = '64px', height = '64px', fill = 'rgba(0, 0, 0, .8)' }) => (
  <svg
    width={width}
    height={height}
    style={{ fill }}
    id="loading"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
      <path
        key={item}
        opacity=".1"
        d="M15 0 H17 V8 H15 z"
        transform={`rotate(${item * 36} 16 16)`}
      >
        <animate
          attributeName="opacity"
          from="1"
          to=".1"
          dur="1s"
          repeatCount="indefinite"
          begin={`${item * 0.1}`}
        />
      </path>
    ))}
  </svg>
);

const App = () => (<Icon width="24px" height="24px" />)

render(App);

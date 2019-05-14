import React from "react";
import { render } from "react-testing-library";
import App from "./App";

// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import "react-testing-library/cleanup-after-each";

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
  it("display baseball stadium", () => {
    const { getByText } = render(<App />);
    // The i modifier is used to perform case-insensitive matching.
    getByText(/baseball stadium/i);
  });
});

// shortcut for 'it' is 'jestit'

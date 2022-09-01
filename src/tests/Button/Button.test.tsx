import { render } from "@testing-library/react";

import "jest-canvas-mock";

import { Button } from "Components/Button";

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<Button>A Rendered Button</Button>);
  });
});

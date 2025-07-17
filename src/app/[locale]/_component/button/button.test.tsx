import { describe } from "node:test";
import { Button } from ".";
import { render, screen } from "@testing-library/react";

describe("Button Component", () => {
  test("render a default button", () => {
    const { getByText } = render(<Button>Click here</Button>);
    expect(getByText("Click here")).toBeInTheDocument();
  });

  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>Click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("applies the correct css class for different variant", () => {
    const { rerender } = render(<Button variant="primary">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="secondary">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-secondary");
  });

  test("show rendered button", () => {
    render(
      <Button variant="primary" size="large" isDisabled={true}>
        Click here
      </Button>,
    );
    screen.debug();
  });
});

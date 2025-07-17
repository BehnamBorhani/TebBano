import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

import results from "../../../../../.jest-test-results.json";
import { withTests } from "@storybook/addon-jest";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButtons: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button color="neutral">Neutral</Button>
      <Button color="blue">Blue</Button>
      <Button color="yellow">Yellow</Button>
      <Button color="success">success</Button>
      <Button color="info">Info</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
    </>
  ),
};

export const SecondaryButtons: Story = {
  render: () => (
    <>
      <Button variant="secondary">Default</Button>
      <Button variant="secondary" color="neutral">
        Neutral
      </Button>
      <Button variant="secondary" color="blue">
        Blue
      </Button>
      <Button variant="secondary" color="yellow">
        Yellow
      </Button>
      <Button variant="secondary" color="success">
        success
      </Button>
      <Button variant="secondary" color="info">
        Info
      </Button>
      <Button variant="secondary" color="danger">
        Danger
      </Button>
      <Button variant="secondary" color="warning">
        Warning
      </Button>
    </>
  ),
};

export const OutlineButtons: Story = {
  render: () => (
    <>
      <Button variant="outline">Default</Button>
      <Button variant="outline" color="neutral">
        Neutral
      </Button>
      <Button variant="outline" color="blue">
        Blue
      </Button>
      <Button variant="outline" color="yellow">
        Yellow
      </Button>
      <Button variant="outline" color="success">
        success
      </Button>
      <Button variant="outline" color="info">
        Info
      </Button>
      <Button variant="outline" color="danger">
        Danger
      </Button>
      <Button variant="outline" color="warning">
        Warning
      </Button>
    </>
  ),
};

export const TextButtons: Story = {
  render: () => (
    <>
      <Button variant="text">Default</Button>
      <Button variant="text" color="neutral">
        Neutral
      </Button>
      <Button variant="text" color="blue">
        Blue
      </Button>
      <Button variant="text" color="yellow">
        Yellow
      </Button>
      <Button variant="text" color="success">
        success
      </Button>
      <Button variant="text" color="info">
        Info
      </Button>
      <Button variant="text" color="danger">
        Danger
      </Button>
      <Button variant="text" color="warning">
        Warning
      </Button>
    </>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <>
      <Button disabled>Primary Disabled Button</Button>
      <Button variant="secondary" disabled>
        Secondary Disabled Button
      </Button>
      <Button variant="outline" disabled>
        Outline Disabled Button
      </Button>
      <Button variant="text" disabled>
        Text Disabled Button
      </Button>
    </>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <>
      <Button size="tiny">Tiny</Button>
      <Button size="small">Small</Button>
      <Button size="normal">Normal</Button>
      <Button size="large">Large</Button>
    </>
  ),
};

export const WideButtons: Story = {
  render: () => (
    <>
      <Button shape="wide">Wide Button</Button>
    </>
  ),
};

export const FullButtons: Story = {
  render: () => (
    <>
      <Button shape="full">Full Button</Button>
    </>
  ),
};

export const SquareButtons: Story = {
  render: () => (
    <>
      <Button size="tiny" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button size="small" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button size="normal" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
      <Button size="large" shape="square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </Button>
    </>
  ),
};

export const IconButton: Story = {
  render: () => (
    <>
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Submit
      </Button>
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
      <Button>
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
    </>
  ),
};

export const ButtonWithLoading: Story = {
  render: () => (
    <>
      <Button color="blue" isLoading={true} loadingText="Loading"></Button>
      <Button color="yellow" isLoading={true} loadingText="Loading"></Button>
      <Button color="neutral" isLoading={true} loadingText="Loading"></Button>
      <Button
        color="info"
        isLoading={true}
        loadingType={"ring"}
        loadingText="Loading"
      ></Button>
      <Button
        color="warning"
        variant="outline"
        isLoading={true}
        loadingType={"ring"}
        loadingText="Loading"
      ></Button>
      <Button
        color="danger"
        variant="outline"
        isLoading={true}
        loadingType={"ring"}
        loadingText="Loading"
      ></Button>
      <Button
        color="success"
        variant="outline"
        isLoading={true}
        loadingType={"ring"}
        loadingText="Loading"
      ></Button>
    </>
  ),
};

export const Tests: Story = {
  argTypes: {
    color: {
      control: "select",
      options: [
        "blue",
        "yellow",
        "neutral",
        "info",
        "success",
        "warning",
        "danger",
      ],
    },
  },
  render: (args) => <Button {...args}>Click here</Button>,
};
Tests.decorators = [withTests({ results })];

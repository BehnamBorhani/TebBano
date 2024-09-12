import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const BrandColors: Story = {
  render: () => {
    return (
      <>
        <Input placeholder="Default" />
        <Input color="primary" placeholder="Primary" />
        <Input color="neutral" placeholder="Neutral" />
      </>
    );
  },
};

export const StateColors: Story = {
  render: () => {
    return (
      <>
        <Input color="success" placeholder="Success" />
        <Input color="danger" placeholder="Error" />
        <Input color="warning" placeholder="Warning" />
        <Input color="info" placeholder="Info" />
      </>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    return (
      <>
        <Input color="primary" placeholder="Primary" />
      </>
    );
  },
};

export const TextboxSizes: Story = {
  render: () => {
    return (
      <>
        <Input size="tiny" color="primary" placeholder="Tiny" />
        <Input size="small" color="primary" placeholder="Small" />
        <Input size="normal" color="primary" placeholder="Normal" />
        <Input size="large" color="primary" placeholder="Large" />
      </>
    );
  },
};

export const Test: Story = {
  render: (args) => <Input {...args} placeholder="placeholder" />,
};

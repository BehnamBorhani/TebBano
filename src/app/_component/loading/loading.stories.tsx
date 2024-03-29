import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const LoadingSpinner: Story = {
  render: () => (
    <>
      <Loading size="tiny" />
      <Loading size="small" />
      <Loading size="normal" />
      <Loading size="large" />
    </>
  ),
};

export const LoadingSpinnerWithColors: Story = {
  render: () => (
    <>
      <Loading size="normal" color="neutral" />
      <Loading size="normal" color="blue" />
      <Loading size="normal" color="yellow" />
      <Loading size="normal" color="success" />
      <Loading size="normal" color="info" />
      <Loading size="normal" color="warning" />
      <Loading size="normal" color="danger" />
    </>
  ),
};

export const LoadingRing: Story = {
  render: () => (
    <>
      <Loading size="tiny" type="ring" />
      <Loading size="small" type="ring" />
      <Loading size="normal" type="ring" />
      <Loading size="large" type="ring" />
    </>
  ),
};

export const LoadingRingWithColors: Story = {
  render: () => (
    <>
      <Loading size="normal" type="ring" color="neutral" />
      <Loading size="normal" type="ring" color="blue" />
      <Loading size="normal" type="ring" color="yellow" />
      <Loading size="normal" type="ring" color="success" />
      <Loading size="normal" type="ring" color="info" />
      <Loading size="normal" type="ring" color="warning" />
      <Loading size="normal" type="ring" color="danger" />
    </>
  ),
};

export const Tests: Story = {
  render: (args) => <Loading {...args} />,
};

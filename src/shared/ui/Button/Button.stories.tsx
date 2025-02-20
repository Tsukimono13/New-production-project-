import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Clear Button",
  theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Clear Button",
  theme: ThemeButton.OUTLINE,
};

export const OutlineDarkTheme = Template.bind({});
OutlineDarkTheme.args = {
  children: "Clear Button",
  theme: ThemeButton.OUTLINE,
};

OutlineDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

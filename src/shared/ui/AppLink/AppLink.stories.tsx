import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "./AppLink";

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
};

export const PrimaryDarkTheme = Template.bind({});
PrimaryDarkTheme.args = {
  children: "Primary",
};
PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDarkTheme = Template.bind({});
SecondaryDarkTheme.args = {
  children: "Secondary",
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
  children: "Red",
  theme: AppLinkTheme.RED,
};

export const RedDarkTheme = Template.bind({});
RedDarkTheme.args = {
  children: "red dark theme",
  theme: AppLinkTheme.RED,
};

RedDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

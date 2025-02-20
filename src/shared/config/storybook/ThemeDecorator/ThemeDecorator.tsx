import { StoryFn, DecoratorFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryFn: StoryFn) =>
  (
    <div className={`app ${theme}`}>
      <StoryFn />
    </div>
  );

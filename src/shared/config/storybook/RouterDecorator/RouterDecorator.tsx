import { StoryFn, DecoratorFn } from "@storybook/react";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator: DecoratorFn = (StoryFn: StoryFn) => (
  <BrowserRouter>
    <StoryFn />
  </BrowserRouter>
);

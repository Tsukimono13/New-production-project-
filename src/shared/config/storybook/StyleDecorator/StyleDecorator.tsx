import { StoryFn, DecoratorFn } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator: DecoratorFn = (StoryFn: StoryFn) => (
  <>
    <StoryFn />
  </>
);
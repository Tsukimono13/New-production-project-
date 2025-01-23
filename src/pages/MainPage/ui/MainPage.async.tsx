/* eslint-disable no-promise-executor-return */
import { lazy } from 'react';

export const MainPageAsync = lazy(
    () => new Promise((resolve) =>
        // @ts-ignore
        // eslint-disable-next-line implicit-arrow-linebreak
        setTimeout(() => resolve(import('./MainPage')), 1000)),
);

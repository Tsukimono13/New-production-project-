/* eslint-disable no-promise-executor-return */
import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () => new Promise((resolve) =>
        // @ts-ignore
        // eslint-disable-next-line implicit-arrow-linebreak
        setTimeout(() => resolve(import('./AboutPage')), 1000)),
);

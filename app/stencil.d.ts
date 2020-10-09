/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import {
    applyPolyfills,
    defineCustomElements,
    JSX as LocalJSX,
} from '@mwildeboer/components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type StencilProps<T> = {
    [P in keyof T]?: Omit<T[P], 'ref'> | HTMLAttributes<T>;
};

type ReactProps<T> = {
    [P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};

type StencilToReact<
    T = LocalJSX.IntrinsicElements,
    U = HTMLElementTagNameMap
> = StencilProps<T> & ReactProps<U>;

declare module 'react' {
    namespace JSX {
        type IntrinsicElements = StencilToReact;
    }
}

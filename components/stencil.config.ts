import { Config } from '@stencil/core';

export const config: Config = {
    namespace: 'components',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements-bundle',
        },
    ],
};

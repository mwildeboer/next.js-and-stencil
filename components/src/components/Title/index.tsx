import { Component, h } from '@stencil/core';

@Component({
    tag: 'custom-title',
    styleUrl: 'index.css',
})
export class Title {
    render() {
        return (
            <h1>
                <slot></slot>
            </h1>
        );
    }
}

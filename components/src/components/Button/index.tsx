import { Component, h } from '@stencil/core';

@Component({
    tag: 'custom-button',
    styleUrl: 'index.css',
})
export class Button {
    render() {
        return (
            <button type="button">
                <slot></slot>
            </button>
        );
    }
}

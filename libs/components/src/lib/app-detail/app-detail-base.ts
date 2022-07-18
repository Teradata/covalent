import { html, LitElement } from "lit";


export class AppDetailBase extends LitElement {
    override render() {
        return html`
            <div class="mini-list"><slot name="mini-list"></slot></div>
            <div class="main-content"><slot></slot></div>
        `;
    }
}
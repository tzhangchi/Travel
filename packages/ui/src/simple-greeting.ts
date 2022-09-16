import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
      font-weight: bold;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'deckjs';

  // Render the UI as a function of component state
  render() {
    return html`<center>
      <p>Hello, ${this.name}!</p>
    </center>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-greeting': SimpleGreeting;
  }
}

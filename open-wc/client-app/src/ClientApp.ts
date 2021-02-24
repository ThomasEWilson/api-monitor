import { html, css, LitElement, property } from 'lit-element';

export class ClientApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--client-app-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  // __increment() {
    // this.counter += 1;
  // }

  render() {
    // @click=${this.__increment}
    return html`
        <h2>More stuff for the BANNER</h2>
        <mwc-button label="Everybody needs toucan stubs" outlined></mwc-button>
    `;
  }
}

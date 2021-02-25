import { LitElement, html, css } from 'lit-element';

export class ApiMonitorComponent extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  // Implement `render` to define a template for your element.
  render() {
    return html`
      <collection-params-component></collection-params-component>
      <endpoint-list-component></endpoint-list-component>
    `;
  }
}

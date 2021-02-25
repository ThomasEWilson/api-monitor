import { LitElement, html, css, property } from 'lit-element';
// import { NewmanRun, NewmanRunOptions, run } from 'newman';

export class ApiMonitorComponent extends LitElement {
  
  static get styles() {
    return css`
    `;
  }

  // Implement `render` to define a template for your element.
  render() {
    return html`
      <collection-params-component class="block"></collection-params-component>
      <endpoint-list-component class="block"></endpoint-list-component>
    `;
  }
}

import { LitElement, html, css } from 'lit-element';

export class EndpointListComponent extends LitElement {
  static get styles() {
    return css``;
  }

  // Mat-icon (retry endpoint): refresh
  // Mat-icon (show drawer): expand_more
  // Implement `render` to define a template for your element.
  render() {
    return html`
      <mwc-list multi id="checklist">
        <mwc-check-list-item
          selected
          mwc-list-item
          tabindex="-1"
          graphic="control"
          aria-disabled="false"
          >Item 0</mwc-check-list-item
        ><mwc-check-list-item
          mwc-list-item
          tabindex="-1"
          graphic="control"
          aria-disabled="false"
          >Item 1</mwc-check-list-item
        ><mwc-check-list-item
          left
          mwc-list-item
          tabindex="-1"
          graphic="control"
          aria-disabled="false"
          >Item 2 (left)</mwc-check-list-item
        ><mwc-check-list-item
          left
          mwc-list-item
          tabindex="-1"
          graphic="control"
          aria-disabled="false"
          >Item 3 (left)</mwc-check-list-item
        >
        <mwc-check-list-item
          disabled
          mwc-list-item
          tabindex="-1"
          graphic="control"
          aria-disabled="true"
        >
          <span>disabled</span>
        </mwc-check-list-item></mwc-list
      >
    `;
  }
}

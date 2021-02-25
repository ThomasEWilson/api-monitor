import { html, css, LitElement, property } from 'lit-element';

export class ClientApp extends LitElement {
  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--client-app-text-color, #000);
      }
    `;
  }

  render() {
    return html`
      <mwc-top-app-bar-fixed centerTitle>
        <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
        <div slot="title">FHIR Health Monitor</div>
        <mwc-icon-button icon="settings" slot="actionItems"></mwc-icon-button>
        <!-- Collection Variables component will show and hide via bulma magic from top bar. -->
      </mwc-top-app-bar-fixed>
      <!-- Main App Window Routing can occur here.
           i.e. conditionally swap out <api-monitor-component> with others
           to simulate web-page routing.
            - For the prototype, I'll have by itself.
        -->
      <api-monitor-component class="columns is-full"></api-monitor-component>
      <!-- API MONITOR
            collection-variables-component
            endpoint-list-component
        -->
    `;
  }
}

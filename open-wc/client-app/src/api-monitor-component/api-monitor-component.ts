import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('api-monitor-component')
class ApiMonitorComponent extends LitElement {

    @property({type : String}) propName = "value"

    static get styles() {
        return css`    
            :host {
          }`
    }

    // Implement `render` to define a template for your element.
    render() {
        return html`template`
    }
}


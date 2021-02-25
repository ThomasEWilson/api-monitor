import { LitElement, html, css, property } from 'lit-element';

export class EndpointListComponent extends LitElement {
  
  //modus opporandi: show the Endpoints with all their data in the right places.
  //2. allow us to rerun the endpoints by the press of a button.
  

  @property({ type: Array<Endpoint>() }) endpointList = [
    {
      isActive: true, 
      uri: 'http://{{server}}:{{port}}/fhir/stu3/metadata',
      resource: 'metadata',
      status: 200
    }
  ] as Array<Endpoint>;
  
  static get styles() {
    return css`   
    
    `;
  }

  // Mat-icon (retry endpoint): refresh
  // Mat-icon (show drawer): expand_more
  expandEndpointResponse(endpoint: Endpoint) {
      alert('The drawer will open now.\nThis alert for demonstration now only.');
  }

  retryEndpoint(endpoint: Endpoint) {
      alert('Retrying endpoint now.\nThis alert for demonstration now only.');
  }

  render() {
    return html`
      <mwc-list 
          multi
          activatable
          class="mat-br"
      >
        ${this.endpointList.map(item => 
              html`
                    <mwc-check-list-item
                      class="columns" 
                      left 
                      selected="${item.isActive}">
                        <div class="column is-one-quarter">
                          ${item.uri}
                        </div> 
                        <div class="column is-one-quarter">
                          <div class="columns">
                            <div class="column">Status: </div>
                            <div class="column">${item.status}</div>
                          </div>
                        </div> 
                        <div class="column is-one-quarter">
                          <mwc-icon-button 
                              icon="refresh"
                              @click=${this.retryEndpoint(item)}
                          ></mwc-icon-button>
                        </div> 
                        <div class="column is-one-quarter">
                          <mwc-icon-button 
                              icon="expand_more" 
                              @click=${this.expandEndpointResponse(item)}
                          ></mwc-icon-button>
                        </div>
                    </mwc-check-list-item>
                `
          )}
      </mwc-list>
    `;
  }
}

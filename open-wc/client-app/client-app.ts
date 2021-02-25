/**
 *  Dev: Thomas E Wilson -- 2/23/2021
 *
 *  file: client-app.ts
 *  purpose: global internal imports Module;
 *  that is, its purpose is to hold global, app-scope dependencies.
 *
 *  Documentation Note: All .ts files in this project can be considered 'web-components';
 *  the client-app component is henceforth: **client-app**
 *
 *  client-app also serves the special purpose of bootstrapping the SPA (Single-Page-Application).
 *  Meaning, this is the root app-component that will deploy in index.html,
 *  serving the selected screen-component by routing to the user requested or default screen/page/component,
 *  which are all interchangable in this context.
 *
 *  I will not have time to implement the admin module. There's a folder if needed.
 */

// Material Web Component Imports
import '@material/mwc-button';
import '@material/mwc-checkbox';
import '@material/mwc-circular-progress-four-color';
import '@material/mwc-drawer';
import '@material/mwc-formfield';
import '@material/mwc-icon';
import '@material/mwc-list';
import '@material/mwc-radio';
import '@material/mwc-textarea';
import '@material/mwc-textfield';
import '@material/mwc-top-app-bar-fixed';

import { ClientApp } from './src/ClientApp.js';
import { ApiMonitorComponent } from './src/api-monitor-component.js';
import { CollectionParamsComponent } from './src/collection-params-component.js';
import { EndpointListComponent } from './src/endpoint-list-component.js';

window.customElements.define('client-app', ClientApp);
window.customElements.define('api-monitor-component', ApiMonitorComponent);
window.customElements.define(
  'collection-params-component',
  CollectionParamsComponent
);
window.customElements.define('endpoint-list-component', EndpointListComponent);

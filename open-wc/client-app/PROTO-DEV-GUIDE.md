FHIRHealthMonitor: implemented using `git@material-components/material-components-web-components`, henceforth **MWC**
This application is essentally a proof of concept. It can be modified, extended, and styled to the implementor's design.

### Resources | Table of Contents
**For:**
Which css theme variables are used: see `component.ts` css section of each component for more information on variables used
**MWC Themeing Information**: see [Material Components Themeing README](https://github.com/material-components/material-components-web-components/blob/master/docs/theming.md)
**MWC Official Demos** component library list w/ description & demo: see [Material Components Official Demos from github.io](https://material-components.github.io/material-components-web-components/demos/)
**Full-page Demo of entire component library**: see [Material Web Components Playground](https://mwc-demos.glitch.me/)

//* Feature Requests */
//1. allow us to remove certain endpoints, to only try specific ones. (easy)
//2. allow us to modify collection variables before run endpoints. (medium-easy)

*<>* syntax refers to MWC Component Classes
only implementing idempotent requests for MVP.

/** Reference Syntax  **/
    <client-app .title="Mark H"
                @click=${this.myMethod}>
    </client-app>

<script type="module">
    class MyElement extends LitElement {
        static get properties() {
            return {
            message: { type: String },
            myBool: { type: Boolean },
            myArray: { type: Array }
            };
        }
        constructor() {
            super();
            this.message = 'Hello world! From my-element';
            this.myBool = true;
            this.myArray = ['an','array','of','test','data'];
        }
        render() {
            return html`
            <p>${this.message}</p>
            <ul>${this.myArray.map(item => html`<li>${item}</li>`)}</ul>
            ${this.myBool ?
                html`<p>Render some HTML if myBool is true</p>` :
                html`<p>Render some other HTML if myBool is false</p>`}
            `;
        }
    }
</script>


/** End Reference Syntax  **/

App {

*Top App Bar Fixed* {
App Title,
<toggle>Global-Variables List w/ fields</toggle>
<toggle>Environment List: Click Brings Dialog just like Postman</toggle>
}

*LIST*: {

endpoint-item-component {
Status,
Indicator,
Checkbox
Name

(BearerToken auto grabbed by Auth service on App-Load)
HTML CONTAINS:
*Simple Drawer* <mwc-drawer>: {
<mwc-textarea> {{list-item.response()}} </mwc-textarea>
}
//end-endpoint-item-component
}
//end-LIST
}
//end-App
}

If time, add Tabs with unique host and environment for each one.

Handling Authentication in background. 
Register this app with OAuthServer: 

Non-idempotent requests much be requested individually. 
—exclude Communication
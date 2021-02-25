FHIRHealthMonitor: implemented using `git@material-components/material-components-web-components`, henceforth **MWC**
This application is essentally a proof of concept. It can be modified, extended, and styled to the implementor's design.

### Resources | Table of Contents
**For:**
Which css theme variables are used: see `component.ts` css section of each component for more information on variables used
**MWC Themeing Information**: see [Material Components Themeing README](https://github.com/material-components/material-components-web-components/blob/master/docs/theming.md)
**MWC Official Demos** component library list w/ description & demo: see [Material Components Official Demos from github.io](https://material-components.github.io/material-components-web-components/demos/)
**Full-page Demo of entire component library**: see [Material Web Components Playground](https://mwc-demos.glitch.me/)


*<>* syntax refers to MWC Component Classes
only implementing idempotent requests for MVP.

Reference Syntax:
<client-app .title=${title}
            @click=${this.myMethod}>
</client-app>
// @click=${this.increment}

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
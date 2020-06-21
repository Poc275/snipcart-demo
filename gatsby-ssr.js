/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'

// Server side rendering API calls go here.
// onRenderBody() is called after every page Gatsby server renders while building HTML, this 
// allows us to set head and body components to be added to the HTML output.
// setPostBodyComponents takes an array of components which are added at the end of the HTML body, 
// this is where script tags and the hidden snipcart div need to go
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div hidden id="snipcart" data-api-key="ZGZmN2Y4ZDYtZTNiOC00ODVmLWEwYWMtOGFhNTU1MWVhYWU3NjM3MjI5OTE5OTQ4MzY4MjI3">
      <billing section="top">
        <fieldset className="snipcart-form__set" style={{display: "none"}}>
          <div className="snipcart-form__field">
            <snipcart-label className="snipcart__font--tiny" for="shop">Shop</snipcart-label>
            <snipcart-input name="shop" text="demo shop one"></snipcart-input>
          </div>
        </fieldset>
      </billing>
    </div>,
    <script src="https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.js"></script>,
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>,
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
  ])
}
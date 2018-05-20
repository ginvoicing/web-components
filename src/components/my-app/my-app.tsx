import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  render() {
    return (
      <div>
      <div class="ui inverted huge borderless fixed fluid menu">
      <a class="header item">GInvoicing Web Components</a>
      <div class="right menu">
      <stencil-route-link url='/'>Home</stencil-route-link>
      <stencil-route-link url='/contact'>Contact</stencil-route-link>

      </div>
    </div>
    <div class="ui grid">
      <div class="row">
        <div class="column" id="sidebar">
          <div class="ui secondary vertical fluid menu">
          
          <stencil-route-link url='/gi-inputs' class='item'>GInvoicing Inputs</stencil-route-link>
          <stencil-route-link url='/gi-dropdowns' class='item'>GInvoicing Dropdowns</stencil-route-link>
          <stencil-route-link url='/gi-cards' class='item'>GInvoicing Cards</stencil-route-link>
          </div>
        </div>
        <div class="column" id="content">


        <stencil-router id="router">
            <stencil-route url='/' component='page-home' exact={true} />
            <stencil-route url='/contact' component='page-contact'  />
            <stencil-route url='/gi-inputs' component='page-contact'  />
            <stencil-route url='/gi-dropdowns' component='page-contact' />
            <stencil-route url='/gi-cards' component='page-contact' />
            <stencil-route component="page-contact" />
        </stencil-router>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

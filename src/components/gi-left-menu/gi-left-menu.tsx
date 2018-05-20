import { Component } from '@stencil/core';

@Component({
  tag: "gi-left-menu"
})

export class GiLeftMenu{

  
  render(){
    return (
      <div class="column" id="sidebar">
          <div class="ui secondary vertical fluid menu">
            <stencil-route-link url='/inputs' class='item'>GInvoicing Inputs</stencil-route-link>
            <stencil-route-link url='/dropdowns' class='item'>GInvoicing Dropdowns</stencil-route-link>
          </div>
        </div>
    );
  }
}
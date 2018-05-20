import { Component } from '@stencil/core';

@Component({
  tag: "gi-header"
})

export class GiHeader{

  render(){
    return (
      <div class="ui inverted huge borderless fixed fluid menu">
      <stencil-route-link url='/' class="header item">GInvoicing Web Components</stencil-route-link>
          <div class="right menu">
          <stencil-route-link url='/' class="item" >Dashboard</stencil-route-link>
          </div>
    </div>
    );
  }
}
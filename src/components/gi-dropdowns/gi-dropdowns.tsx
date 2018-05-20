import { Component } from '@stencil/core';

@Component({
  tag: "gi-dropdowns"
})

export class GiDropdowns{

  componentWillLoad() {
    console.log('Dropdown component is about to be rendered.');
  }
  
  render(){
    return (
      <h1>Gi Dropdowns</h1>
    );
  }
}
import { Component } from '@stencil/core';

@Component({
  tag: "gi-inputs"
})

export class GiInputs{

  componentWillLoad() {
    console.log('Component is about to be rendered');
  }
  
  render(){
    return (
      <h1>Gi Inputs</h1>
    );
  }
}
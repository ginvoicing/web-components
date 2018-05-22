import { Component } from '@stencil/core';

@Component({
  tag: "page-checkboxes",
  styleUrl: "page-checkboxes.scss"
})

export class Container{

  
  render(){
    return (
      <div>
      <h1>Checkboxes Page</h1>

      <h3>Simple Checkbox</h3>
      <gi-checkbox label="Click to accept Terms & Conditions" name="checkbox" checked />

      <h3>Slider</h3>
      <gi-checkbox slider name="sliding"/>

      <h3>Toggle</h3>
      <gi-checkbox toggle name="sliding" />
      
      </div>
    );
  }
}
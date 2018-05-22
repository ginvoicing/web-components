import { Component } from '@stencil/core';

@Component({
  tag: "page-dropdowns",
  styleUrl: "page-dropdowns.scss"
})

export class Container{

  
  render(){
    return (
        <div>
        <h1>Gi Dropdowns</h1>
        
        <h3>Search Selection</h3>
        <p>A selection dropdown can allow a user to search through a large list of choices.</p>
        <gi-dropdown text="Gender">
          <gi-dropdown-item text="Male" />
          <gi-dropdown-item text="Female" />
        </gi-dropdown>
      </div>
    );
  }
}
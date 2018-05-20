import { Component } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css'
})

export class HomeComponent{

  
  
  render(){
    return (
      <div>
        <h1>Welcome to Ginvoicing Components</h1>
        <p>
          This is collection of all of GInvoicing web components which have been built on the top of Semantic UI and StensilJs.
        </p>
      </div>
    );
  }
}
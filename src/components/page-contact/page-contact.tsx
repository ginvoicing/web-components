import { Component } from '@stencil/core';

@Component({
  tag: "page-contact"
})

export class ContactComponent{

  componentWillLoad() {
    console.log('Component is about to be rendered');
  }
  
  render(){
    return (
      <h1>Contact Page</h1>
    );
  }
}
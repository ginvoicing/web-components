import { Component, Element, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'gi-checkbox',
  styleUrl: 'gi-checkbox.scss'
})
export class Container {
  @Element() el: HTMLElement;

  @Prop() checked: boolean = false;

  TYPES = ['toggle', 'slider'];
  @Prop() toggle: boolean = false;
  @Prop() slider: boolean = false;

  @Prop() label: string = "";
  @Prop() name: string = "";
  @Prop() tabindex: number = 0;

  @State() value: boolean = false;

  @Watch('checked') syncValue() { this.value = this.checked; }

  @Listen('click') doToggle() {
    this.value = !this.value;
  }

  rootClasses() {
    const appendIfSet = (classes, typeProp) => this[typeProp] ? `${classes} ${typeProp}` : classes;
    return this.TYPES.reduce(appendIfSet, 'ui checkbox');
  }

  render() {
    return (
    <div class={this.rootClasses()}>
      <input type="checkbox" name={this.name} tabindex={this.tabindex} class="hidden" checked={this.value}></input>
      <label>{this.label}</label>
    </div>
    );
  }
}

import { Component, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'gi-dropdown-item'
})
export class GiDropdownItem {
  @Element() el;

  @Prop() text: string;
  @Prop() value: any;
  @Prop() active: boolean = false;

  componentDidLoad() {
    this.el.classList.add('item');
    this.updateActive();
  }

  @Watch('active')
  updateActive() {
    const update = this.active ? 'add' : 'remove';
    this.el.classList[update]('active');
    this.el.classList[update]('selected');
  }

  render() {
    return this.text;
  }
}

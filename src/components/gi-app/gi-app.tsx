import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
  tag: 'gi-app',
  styleUrl: 'gi-app.css'
})
export class GIApp {

  render() {
    return (
      <div>
        <header>
          <gi-header/>
        </header>
        <main>
          <div class="ui grid">
            <div class="row">
              <gi-left-menu/>
              <div class="column" id='content'>
              <stencil-router>
                  <stencil-route url='/' component='page-home' exact={true} />
                  <stencil-route url='/inputs' component='gi-inputs' />
                  <stencil-route url='/dropdowns' component='page-dropdowns' />
                  <stencil-route url='/checkboxes' component='page-checkboxes' />
              </stencil-router>
              </div>
            </div>
          </div>
        </main>
    </div>
    );
  }
}

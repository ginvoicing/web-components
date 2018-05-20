import { render } from '@stencil/core/testing';
import { GIApp } from './gi-app';

describe('my-app', () => {
  it('should build', () => {
    expect(new GIApp()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [GIApp],
        html: '<gi-app></gi-app>'
      });
    });
  });
});
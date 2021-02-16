import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'wb-cancel',
  shadow: false,
})
export class CancelRoute {
  @Prop()
  public history: RouterHistory;

  public componentWillLoad(): void {
    this.history.replace('/');
  }
}

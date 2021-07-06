import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import './my-wcs/myWCs.js'

export class KtDemo extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      thingInListener: {type: Object, reflect: true}
    };
  }

  constructor() {
    super();
    this.title = 'Test app';
    this.thingInListener = {
      changeThis: 'notChanged',
      timesClicked: 0
    }
  }

  render() {
    console.log('parent render')
    return html`
      <main>
        <h1>${this.title}</h1>

        <p>The button has been clicked ${this.thingInListener.timesClicked} times and has ${this.thingInListener.changeThis}</p>

        <hello-world .thingInListener=${this.thingInListener} @updated='${() => {this.updateComponents()}}'> </hello-world>
        <goodbye-world .thingInListener=${this.thingInListener}> </goodbye-world>
      </main>
      </p>
    `;
  }

  updateComponents() {
    this.thingInListener.changeThis = 'Changed';
    this.thingInListener.timesClicked +=1;
    this.update(this.thingInListener)
    console.log('event heard in parent');
    console.log(this.thingInListener);
  }
}

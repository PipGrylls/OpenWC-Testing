import { LitElement, html } from 'lit-element';

export class GoodbyeWorld extends LitElement {

  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      thingInListener: { type: Object},
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('updated', () => this.requestUpdate());
  }

  disconnectedCallback() {
    window.removeEventListener('updated', () => this.requestUpdate());
    super.disconnectedCallback();
  }

  constructor() {
    super();
    this.thingInListener = {};
  }

  render() {
    console.log('goodbye render')
    return html`
        <div>
        <h2>Goodbye World</h2>
          <p>This has ${this.thingInListener.changeThis}</p>
        </div>
    `;
  }

}

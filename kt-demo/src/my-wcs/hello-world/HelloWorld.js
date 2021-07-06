import { LitElement, html } from 'lit-element';

export class HelloWorld extends LitElement {
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

  render() {
    console.log('hello render')
    return html`
        <div>
        <h2>Hello World</h2>
        <button class='btn btn-2' @click=${() => this.appUpdate()}>SUBMIT</button>
        <p>This button has been clicked ${this.thingInListener.timesClicked} times</p>
        </div>
    `;
  }

  appUpdate() {
    console.log('event fired');
    const myEvent = new CustomEvent('updated', {
      bubbles: true,
      composed: true });
    this.dispatchEvent(myEvent);
  }

  _handleUpdate () {
    // this.update(this.thingInListener)
    console.log('event heard in hello');
  }

}

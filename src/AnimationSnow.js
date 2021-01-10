import { LitElement, html } from "lit-element";
import { wcNameStyles } from "./animation-snow-style";

/**
 * `animation-snow`
 * AnimationSnow
 *
 * @customElement animation-snow
 * @litElement
 * @demo demo/index.html
 */

export class AnimationSnow extends LitElement {
  static get is() {
    return "animation-snow";
  }

  static get properties() {
    return {
      /**
       * Number of snowflakes
       * @property
       * @type { Number }
       */
      numsnowflakes: { type: Number, attribute: 'snowflakes-density' },
    };
  }

  static get styles() {
    return [wcNameStyles];
  }

  constructor() {
    super();
    this.arrSnowflakes = ['&#10053', '&#10052'];
    this.numsnowflakes = 40;
    this.repetitions = 3;
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('animation-snow-start-snow', this.startSnow.bind(this));
    document.addEventListener('animation-snow-stop-snow',this.stopSnow.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('animation-snow-start-snow', this.startSnow.bind(this));
    document.removeEventListener('animation-snow-stop-snow', this.stopSnow.bind(this));
  }

  firstUpdated() {
    this.wrapper = this.shadowRoot.getElementById("snow");
  }

  startSnow(ev) {
    if (this.id === ev.detail.id) {
      if (![...this.wrapper.classList].includes('stop')) {
        for (let snowFlakeCounter = 0; snowFlakeCounter < this.repetitions; snowFlakeCounter += 1) {
          setTimeout(this.insertSnowflakes.bind(this), this.milisecondsTimeBase * snowFlakeCounter);
        }
      } else {
        console.warn('stopping...');
      }
    }
  }

  stopSnow(ev) {
    if (this.id === ev.detail.id) {
      this.wrapper.classList.add('stop');
      setTimeout(() => { 
        this.wrapper.innerHTML = ''; 
        this.wrapper.classList.remove('stop');
      }, 2100);
    }
  }

  insertSnowflakes() {
    for (let snowFlakeCounter = 1; snowFlakeCounter <= this.numsnowflakes; snowFlakeCounter += 1) {
      const size = Math.random() * 1 + 0.5;
      const left = parseInt(Math.random() * 101, 10);
      const sec = Math.random() * 12 + 6;
    
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflakes');
      snowflake.style = `font-size: ${size}rem; left: ${left}vw; -webkit-animation-duration: ${sec}s;`
      snowflake.innerHTML = this.arrSnowflakes[snowFlakeCounter % 2];
      this.wrapper.appendChild(snowflake);
    }
  }


  render() {
    return html`
      <div class="snow" id="snow"></div>
    `;
  }
}
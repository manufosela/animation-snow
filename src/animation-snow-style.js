import { css } from 'lit-element';

export const wcNameStyles = css`
  :host {
    display: block;
    padding: 25px;
    --default-main-color: #000;
    --snow-color: #eee;
  }

  #snow div {
    position: absolute;
    top: -40px;
    animation-name: snowing, snowflakes;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-timing-function: ease-in;
  }
  .snowflakes {
    color: var(--snow-color,#eee);
    font-size: 1em;
    position: absolute;
  }

  .stop {
    transition: all 2s ease-in-out 0s;
    opacity: 0;
  }

  @-moz-keyframes snowing {
    from {
      top: -20px;
    }
    to {
      top: 105vh;
    }
  }
  @-webkit-keyframes snowing {
    from {
      top: -20px;
    }
    to {
      top: 105vh;
    }
  }
  @-o-keyframes snowing {
    from {
      top: -20px;
    }
    to {
      top: 105vh;
    }
  }
  @keyframes snowing {
    from {
      top: -20px;
    }
    to {
      top: 105vh;
    }
  }
  @-moz-keyframes snowflakes {
    0% {
      transform: rotate(-180deg) translate(0px, 0px);
    }
    100% {
      transform: rotate(180deg) translate(10px, 75px);
    }
  }
  @-webkit-keyframes snowflakes {
    0% {
      transform: rotate(-180deg) translate(0px, 0px);
    }
    100% {
      transform: rotate(180deg) translate(10px, 75px);
    }
  }
  @-o-keyframes snowflakes {
    0% {
      transform: rotate(-180deg) translate(0px, 0px);
    }
    100% {
      transform: rotate(180deg) translate(10px, 75px);
    }
  }
  @keyframes snowflakes {
    0% {
      transform: rotate(-180deg) translate(0px, 0px);
    }
    100% {
      transform: rotate(180deg) translate(10px, 75px);
    }
  }

`;

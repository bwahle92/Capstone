import html from "html-literal";
import frontLogo from "../assets/NWLogo.png";

export default () => html`
  <h1>NightWings</h1>
  <!-- <span id="logo"><img class="logo" src=${frontLogo} alt="NightWings!"/></span> -->
  <header>
    <div><i>Scary-fast Wing Delivery</i></div>
    <div id="login">
      <h5></h5>
    </div>
  </header>
`;

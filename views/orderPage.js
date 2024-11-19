import html from "html-literal";
import originalRecipe from "../assets/vecteezy_golden-fried-chicken-wings-ai-generative_49515869.png";
import dryHeat from "../assets/vecteezy_tasty-spicy-fried-chicken-pieces-isolated-on-transparent_25230132.png";
import blazinAsian from "../assets/vecteezy_spicy-chicken-wings-ai-generative_49515877.png";
import spicySriracha from "../assets/vecteezy_tasty-spicy-fried-chicken-pieces-isolated-on-transparent_25230166.png";
import sweetHoneyGlaze from "../assets/vecteezy_ai-generated-spicy-grilled-chicken-wings-on-black-png_42654056.png";
import fryBasket from "../assets/fries.png";
import chefSalad from "../assets/chefSalad.jpg";
import onionRings from "../assets/onionRings.png";
import whiteRice from "../assets/whiteRice.png";
import brownieBytes from "../assets/brownieBytes.png";

export default () => html`
  <nav>
    <button id="menuButton"><h2>View Menu</h2></button>
    <button id="quickOrder"><h2>Quick Order</h2></button>
  </nav>
  <main>
    <div class="wrapper">
      <span class="wingsList"><h2>Wings</h2></span>
      <span class="wingsList"><h2>Sides</h2></span>
      <div class="box" id="selection1">
        <div class="item">
          Original Recipe
          <img class="menuPic" src=${originalRecipe} alt="Item1" />
          <p><i>The Classic. Not too hot, not too sweet.</i></p>
          <input
            id="orderNumber"
            type="number"
            value="0"
            max="50"
            min="0"
            step="10"
          />
          <h5 class="price">$9.99 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection2">
        <div class="item">
          French Fries
          <img class="menuPic" src=${fryBasket} alt="Side Order" />
          <p><i>The safest selection on the menu.</i></p>
          <input id="orderNumber" type="number" value="0" max="10" min="0" />
          <h5 class="price">$5.99</h5>
        </div>
      </div>
      <div class="box" id="selection3">
        <div class="item">
          Blazin' Asian
          <img class="menuPic" src="${blazinAsian}" alt="Item3" />
          <p><i>Teriyaki with hints of citrus and spice.</i></p>
          <input
            id="orderNumber"
            type="number"
            value="0"
            max="50"
            min="0"
            step="10"
          />
          <h5 class="price">$9.99 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection4">
        <div class="item">
          Chef Salad
          <img class="menuPic" src=${chefSalad} alt="Side Order" />
          <p>
            <i>Freshly cut vegetables. Vinaigrette on the side.</i>
          </p>
          <input id="orderNumber" type="number" value="0" max="10" min="0" />
          <h5 class="price">$8.99</h5>
        </div>
      </div>
      <div class="box" id="selection5">
        <div class="item">
          Sweet Honey Glaze
          <img class="menuPic" src="${sweetHoneyGlaze}" alt="Item5" />
          <p><i>Our popular low-heat recipe!</i></p>
          <input
            id="orderNumber"
            type="number"
            value="0"
            max="50"
            min="0"
            step="10"
          />
          <h5 class="price">$9.99 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection1">
        <div class="item">
          Onion Rings
          <img class="menuPic" src=${onionRings} alt="Side Order" />
          <p><i>Extra crispy! Ranch included.</i></p>
          <input id="orderNumber" type="number" value="0" max="10" min="0" />
          <h5 class="price">$6.99</h5>
        </div>
      </div>
      <div class="box" id="selection2">
        <div class="item">
          Dry Heat
          <img class="menuPic" src="${dryHeat}" alt="Item2" />
          <p><i>Sauce-less with an extra picante dry-rub.</i></p>
          <input
            id="orderNumber"
            type="number"
            value="0"
            max="50"
            min="0"
            step="10"
          />
          <h5 class="price">$9.99 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection3">
        <div class="item">
          White Rice (1 cup)
          <img class="menuPic" src=${whiteRice} alt="Side Order" />
          <p><i>Best served with our Blazin' Asian wings!</i></p>
          <input id="orderNumber" type="number" value="0" max="10" min="0" />
          <h5 class="price">$3.99</h5>
        </div>
      </div>
      <div class="box" id="selection4">
        <div class="item">
          Spicy Sriracha
          <img class="menuPic" src="${spicySriracha}" alt="Item4" />
          <p><i>Crunchy batter recipe baked with Sriracha sauce.</i></p>
          <input
            id="orderNumber"
            type="number"
            value="0"
            max="50"
            min="0"
            step="10"
          />
          <h5 class="price">$9.99 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection5">
        <div class="item">
          Mega-Byte Brownie
          <img class="menuPic" src=${brownieBytes} alt="Side Order" />
          <p><i>Designed to satisfy the sweetest of sweet tooths.</i></p>
          <input id="orderNumber" type="number" value="0" max="10" min="0" />
          <h5 class="price">$6.99</h5>
        </div>
      </div>
    </div>
  </main>
`;

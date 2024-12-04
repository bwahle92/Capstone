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

export default state => html`
  <main>
    <div class="wrapper">
      <span class="wingsList"><h2>Wings</h2></span>
      <span class="wingsList"><h2>Sides</h2></span>
      <div class="box" id="selection1">
        <div class="item">
          ${state.wings[0].name}
          <img class="menuPic" src=${originalRecipe} alt="Item1" />
          <p><i>The Classic. Not too hot, not too sweet.</i></p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber1"
              type="number"
              value="0"
              max="50"
              min="0"
              step="10"
            />
            <button id="addToOrder1" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.wings[0].price} 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection2">
        <div class="item">
          ${state.sides[0].name}
          <img class="menuPic" src=${fryBasket} alt="Side Order" />
          <p>
            <i style="font-size: small">The safest selection on the menu.</i>
          </p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber2"
              type="number"
              value="0"
              max="10"
              min="0"
            />
            <button id="addToOrder2" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.sides[0].price}</h5>
        </div>
      </div>
      <div class="box" id="selection3">
        <div class="item">
          ${state.wings[1].name}
          <img class="menuPic" src="${blazinAsian}" alt="Item3" />
          <p><i>Teriyaki with hints of citrus and spice.</i></p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber3"
              type="number"
              value="0"
              max="50"
              min="0"
              step="10"
            />
            <button id="addToOrder3" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.wings[1].price} 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection4">
        <div class="item">
          ${state.sides[1].name}
          <img class="menuPic" src=${chefSalad} alt="Side Order" />
          <p id="salad">
            <i>Freshly cut vegetables. Vinaigrette on the side.</i>
          </p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber4"
              type="number"
              value="0"
              max="10"
              min="0"
            />
            <button id="addToOrder4" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.sides[1].price}</h5>
        </div>
      </div>
      <div class="box" id="selection5">
        <div class="item">
          ${state.wings[2].name}
          <img class="menuPic" src="${sweetHoneyGlaze}" alt="Item5" />
          <p><i>Our popular low-heat recipe!</i></p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber5"
              type="number"
              value="0"
              max="50"
              min="0"
              step="10"
            />
            <button id="addToOrder5" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.wings[2].price} 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection1">
        <div class="item">
          ${state.sides[2].name}
          <img class="menuPic" src=${onionRings} alt="Side Order" />
          <p><i>Extra crispy! Ranch included.</i></p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber6"
              type="number"
              value="0"
              max="10"
              min="0"
            />
            <button id="addToOrder6" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.sides[2].price}</h5>
        </div>
      </div>
      <div class="box" id="selection2">
        <div class="item">
          ${state.wings[3].name}
          <img class="menuPic" src="${dryHeat}" alt="Item2" />
          <p><i>Sauce-free with an extra picante dry-rub.</i></p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber7"
              type="number"
              value="0"
              max="50"
              min="0"
              step="10"
            />
            <button id="addToOrder7" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.wings[3].price} 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection3">
        <div class="item">
          ${state.sides[3].name}
          <img class="menuPic" src=${whiteRice} alt="Side Order" />
          <p><i>Best served with our Blazin' Asian wings!</i></p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber8"
              type="number"
              value="0"
              max="10"
              min="0"
            />
            <button id="addToOrder8" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.sides[3].price}</h5>
        </div>
      </div>
      <div class="box" id="selection4">
        <div class="item">
          ${state.wings[4].name}
          <img class="menuPic" src="${spicySriracha}" alt="Item4" />
          <p><i>Crunchy recipe baked with Sriracha sauce.</i></p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber9"
              type="number"
              value="0"
              max="50"
              min="0"
              step="10"
            />
            <button id="addToOrder9" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.wings[4].price} 10pc</h5>
        </div>
      </div>
      <div class="box" id="sideSelection5">
        <div class="item">
          ${state.sides[4].name}
          <img class="menuPic" src=${brownieBytes} alt="Side Order" />
          <p><i>Satisfies the sweetest of sweet tooths.</i></p>
          <form>
            <input
              class="orderNumber"
              id="orderNumber10"
              type="number"
              value="0"
              max="10"
              min="0"
            />
            <button id="addToOrder10" class="selectButton" type="button">
              Add to Order
            </button>
          </form>
          <h5 class="price">$${state.sides[4].price}</h5>
        </div>
      </div>
    </div>
    <div id="currentOrder">
      Order Summary:
      ${state.order
        .map(orders => {
          return `<tr><td> Item: ${orders.name}</td>
          <tr><td> Quantity: ${orders.quantity}</td>
          <tr><td> Price: ${orders.price}</td>`;
        })
        .join("")}
    </div>
    <form>
      <button id="placeOrder" type="submit">Place Order</button>
    </form>
  </main>
`;

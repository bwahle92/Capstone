import html from "html-literal";

export default () => html`
  <nav>
    <button id="menuButton"><h2>View Menu</h2></button>
    <button id="quickOrder"><h2>Quick Order</h2></button>
  </nav>
  <main>
    <div class="wrapper">
      <div class="item">Original Recipe</div>
      <div class="sub-item">
        <img
          src="vecteezy_golden-fried-chicken-wings-ai-generative_49515869.png"
          alt="Item1"
        />
      </div>
      <div class="item">Dry Heat</div>
      <div class="sub-item">
        <img
          src="vecteezy_tasty-spicy-fried-chicken-pieces-isolated-on-transparent_25230132.png"
          alt="Item2"
        />
      </div>
      <div class="item">Blazin' Asian</div>
      <div class="sub-item">
        <img
          src="vecteezy_spicy-chicken-wings-ai-generative_49515877.png"
          alt="Item3"
        />
      </div>
      <div class="item">Spicy Sriracha</div>
      <div class="sub-item">
        <img
          src="vecteezy_tasty-spicy-fried-chicken-pieces-isolated-on-transparent_25230166.png"
          alt="Item4"
        />
      </div>
      <div class="item">Sweet Honey Glaze</div>
      <div class="sub-item">
        <img
          src="vecteezy_ai-generated-spicy-grilled-chicken-wings-on-black-png_42654056.png"
          alt="Item5"
        />
      </div>
    </div>
  </main>
`;

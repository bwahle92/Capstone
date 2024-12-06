import html from "html-literal";

export default state => html`
  <main>
    <h3 style="text-align:center">Order Summary</h3>
    <!-- <div id="noOrder">[No Order Found]</div> -->
    <p id="orderReceipt">
      ${JSON.stringify(state.order.items)}
    </p>
    <div id="orderReceipt2"></div>
  </main>
`;

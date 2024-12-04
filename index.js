import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import { viewNotFound } from "./views";
import links from "./store/links";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.links)}
      ${main(state)}
      ${footer()}
    `;
  router.updatePageLinks();
}

let compare = "10006%2C10007";
let code = "63143";
let distanceURL = `https://app.zipcodebase.com/api/v1/distance?apikey=${process.env.ZIPCODEBASE_API_KEY}&code=${code}&compare=${compare}&country=us`;

function orderPageEventHandlers() {
  let orderButton1 = document.getElementById("addToOrder1");
  orderButton1.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.wings[0]);
    console.log(store.orderPage.wings[0]);
    router.navigate("/orderPage");

  });
  let orderInput1 = document.getElementById("orderNumber1");
  orderInput1.addEventListener("change", (event) => {
    store.orderPage.wings[0].quantity = event.target.value;
  });

  let orderButton2 = document.getElementById("addToOrder2");
  orderButton2.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.sides[0]);
    console.log(store.orderPage.sides[0]);
    router.navigate("/orderPage");
  });
  let orderInput2 = document.getElementById("orderNumber2");
  orderInput2.addEventListener("change", (event) => {
    store.orderPage.sides[0].quantity = event.target.value;
  });

  let orderButton3 = document.getElementById("addToOrder3");
  orderButton3.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.wings[1]);
    console.log(store.orderPage.wings[1]);
    router.navigate("/orderPage");
  });
  let orderInput3 = document.getElementById("orderNumber3");
  orderInput3.addEventListener("change", (event) => {
    store.orderPage.wings[1].quantity = event.target.value;
    router.navigate("/orderPage");
  });

  let orderButton4 = document.getElementById("addToOrder4");
  orderButton4.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.sides[1]);
    console.log(store.orderPage.sides[1]);
    router.navigate("/orderPage");
  });
  let orderInput4 = document.getElementById("orderNumber4");
  orderInput4.addEventListener("change", (event) => {
    store.orderPage.sides[1].quantity = event.target.value;
  });

  let orderButton5 = document.getElementById("addToOrder5");
  orderButton5.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.wings[2]);
    console.log(store.orderPage.wings[2]);
    router.navigate("/orderPage");
  });
  let orderInput5 = document.getElementById("orderNumber5");
  orderInput5.addEventListener("change", (event) => {
    store.orderPage.wings[2].quantity = event.target.value;
  });

  let orderButton6 = document.getElementById("addToOrder6");
  orderButton6.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.sides[2]);
    console.log(store.orderPage.sides[2]);
    router.navigate("/orderPage");
  });
  let orderInput6 = document.getElementById("orderNumber6");
  orderInput6.addEventListener("change", (event) => {
    store.orderPage.sides[2].quantity = event.target.value;
  });

  let orderButton7 = document.getElementById("addToOrder7");
  orderButton7.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.wings[3]);
    console.log(store.orderPage.wings[3]);
    router.navigate("/orderPage");
  });
  let orderInput7 = document.getElementById("orderNumber7");
  orderInput7.addEventListener("change", (event) => {
    store.orderPage.wings[3].quantity = event.target.value;
  });

  let orderButton8 = document.getElementById("addToOrder8");
  orderButton8.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.sides[3]);
    console.log(store.orderPage.sides[3]);
    router.navigate("/orderPage");
  });
  let orderInput8 = document.getElementById("orderNumber8");
  orderInput8.addEventListener("change", (event) => {
    store.orderPage.sides[3].quantity = event.target.value;
  });

  let orderButton9 = document.getElementById("addToOrder9");
  orderButton9.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.wings[4]);
    console.log(store.orderPage.wings[4]);
    router.navigate("/orderPage");
  });
  let orderInput9 = document.getElementById("orderNumber9");
  orderInput9.addEventListener("change", (event) => {
    store.orderPage.wings[4].quantity = event.target.value;
  });

  let orderButton10 = document.getElementById("addToOrder10");
  orderButton10.addEventListener("click", () => {
    store.orderPage.order.push(store.orderPage.sides[4]);
    console.log(store.orderPage.sides[4]);
    router.navigate("/orderPage");
  });
  let orderInput10 = document.getElementById("orderNumber10");
  orderInput10.addEventListener("change", (event) => {
    store.orderPage.sides[4].quantity = event.target.value;
  });
  let placeOrder = document.getElementById("placeOrder")
    placeOrder.addEventListener("click", (event) => {
      console.log("Order Placed...");
      event.preventDefault();

      console.log(store.orderPage.order);
      //Create a request body object to send to the API
      const requestData = {
        items: store.orderPage.order
      };

      // Log the request body to the console
      console.log("request Body", requestData);

     // Make a POST request to the API to create a new order.
    axios
      .post(`${process.env.WING_PLACE_API_URL}/orders`, requestData)
      .then((response) => {
        store.orderPage.order=response.data.items;
        store.orderConfirmation.order=response.data;

      router.navigate("/orderConfirmation");
      })
      // If there is an error log it to the console.
      .catch((error) => {
        console.log("Order failed", error);
      });
    });
}

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      case "home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis&units=imperial`
          )
          .then((response) => {
            console.log("Weather Response Data", response.data);
            store.home.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main,
            };
            done();
          })
          .catch((error) => {
            console.log("Something broke", error);
            done();
          });

        axios.get(distanceURL).then((response) => {
          console.log(response.data);
        });
        break;


      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
      // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
    if (view === "orderPage") {
      orderPageEventHandlers();
    }
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view === "orderPage") {
      orderPageEventHandlers();
    }
    //Set up the event listeners to compile orders to the API:


    console.log(store.orderPage.order);
    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  },
});
// router.on("/", () => render(store.home)).resolve();

// router.on("/", () => render(store.home)).resolve();

router
  .on({
    "/": () => render(),

    ":view": (match) => {
      const view = match?.data?.view ? camelCase(match.data.view) : "home";

      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View Not Found ${view}`);
      }
    },
  })
  .resolve();




import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import { viewNotFound } from "./views";
import links from "./store/links";

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

render();

// router.on("/", () => render(store.home)).resolve();

router.on({
  "/": () => render(),

  ":view": (match) => {

    const view = match?.data?.view ? camelCase(match.data.view): "home";

    if (view in store) {
      render(store[view]);
    } else {
      render(store.viewNotFound);
      console.log(`View Not Found ${view}`);
    }
  }
})
.resolve();

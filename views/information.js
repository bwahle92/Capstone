import html from "html-literal";

export default () => html`
<div class="info"><h2>Who We Are</h2></div>
    <p><div style=background-color:orange>Founded in 2024, we are a group of hard-working foodies that found ourselves too busy during the day to make our own wings,
       and also hungry too late at night to go somewhere.
       We therefore created a simple solution: A kitchen for making the tastiest fried chicken wings in the area,
       a team of delivery drivers,
       and a mobile application that allows customers to order what they'd like efficiently with as little interaction as possible.
       With heaps of success, now you can try our competitive recipes in 3 clicks or less, until as late as 4am!</div></p>
  <div class="info"><h2>Contact Us!</h2>
      <div style=background-color:orange>Questions or concerns? Reach us at:
        <div>
          <div>Email: ben@email.com</div>
          <div>Telephone: 1-618-867-5309</div>
        </div>
      </div>
      </div>
  <button class="homeButton" type="button"><h3> Return Home</h3></button>
  `;

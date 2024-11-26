import html from "html-literal";

export default state => html`
  <title>Night Wings!</title>
</head>
<body>
  <!-- <h1>Night Wings!</h1>
  <header>
    <div><i>Scary-fast Wing Delivery</i></div>
    <div id="login"><h5>Welcome, user! <i>(Not you? Click here to edit or change user.)</i></h5></div>
  </header> -->
  <main>
    <div id= "homeCenter">
      <div class="photoQuote"><i>"I liked the wings!" -Jim, 42</i></div>
      <div class="photoQuote"><i>"Came to my door 22 minutes after placing an order. Food was delicious." -Gomer, 30</i></div>
      <div class="photoQuote"><i>"App is simple to use. I can get my favorite bbq wings to my doorstep in 3 clicks."</i> -Mary, 51</div>
    </div>
    <h3>Today's weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}.</h3>
    <h4>Not sure if we deliver to your location? Enter zipcode here to find out: </h4>
    <form action="" method ="get">
      <input type="text" id="zip" required length="5" maxlength="5" size="5" placeholder="63143"/><input type="button" value="Submit"/>
    </form>
  </main>
</body>
<footer>
  <!-- <div id = "1">About Us</div>
  <div id = "2">Contact Us</div> -->
</footer>
`;

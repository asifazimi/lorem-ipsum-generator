const text = [
  "I'm baby 8-bit health goth gochujang leggings shaman yr. Listicle ramps cold-pressed slow-carb, pop-up raw denim drinking vinegar. Bespoke gluten-free jean shorts artisan green juice shabby chic knausgaard crucifix live-edge, jianbing post-ironic 8-bit master cleanse you probably haven't heard of them. Williamsburg before they sold out yuccie semiotics.",
  "Gastropub umami drinking vinegar shaman, pork belly coloring book VHS bespoke tbh farm-to-table. Coloring book banh mi paleo austin craft beer authentic normcore drinking vinegar. Pop-up art party green juice everyday carry tumblr pitchfork dreamcatcher truffaut activated charcoal. Woke umami edison bulb, franzen health goth helvetica wayfarers vexillologist hot chicken flexitarian austin humblebrag biodiesel disrupt bushwick. Actually cornhole ugh normcore tofu meditation mixtape kitsch typewriter shaman freegan tote bag. Craft beer four loko tacos organic truffaut viral.",
  "Post-ironic beard venmo, everyday carry banh mi normcore la croix occupy gentrify DIY farm-to-table brooklyn wayfarers. Pabst four loko offal pop-up. Bitters pork belly readymade, cliche listicle butcher aesthetic snackwave roof party. Bushwick taxidermy artisan photo booth. Forage polaroid pok pok mustache, gastropub trust fund typewriter meh tacos sustainable viral master cleanse vice.",
  "Distillery occupy everyday carry vaporware salvia activated charcoal. Cardigan activated charcoal DIY man bun, taxidermy everyday carry +1 intelligentsia sustainable banh mi pitchfork. Hoodie hashtag VHS 90's drinking vinegar, PBR&B mlkshk. Banjo jean shorts taiyaki VHS taxidermy, dreamcatcher sustainable twee vape occupy. Selvage meh pinterest, snackwave leggings post-ironic banjo.",
  "Cray echo park pickled forage ethical poke marfa humblebrag mlkshk waistcoat selfies hammock vinyl stumptown pok pok. Food truck tbh vegan subway tile kickstarter. Ennui hella vape, tumblr semiotics poke green juice poutine four dollar toast food truck. Irony vexillologist pork belly, plaid YOLO cardigan direct trade street art waistcoat readymade forage blue bottle bushwick stumptown.",
];

const form = document.querySelector(".lorem-ipsum");
const amount = document.getElementById("number");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value <= 0 || value > 4) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});

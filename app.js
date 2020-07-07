// initial data about player
let player = {
  speed: 100,
  x: 100,
  y: 100,
};
// when DOM loaded add the build function
window.addEventListener("DOMContentLoaded", build);
//listen to the  keys to move the object in the dom
document.addEventListener("keydown", function (e) {
  let key = e.keyCode;
  console.log(key);

  if (key === 37) {
    player.x -= player.speed;
  }
  if (key === 38) {
    player.y -= player.speed;
  }
  if (key === 39) {
    player.x += player.speed;
  }
  if (key === 40) {
    player.y += player.speed;
  }
  player.el.style.top = player.y + "px";
  player.el.style.left = player.x + "px";
});

console.log(main);

// build the object an add to the body
function build() {
  player.el = document.createElement("container");
  player.x = 300;
  player.y = 300;
  player.el.style.position = "absolute";
  player.el.style.width = "100px";
  player.el.style.height = "100px";
  player.el.classList.add("bg-primary","rounded-circle");
  player.el.style.top = player.y + "px";
  player.el.style.left = player.x + "px";
  document.body.appendChild(player.el);
}

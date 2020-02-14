//Creates new PIXI application
const app = new PIXI.Application();

//Add PIXI to document
document.body.appendChild(app.view);

//Load images
PIXI.loader
  .add("sprites/bean.jpg")
  .load(loadTextures);

//Object where sprites are contained
var sprites = {};

//Loads sprites
function loadTextures() {
  /*for(var t in PIXI.loader.resources){
    let name = t.replace(".jpg", "").replace(".png", "");
    sprites.name = new PIXI.Sprite(t.texture);
  }*/
  
  // (Ethan): testing, not important.
  let sprite = new PIXI.Sprite(PIXI.loader.resources["sprites/bean.jpg"].texture);
  app.stage.addChild(sprite);
}




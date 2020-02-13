//Putting this all in a big try-catch function because my school disables chrome dev tools

try {
  //Creates new PIXI application
  const app = new PIXI.Application();

  //Add PIXI to document
  document.body.appendChild(app.view);

  //Load images
  PIXI.loader
    .add()
    .load(loadTextures);

  //Object where sprites are contained
  var sprites = {};

  //Loads sprites
  var loadTextures = function(){
    for(var t in PIXI.loader.resources){
      let name = t.replace(".jpg", "").replace(".png", "");
      sprites.name = t.texture;
    }
  }
} catch( e ){
  //Add error as a paragraph to the screen
  let p = document.createElement("p");
  p.innerHTML = e;
  document.body.appendChild(p);
  p.innerHTML = sprites;
  document.body.appendChild(p);
  p.innerHTML = PIXI.loader.resources;
}


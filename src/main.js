// Putting this all in a big try-catch function because my school disables chrome dev tools
// (my school also does this) - ethan
try {
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
  function() loadTextures {
    for(var t in PIXI.loader.resources){
      let name = t.replace(".jpg", "").replace(".png", "");
      sprites.name = new PIXI.sprite(t.texture);
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


//Aliases
var Application = PIXI.Application,
    Loader = PIXI.Loader.shared;
    Sprite = PIXI.Sprite;

//Key function
function key(code){
  var k = {};
  k.code = code;
  //key.press fires once, down and up constantly fire
  k.down = false;
  k.up = false;

  k.onpress = function(e){
    if(event.code === k.code){
      if(k.press && k.up){ k.press(); }
      k.down = true;
      k.up = false;
      e.preventDefault();
    }
  }

  k.onrelease = function(e){
    if(event.code === k.code){
      if(k.release && k.down){ k.release(); }
      k.down = false;
      k.up = true;
      e.preventDefault();
    }
  }

  var downlisten = k.onpress.bind(k);
  var uplisten = k.onrelease.bind(k);

  window.addEventListener("keydown", downlisten);
  window.addEventListener("keyup", uplisten);

  k.removelistener = function(){
    window.removeEventListener("keydown", downlisten);
    window.removeEventListener("keyup", uplisten);
  }

  return k;
}

//I guess it's better to manually create a canvas element and access it in the javascript so that it's more customizable...?
const canvas = document.getElementById('game-canvas');

//Create app window
const app = new Application({
  view: canvas,
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true
});

//Some blue color
app.renderer.backgroundColor = 0x0700c7;

//Function to automatically resize the canvas when window is resized
window.addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

//Load images (note: apparently PIXI.loader was deprecated, and the new instance is PIXI.Loader.shared)
//Also, To get images, you need to reference their paths from index.html, not main.js
Loader
  .add("bean", "src/sprites/bean.jpg")
  .add("scunt", "src/sprites/scunt.png")
  .add("scuntBig", "src/sprites/scuntBig.png") 
  .load(setup);


var state, scunt, scuntBig, bean, keyW, keyS, keyA, keyD;
state = game;

//Object where textures are contained
var textures = {};

//Loads sprites
function setup() {
  //Function to load all textures to object "textures" with their keyname as their identifier
  let keys = Object.keys(Loader.resources),
      vals = Object.values(Loader.resources);

  for (var t = 0; t < keys.length; t++){
    let name = keys[t];

    textures[name] = vals[t].texture;
  }

  keyW = key("KeyW");
  keyS = key("KeyS");
  keyA = key("KeyA");
  keyD = key("KeyD");

  //Phoenix - testing some sprites out
  scunt = new Sprite(textures.scunt);
  scuntBig = new Sprite(textures.scuntBig);
  bean = new Sprite(textures.bean);

  scunt.anchor.x = 0.5;
  scunt.anchor.y = 0.5;
  scunt.position.set(app.renderer.width/2, app.renderer.height/2);

  scuntBig.x = app.renderer.width-scuntBig.width;

  app.stage.addChild(bean, scunt, scuntBig);

  app.ticker.add(delta => loop(delta));
}

//Code to execute every frame
function loop(delta){
  state(delta); //Set to game by default
}

//Game 
function game(delta){
  if(keyW.down){
    bean.y--;
  }
  if(keyS.down){
    bean.y++;
  }
  if(keyA.down){
    bean.x--;
  }
  if(keyD.down){
    bean.x++;
  }
  scunt.rotation += 0.05;
  scuntBig.x -= Math.sin(scunt.rotation)*12;
  scuntBig.width += Math.sin(scunt.rotation)*24;
}




//const textureSource = require("img/texture.json");

//Creates new PIXI application
const app = new PIXI.Application();

//Add PIXI to document
document.body.appendChild(app.view);


let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas";
}

PIXI.utils.sayHello(type);

app.renderer.backgroundColor = 0x03ff40;


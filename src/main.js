//const textureSource = require("img/texture.json");

//Creates new PIXI application
const app = new PIXI.Application();

let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas";
}

PIXI.utils.sayHello(type);

app.renderer.backgroundColor = 0x03ff40;

//Add PIXI to document
document.body.appendChild(app.view);

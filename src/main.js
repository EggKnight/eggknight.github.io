const textureSource = require("img/texture.json");

//Creates new PIXI application
const app = new PIXI.Application();
app.renderer.backgroundColor = 0x03ff40;

//Add PIXI to document
document.body.appendChild(app.view);

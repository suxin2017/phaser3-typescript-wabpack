import { Game, Scene } from "phaser";
import libsPng from "./assets/libs.png";
import phaser3LogoPng from "./assets/phaser3-logo.png";
import plasmaGlsl from "./assets/plasma-bundle.glsl";
import sartFieldsGlsl from "./assets/starfields.glsl";

export default class Demo extends Scene {
  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("logo", phaser3LogoPng);
    this.load.image("libs", libsPng);
    this.load.glsl("bundle", plasmaGlsl);
    this.load.glsl("stars", sartFieldsGlsl);
  }

  create() {
    this.add.shader("Star Dots", 0, 0, 800, 600).setOrigin(0);

    this.add.shader("Plasma", 0, 412, 800, 172).setOrigin(0);

    this.add.image(400, 300, "libs");

    const logo = this.add.image(400, 70, "logo");

    this.tweens.add({
      targets: logo,
      y: 350,
      duration: 1500,
      ease: "Sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: Demo,
};

const game = new Game(config);

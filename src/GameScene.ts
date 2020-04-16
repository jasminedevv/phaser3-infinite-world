import Phaser from 'phaser'

export class GameScene extends Phaser.Scene {
  constructor () {
    super('game-scene')
  }

  preload (this: Phaser.Scene) {
    this.load.image('sky', 'assets/sky.png')
  }

  create (this: Phaser.Scene) {

    for (var y = 0; y < 6; y++) {
      for (var x = 0; x < 8; x++) {
        const color = Phaser.Display.Color.RandomRGB()
        const pixel = new Phaser.GameObjects.Rectangle(
          this,
          x * 100 + 50,
          y * 100 + 50,
          100,
          100,
          color.color
        )
        this.add.existing(pixel)
      }
    }
  }
}

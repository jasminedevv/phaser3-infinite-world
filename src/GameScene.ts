import Phaser from 'phaser'

export class GameScene extends Phaser.Scene {
  player: any
  cursors: any
  constructor () {
    super('game-scene')
    this.player = undefined
    this.cursors = undefined
  }

  preload () {
    this.load.image('sky', 'assets/sky.png')
    this.load.image('lobster', 'assets/lobster.png')
  }

  create () {
    // create a random tile map
    for (var y = 0; y < 60; y++) {
      for (var x = 0; x < 80; x++) {
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
    
    this.cursors = this.input.keyboard.createCursorKeys()

    this.player = this.physics.add.sprite(400, 300, 'lobster')

    this.cameras.main.startFollow(this.player, true, 0.2, 0.2)
  }

  update () {

    this.player.setVelocityX(0)
    this.player.setVelocityY(0)

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-350)
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(350)
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-350)
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(350)
    }
  }
}

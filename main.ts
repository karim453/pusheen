sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Hamburguesa.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(5)
})
let Hamburguesa: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . . f b f f f f b f . . . . . 
    . . f b b b f f b b b f . . . . 
    . . f 3 b f b b f b 3 f . . . . 
    . . f b 3 b b b b 3 b f . . . . 
    . . f b b b 3 3 3 b b f . . . . 
    . . f b f f 3 b 3 f b f . . . . 
    . . f b b b 3 3 3 b b f . f f . 
    . . f b b b b b b b b f f b f . 
    . . f b b b b b b b b f b f f . 
    . . . f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
Hamburguesa = 0

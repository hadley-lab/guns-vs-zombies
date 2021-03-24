namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const per = SpriteKind.create()
    export const pet = SpriteKind.create()
    export const pet1 = SpriteKind.create()
    export const pet2 = SpriteKind.create()
    export const pet3 = SpriteKind.create()
}
namespace StatusBarKind {
    export const bosshealth = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.pet, function (sprite, otherSprite) {
    statusbar.value += 1
    pause(500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -125, 0)
    projectile2.startEffect(effects.fountain, 500)
    animation.runImageAnimation(
    projectile2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . c b a a b c . . . . . 
        . . . . . c b a a b c . . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b a a b . . . . . . 
        . . . . . b a c c a b . . . . . 
        . . . . . b a c c a b . . . . . 
        . . . . . . b a a b . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a c c a . . . . . . 
        . . . . . a c b b c a . . . . . 
        . . . . . a c b b c a . . . . . 
        . . . . . . a c c a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 125, 0)
    animation.runImageAnimation(
    projectile2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . c b a a b c . . . . . 
        . . . . . c b a a b c . . . . . 
        . . . . . . c b b c . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b a a b . . . . . . 
        . . . . . b a c c a b . . . . . 
        . . . . . b a c c a b . . . . . 
        . . . . . . b a a b . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . a c c a . . . . . . 
        . . . . . a c b b c a . . . . . 
        . . . . . a c b b c a . . . . . 
        . . . . . . a c c a . . . . . . 
        . . . . . . . a a . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    projectile2.startEffect(effects.fountain, 500)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -125, 0)
        animation.runImageAnimation(
        projectile2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c b b c . . . . . . 
            . . . . . c b a a b c . . . . . 
            . . . . . c b a a b c . . . . . 
            . . . . . . c b b c . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b a a b . . . . . . 
            . . . . . b a c c a b . . . . . 
            . . . . . b a c c a b . . . . . 
            . . . . . . b a a b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . a c c a . . . . . . 
            . . . . . a c b b c a . . . . . 
            . . . . . a c b b c a . . . . . 
            . . . . . . a c c a . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        projectile2.startEffect(effects.fountain, 500)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.pet1, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    slimeHealth += -1
    if (slimeHealth == 0) {
        sprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -0.5
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -1
})
sprites.onOverlap(SpriteKind.pet1, SpriteKind.enemy2, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 125, 0)
        animation.runImageAnimation(
        projectile2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c b b c . . . . . . 
            . . . . . c b a a b c . . . . . 
            . . . . . c b a a b c . . . . . 
            . . . . . . c b b c . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b a a b . . . . . . 
            . . . . . b a c c a b . . . . . 
            . . . . . b a c c a b . . . . . 
            . . . . . . b a a b . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . a c c a . . . . . . 
            . . . . . a c b b c a . . . . . 
            . . . . . a c b b c a . . . . . 
            . . . . . . a c c a . . . . . . 
            . . . . . . . a a . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        projectile2.startEffect(effects.fountain, 500)
    }
})
function next_boss () {
    tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadVertical)
    mySprite7.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 7 4 7 4 7 4 7 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . f . f . . . . f . . . . f . f 
        . f f f . . . . f . . . . f f f 
        . . f . . . . . f . . . . . f . 
        . . f . . . . . f . . . . . f . 
        . . f f . . . f f f . . . f f . 
        . . . f f f f f f f f f f f . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . f f . f f . . . . . 
        . . . . . . f . . . f . . . . . 
        `)
    tiles.placeOnRandomTile(mySprite7, sprites.vehicle.roadHorizontal)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    sprite.destroy()
    bossHealth += -1
    statusbar2.value += -3
    if (bossHealth <= 0) {
        next_boss()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy()
    enemeyHealth1 += -1
    if (enemeyHealth1 == 0) {
        otherSprite.destroy(effects.fire, 100)
        enemeyHealth1 += 1
    }
})
let sprite10: Sprite = null
let statusbar2: StatusBarSprite = null
let bossHealth = 0
let projectile2: Sprite = null
let mySprite2: Sprite = null
let mySprite7: Sprite = null
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
let enemeyHealth1 = 0
let slimeHealth = 0
slimeHealth = 10
let shield = 1
enemeyHealth1 = 1
let mySprite3 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ......................3.........
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
mySprite3.setPosition(160, 120)
statusbar.max = 100
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . 1 1 4 4 1 1 . . . . . 
    . . . . . 1 f 4 4 f 1 . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . 2 2 2 . . . 2 2 . . . 2 2 2 . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.builtin.field0)
statusbar.attachToSprite(mySprite)
mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setScore(0)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f . . . f f f f f f . . . 
    . . f 2 f . f 2 2 2 2 2 2 f . . 
    . . f 2 2 f 2 1 1 2 2 1 1 2 f . 
    . . f 2 2 2 2 1 f 2 2 f 1 2 f . 
    . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
    . . f 2 2 f 2 2 f f f f 2 2 f . 
    . . f 2 f . f 2 2 2 2 2 2 f . . 
    . . f f . . . f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.pet3)
let mySprite6 = sprites.create(img`
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . . f f f f f f f f f f . . . 
    . . . c c c c c c c c c c . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f 7 7 7 7 7 7 f f . . . 
    . f f 7 7 1 1 7 7 1 1 7 7 f f . 
    f 7 7 7 7 1 f 7 7 f 1 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 f 7 f 7 f 7 7 7 7 f 
    . f 7 7 7 7 7 f 7 f 7 7 7 7 f . 
    . . f f f f f f f f f f f f . . 
    . . . . . f . . . . . f . . . . 
    . . . . . f . . . . . f . . . . 
    . . . . . f . . . . . f . . . . 
    . . . f f f . . . . . f f f . . 
    `, SpriteKind.pet)
let mySprite5 = sprites.create(img`
    . . . . . . . f . . . . . . . . 
    . . . . . . f 3 f . . . . . . . 
    . . . . f f 3 3 3 f f . . . . . 
    . . f f 3 3 3 3 3 3 3 f f . . . 
    . f 3 3 3 f f 3 3 f f 3 3 f . . 
    . f 3 3 3 f 1 3 3 1 f 3 3 3 f . 
    . f f 3 3 3 3 3 3 3 3 3 3 f f . 
    . f 2 f f f 3 3 3 3 f f f 2 f . 
    f 2 2 2 2 2 f f f f 2 2 2 2 2 f 
    f f f f 2 2 2 2 2 2 2 2 f f f f 
    . f e f f f f f f f f f f e f . 
    . f e f e e f e e f e e f e f . 
    . f e f e e f e e f e e f e f . 
    . f e f e e f e e f e e f e f . 
    . f e f e e f e e f e e f e f . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.pet1)
let mySprite8 = sprites.create(img`
    . . . e e e e e e e e e e . . . 
    . e e e 3 3 3 3 3 3 3 3 e e e . 
    . e e e e e e e e e e e e e e . 
    e e e 5 5 5 5 e e 5 5 5 5 e e e 
    e 3 e 5 5 5 e 2 2 e 5 5 5 e 3 e 
    e 3 e 5 5 e 2 2 2 2 e 5 5 e 3 e 
    e 3 e 5 e 2 2 2 2 2 2 e 5 e 3 e 
    e 3 e e 2 2 2 e e 2 2 2 e e 3 e 
    e 3 e e 2 2 2 e e 2 2 2 e e 3 e 
    e 3 e 5 e 2 2 2 2 2 2 e 5 e 3 e 
    e 3 e 5 5 e 2 2 2 2 e 5 5 e 3 e 
    e 3 e 5 5 5 e 2 2 e 5 5 5 e 3 e 
    e e e 5 5 5 5 e e 5 5 5 5 e e e 
    . e e e e e e e e e e e e e e . 
    . e e e 3 3 3 3 3 3 3 3 e e e . 
    . . . e e e e e e e e e e . . . 
    `, SpriteKind.pet2)
tiles.placeOnRandomTile(mySprite2, sprites.builtin.oceanDepths0)
tiles.placeOnRandomTile(mySprite6, sprites.builtin.oceanDepths2)
tiles.placeOnRandomTile(mySprite5, sprites.builtin.oceanDepths1)
tiles.placeOnRandomTile(mySprite8, sprites.builtin.oceanDepths3)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.boss)
game.onUpdateInterval(2000, function () {
    sprite10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(sprite10, sprites.castle.tilePath5)
    sprite10.follow(mySprite, 50)
    animation.runImageAnimation(
    sprite10,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 f 1 1 1 f 1 1 1 . . . 
        . . 1 1 1 2 f 1 f 2 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 f 1 1 1 f 1 1 1 . . . 
        . . 1 1 1 2 f 1 f 2 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        . . 1 . 1 . 1 . 1 . 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 f 1 1 1 f 1 1 1 . . . 
        . . 1 1 1 2 f 1 f 2 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 f 1 1 1 f 1 1 1 . . . 
        . . 1 1 1 2 f 1 f 2 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 f f f 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        . . . 1 . 1 . 1 . 1 . 1 . . . . 
        . . . . 1 . 1 . 1 . 1 . 1 . . . 
        `],
    200,
    true
    )
})
game.onUpdateInterval(1000, function () {
    sprite10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . 7 6 7 6 6 6 6 . . . . 
        . . . . 7 7 6 6 6 6 6 6 7 . . . 
        . . . . 7 6 6 6 6 6 7 6 6 . . . 
        . . . . 7 1 2 7 6 6 2 1 6 . . . 
        . . . . 7 7 6 6 6 6 6 6 6 . . . 
        . . . . 7 7 7 7 6 6 6 6 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 4 e 4 e 4 . . . . . 
        . . . . 7 e e 4 4 e e e 6 . . . 
        . . . . 6 . e e 4 e e . 7 . . . 
        . . . . 6 . . e e 4 . . 7 . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . . b . b . . . . . . 
        `, SpriteKind.enemy2)
    tiles.placeOnRandomTile(sprite10, sprites.dungeon.darkGroundCenter)
    sprite10.follow(mySprite, 60)
    animation.runImageAnimation(
    sprite10,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . 7 6 7 6 6 6 6 . . . . 
        . . . . 7 7 6 6 6 6 6 6 7 . . . 
        . . . . 7 6 6 6 6 6 7 6 6 . . . 
        . . . . 7 1 2 7 6 6 2 1 6 . . . 
        . . . . 7 7 6 6 6 6 6 6 6 . . . 
        . . . . 7 7 7 7 6 6 6 6 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 4 e 4 e 4 . . . . . 
        . . . . 7 e e 4 4 e e e 6 . . . 
        . . . . 6 . e e 4 e e . 7 . . . 
        . . . . 6 . . e e 4 . . 7 . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . . b . b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . 7 6 7 6 6 6 6 . . . . 
        . . . . 7 7 6 6 6 6 6 6 7 . . . 
        . . . . 7 6 6 6 6 6 7 6 6 . . . 
        . . . . 7 1 2 7 6 6 2 1 6 . . . 
        . . . . 7 7 6 6 6 6 6 6 6 . . . 
        . . . . 7 7 7 7 6 6 6 6 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 4 e 4 e 4 . . . . . 
        . . . . 7 e e 4 4 e e e 6 . . . 
        . . . . 6 . e e 4 e e . 7 . . . 
        . . . . . 6 . e e 4 . . . 7 . . 
        . . . . . . . . b b b . . . . . 
        . . . . . . . . b . b . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . 7 6 7 6 6 6 6 . . . . 
        . . . . 7 7 6 6 6 6 6 6 7 . . . 
        . . . . 7 6 6 6 6 6 7 6 6 . . . 
        . . . . 7 1 2 7 6 6 2 1 6 . . . 
        . . . . 7 7 6 6 6 6 6 6 6 . . . 
        . . . . 7 7 7 7 6 6 6 6 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 4 e 4 e 4 . . . . . 
        . . . . 7 e e 4 4 e e e 6 . . . 
        . . . . 6 . e e 4 e e . 7 . . . 
        . . . . 6 . . e e 4 . . 7 . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . . b . b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . 7 6 7 6 6 6 6 . . . . 
        . . . . 7 7 6 6 6 6 6 6 7 . . . 
        . . . . 7 6 6 6 6 6 7 6 6 . . . 
        . . . . 7 1 2 7 6 6 2 1 6 . . . 
        . . . . 7 7 6 6 6 6 6 6 6 . . . 
        . . . . 7 7 7 7 6 6 6 6 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . 7 7 7 . . . . . . 
        . . . . . . 4 e 4 e 4 . . . . . 
        . . . . 7 e e 4 4 e e e 6 . . . 
        . . . . 6 . e e 4 e e . 7 . . . 
        . . . 6 . . . e e 4 . 7 . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . b . b . . . . . . . 
        `],
    150,
    true
    )
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.chestClosed) && controller.A.isPressed()) {
        mySprite.setImage(img`
            . . . . c c c c c c c c . . . . 
            . . . c a 5 4 5 5 4 5 a c . . . 
            . . c a e 3 3 3 3 3 3 e a c . . 
            . c a b 3 3 3 3 3 3 3 3 b a c . 
            . c a 3 1 1 1 3 3 1 1 1 3 a c . 
            c a 3 3 1 f 1 3 3 1 f 1 3 3 a c 
            c a b 3 1 1 1 3 3 1 1 1 3 b a c 
            c a b b 3 3 3 3 3 3 3 3 b b a c 
            c a b b b b b b b b b b b b a c 
            a c b b b b f f f f b b b b c a 
            a b b b b b b b b b b b b b b a 
            c a c c b b b b b b b b c c a c 
            . c a 4 c f f f f f f c 4 a c . 
            . c a a b d b d b d b b a a c . 
            . . c a a 1 d 1 d 1 d a a c . . 
            . . . c c c c c c c c c c . . . 
            `)
        for (let index = 0; index < 50; index++) {
            pause(100)
            statusbar.value += 1
        }
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.builtin.oceanDepths0) && controller.A.isPressed()) {
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f . . . f f f f f f . . . 
            . . f 2 f . f 2 2 2 2 2 2 f . . 
            . . f 2 2 f 2 1 1 2 2 1 1 2 f . 
            . . f 2 2 2 2 1 f 2 2 f 1 2 f . 
            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f 2 2 f 2 2 f f f f 2 2 f . 
            . . f 2 f . f 2 2 2 2 2 2 f . . 
            . . f f . . . f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite6.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite8.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
        pause(500)
        mySprite2.setPosition(mySprite.x, mySprite.y)
        mySprite2.follow(mySprite, 2000)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.builtin.oceanDepths1) && controller.A.isPressed()) {
        mySprite6.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite8.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
        mySprite5.setPosition(mySprite.x, mySprite.y)
        mySprite5.follow(mySprite, 80)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.builtin.oceanDepths2) && controller.A.isPressed()) {
        mySprite8.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
        mySprite6.setPosition(mySprite.x, mySprite.y)
        mySprite6.follow(mySprite, 80)
    }
})
forever(function () {
    if (mySprite5.overlapsWith(mySprite4)) {
        statusbar2.value += -21
        bossHealth += -10
        slimeHealth += -2
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.buttonPinkDepressed)) {
        controller.moveSprite(mySprite)
        info.setScore(0)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.buttonOrange)
        for (let index = 0; index < 1; index++) {
            statusbar2 = statusbars.create(20, 4, StatusBarKind.bosshealth)
            mySprite4.setImage(img`
                ................................
                ...................ff...........
                ...........fff....ffff..........
                .........ffaaf...ffaaf..........
                ........ffaaff...faaaf..........
                ........faaaf....faaaf..........
                ........faaaf....faaaf..........
                ......fffaaaffffffaaafffff......
                .....ffaaaaaaaaaaaaaaaaaaff.....
                ....ffaaaaaaaaaaaaaaaaaaaaff....
                ...ffaaaaaaaaaaaaaaaaaaaaaaff...
                ...faaaaafffaaaaaafffaaaaaaaf...
                ...faaaaffffaaaaaaffffaaaaaaf...
                ...faaaafffaaaaaaaafffaaaaaaf...
                ...faaaaaaaaaaaaaaaaaaaaaaaaf...
                ...faaaaaaaaaaaaaaaaaaaaaaaaf...
                ...faaaaaaaacaacaaaaaaaaaaaaf...
                ...faaaaaaaacaacaaaaaaaaaaaaf...
                ...faaaaaaaacaacaaaaaaaaaaaaf...
                ...faaaaaaaaccccaaaaaaaaaaaaf...
                ....faaaaaaaaaaaaaaaaaaaaaaf....
                .....faaaaaaaaaaaaaaaaaaaaf.....
                ......faaaaaaaaaaaaaaaaaaf......
                .......ffffafffafffafffff.......
                ..........faf.faf.faf...........
                ..........faf.faf.faf...........
                ..........faf.faf.faf...........
                ..........faf.faf.faf...........
                ..........faf.faf.faf...........
                ..........faf.fff.faf...........
                ..........fff.....faf...........
                ..................fff...........
                `)
            mySprite4.follow(mySprite, 60)
            tiles.placeOnRandomTile(mySprite4, sprites.dungeon.hazardLava1)
            statusbar2.value = 350
            statusbar2.attachToSprite(mySprite4)
        }
        bossHealth = 35
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.builtin.oceanDepths3) && controller.A.isPressed()) {
        mySprite8.setImage(img`
            . . . e e e e e e e e e e . . . 
            . e e e 3 3 3 3 3 3 3 3 e e e . 
            . e e e e e e e e e e e e e e . 
            e e e 5 5 5 5 e e 5 5 5 5 e e e 
            e 3 e 5 5 5 e 2 2 e 5 5 5 e 3 e 
            e 3 e 5 5 e 2 2 2 2 e 5 5 e 3 e 
            e 3 e 5 e 2 2 2 2 2 2 e 5 e 3 e 
            e 3 e e 2 2 2 e e 2 2 2 e e 3 e 
            e 3 e e 2 2 2 e e 2 2 2 e e 3 e 
            e 3 e 5 e 2 2 2 2 2 2 e 5 e 3 e 
            e 3 e 5 5 e 2 2 2 2 e 5 5 e 3 e 
            e 3 e 5 5 5 e 2 2 e 5 5 5 e 3 e 
            e e e 5 5 5 5 e e 5 5 5 5 e e e 
            . e e e e e e e e e e e e e e . 
            . e e e 3 3 3 3 3 3 3 3 e e e . 
            . . . e e e e e e e e e e . . . 
            `)
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite6.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite5.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
        mySprite8.setPosition(mySprite.x, mySprite.y)
        mySprite8.follow(mySprite, 1000)
        controller.moveSprite(mySprite, 500, 500)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.stairLadder) || info.score() >= 20) {
        tiles.placeOnRandomTile(mySprite5, sprites.dungeon.buttonOrange)
        controller.moveSprite(mySprite)
        info.setScore(0)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.buttonOrange)
        for (let index = 0; index < 1; index++) {
            statusbar2 = statusbars.create(20, 4, StatusBarKind.bosshealth)
            mySprite4.setImage(img`
                ................................
                ...................ff...........
                ...........fff....ffff..........
                .........ffaaf...ffaaf..........
                ........ffaaff...faaaf..........
                ........faaaf....faaaf..........
                ........faaaf....faaaf..........
                ......fffaaaffffffaaafffff......
                .....ffaaaaaaaaaaaaaaaaaaff.....
                ....ffaaaaaaaaaaaaaaaaaaaaff....
                ...ffaaaaaaaaaaaaaaaaaaaaaaff...
                ...faaaaafffaaaaaafffaaaaaaaf...
                ...faaaaffffaaaaaaffffaaaaaaf...
                ...faaaafffaaaaaaaafffaaaaaaf...
                ...faaaaaaaaaaaaaaaaaaaaaaaaf...
                ...faaaaaaaaaaaaaaaaaaaaaaaaf...
                ...faaaaaaaacaacaaaaaaaaaaaaf...
                ...faaaaaaaacaacaaaaaaaaaaaaf...
                ...faaaaaaaacaacaaaaaaaaaaaaf...
                ...faaaaaaaaccccaaaaaaaaaaaaf...
                ....faaaaaaaaaaaaaaaaaaaaaaf....
                .....faaaaaaaaaaaaaaaaaaaaf.....
                ......faaaaaaaaaaaaaaaaaaf......
                .......ffffafffafffafffff.......
                ..........faf.faf.faf...........
                ..........faf.faf.faf...........
                ..........faf.faf.faf...........
                ..........faf.faf.faf...........
                ..........faf.faf.faf...........
                ..........faf.fff.faf...........
                ..........fff.....faf...........
                ..................fff...........
                `)
            mySprite4.follow(mySprite, 60)
            tiles.placeOnRandomTile(mySprite4, sprites.dungeon.hazardLava1)
            statusbar2.value = 350
            statusbar2.attachToSprite(mySprite4)
        }
        bossHealth = 35
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava1) || mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava0)) {
        statusbar.value += -1
    }
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 1 1 4 4 1 1 . . . . . 
        . . . . . 1 f 4 4 f 1 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . 2 2 2 . . . 2 2 . . . 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 1 1 4 4 1 1 . . . . . 
        . . . . . 1 f 4 4 f 1 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . 2 2 2 . . . 2 2 . . . 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . 2 . . . . 2 . . . . 
        . . . . . . 2 . . . . 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 1 1 4 4 1 1 . . . . . 
        . . . . . 1 f 4 4 f 1 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . 2 2 2 . . . 2 2 . . . 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 1 1 4 4 1 1 . . . . . 
        . . . . . 1 f 4 4 f 1 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . 2 2 2 . . . 2 2 . . . 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . . 2 . . . . 2 . . . . . . 
        . . . . 2 . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
forever(function () {
    if (mySprite4.overlapsWith(mySprite)) {
        statusbar.value += -20
        pause(1000)
    }
})

namespace SpriteKind {
    export const med = SpriteKind.create()
    export const moneyyyy = SpriteKind.create()
    export const cropsss = SpriteKind.create()
}
function mc () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f d d f f f f f . . 
        . . f f f f d d d d f f f f . . 
        . . f f f d e d d e d f f f . . 
        . f f f d b f d d f b d f f f . 
        . f f f d 1 f d d f 1 d f f f . 
        . . f f f f d 2 2 d f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . e d e e f f f f e e d e . . 
        . . d d e e e f f e e e d d . . 
        . . d d e e e e e e e d d d . . 
        . . . . . d d e e d d . . . . . 
        . . . . . d d . . d d . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
}
function medications () {
    meds = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f f f f 
        f 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 f 
        f 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 f 
        f 1 1 1 1 2 2 2 1 2 2 2 1 1 1 1 f 
        f 1 1 1 1 2 2 2 1 2 2 2 1 1 1 1 f 
        f 1 1 1 1 2 1 1 1 1 1 2 1 1 1 1 f 
        f 1 1 1 1 2 2 2 1 2 2 2 1 1 1 1 f 
        f 1 1 1 1 2 2 2 1 2 2 2 1 1 1 1 f 
        f 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 f 
        f 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 f 
        f f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.med)
    cash.setScale(0.65, ScaleAnchor.Middle)
    mySprite.vy = 25
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.med, function (sprite, otherSprite) {
    meds2 += 1
    sprites.destroy(otherSprite)
    item_spawn()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.moneyyyy, function (sprite, otherSprite) {
    cash2 += 1
    sprites.destroy(otherSprite)
    item_spawn()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cropsss, function (sprite, otherSprite) {
    crops += 1
    sprites.destroy(otherSprite)
    item_spawn()
})
function water () {
    liquid = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        .....ffffffffff.....
        ....f1811111111f....
        ....f1111111111f....
        .....f66666666f.....
        .....f99999999f.....
        ....f9999999999f....
        ....f9999999999f....
        ....f9999999999f....
        ....f9999999999f....
        ....f9999999999f....
        ....f9999999999f....
        ....f9999999999f....
        .....f11111111f.....
        ......ffffffff......
        ....................
        `, SpriteKind.Food)
    liquid.setScale(0.65, ScaleAnchor.Middle)
    mySprite.vy = 25
}
function Initial_amounts () {
    meds2 = 5
    cash2 = 5
    crops = 5
    liquid2 = 5
}
function money () {
    cash = sprites.create(img`
        ......7..7......
        ......7..7......
        .....77777777...
        ....7.7..7......
        ...7..7..7......
        ..7...7..7......
        ..7...7..7......
        ...7..7..7......
        ....7.7..7......
        .....777777.....
        ......7..7.7....
        ......7..7..7...
        ......7..7...7..
        ......7..7...7..
        ......7..7..7...
        ......7..7.7....
        ...77777777.....
        ......7..7......
        ......7..7......
        `, SpriteKind.moneyyyy)
    cash.setScale(0.65, ScaleAnchor.Middle)
    mySprite.vy = 25
}
function farm () {
    crops2 = sprites.create(img`
        . . . . . . . . . . . . . . 5 5 
        . . . . . 7 7 . . . . . 5 5 5 5 
        . . . . 7 7 . . . . . 5 5 5 5 . 
        . . . 7 7 . . . . 5 5 5 5 5 5 . 
        . . 7 7 . . . . 5 5 5 5 5 5 . . 
        . 7 7 . . . . 5 5 5 5 5 5 . . . 
        . 7 . . . 5 5 5 5 5 5 5 5 . . . 
        . 7 . . 5 5 5 5 5 5 5 5 . . . . 
        . 7 . 5 5 5 5 5 5 5 5 . . . . . 
        . 7 5 5 5 5 5 5 5 5 . . . . . . 
        . 7 5 5 5 5 5 5 5 5 . . . 7 7 . 
        . 7 5 5 5 5 5 5 5 . . . 7 7 . . 
        7 7 5 5 5 5 5 5 . . . 7 7 . . . 
        7 7 5 5 5 5 5 . . . 7 7 . . . . 
        7 7 7 7 7 7 7 7 7 7 7 . . . . . 
        7 7 7 7 . . . . . . . . . . . . 
        `, SpriteKind.cropsss)
    crops2.setScale(0.65, ScaleAnchor.Middle)
    mySprite.vy = 25
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    liquid2 += 1
    sprites.destroy(otherSprite)
    item_spawn()
})
function item_spawn () {
    list = [
    meds,
    crops2,
    liquid,
    cash
    ]
    tiles.placeOnRandomTile(list._pickRandom(), assets.tile`transparency16`)
}
let list: Sprite[] = []
let crops2: Sprite = null
let liquid2 = 0
let liquid: Sprite = null
let crops = 0
let cash2 = 0
let meds2 = 0
let cash: Sprite = null
let meds: Sprite = null
let mySprite: Sprite = null
mc()
water()
farm()
money()
medications()
Initial_amounts()
item_spawn()

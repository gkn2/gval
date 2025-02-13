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
function virus () {
    game.splash("A VIRUS has spread throughout the city!", "POPULATION'S HEALTH IMPACTED! ")
    meds2 += randint(-1, -3)
}
function drought () {
    game.splash("There is a DROUGHT in the city!", "CITY WATER SUPPLY IMPACTED! ")
    liquid += randint(-1, -3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.cropsss, function (sprite, otherSprite) {
    crops += 1
    sprites.destroy(otherSprite)
    item_spawn()
})
function water () {
    liquid2 = sprites.create(img`
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
    liquid2.setScale(0.65, ScaleAnchor.Middle)
    mySprite.vy = 25
}
function Initial_amounts () {
    meds2 = 5
    cash2 = 5
    crops = 5
    liquid = 5
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
function crop_failure () {
    game.splash("A FAMINE has begun in the city!", "CITY FOOD SUPPLY IMPACTED! ")
    crops += randint(-1, -3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    liquid += 1
    sprites.destroy(otherSprite)
    item_spawn()
})
function item_spawn () {
    list = [
    meds,
    crops2,
    liquid2,
    cash
    ]
    tiles.placeOnRandomTile(list._pickRandom(), assets.tile`transparency16`)
}
function Inflation () {
    game.splash("Inflation has gone rampant in the city!", "ECONOMY IMPACTED! ")
    cash2 += randint(-1, -3)
}
let disasters: number[] = []
let list: Sprite[] = []
let crops2: Sprite = null
let liquid2: Sprite = null
let crops = 0
let liquid = 0
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
game.onUpdateInterval(20000, function () {
    let v = 0
    let i = 0
    let d = 0
    let cf = 0
    disasters = [
    cf,
    d,
    i,
    v
    ]
    if (disasters._pickRandom() == cf) {
        crop_failure()
    } else if (disasters._pickRandom() == d) {
        drought()
    } else if (disasters._pickRandom() == i) {
        Inflation()
    } else if (disasters._pickRandom() == v) {
        virus()
    }
    if (cash2 == 0) {
        game.gameOver(false)
        game.showLongText("GAME OVER!  Your Economy has been COMPLETELY DESTROYED. The city's population puts you at fault for poorly managing the economy.  The citizens have decided to overthrow you, and take matters into their own hands.   ", DialogLayout.Center)
    } else if (crops == 0) {
        game.gameOver(false)
        game.showLongText("GAME OVER!  You have ZERO Food in your city. The city's population puts you at fault for poorly managing the their food resources.  The citizens have decided to overthrow you, and take matters into their own hands.   ", DialogLayout.Center)
    } else if (liquid == 0) {
        game.gameOver(false)
        game.showLongText("GAME OVER!  You have ZERO Water in your city. The city's population puts you at fault for poorly managing their water resources.  The citizens have decided to overthrow you, and take matters into their own hands.   ", DialogLayout.Center)
    } else if (meds2 == 0) {
        game.gameOver(false)
        game.showLongText("GAME OVER!  You have ZERO Medications in your city. The city's population puts you at fault for poorly managing their medcicinal resources.  The citizens have decided to overthrow you, and take matters into their own hands.   ", DialogLayout.Center)
    }
})

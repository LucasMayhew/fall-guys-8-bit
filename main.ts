namespace SpriteKind {
    export const npc = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
            otherSprite.y += -1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
            otherSprite.y += 1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
            otherSprite.x += -1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
            otherSprite.x += 1
        }
    }
    timer.background(function () {
        if (sprite.y < otherSprite.y && (controller.A.isPressed() && !(sprite.vy >= 100))) {
            sprite.vy += -10
            pause(2000)
        }
    })
})
function doSomething3 () {
    if (rond == 3) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 5; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 4) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 2; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 5) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 1; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        value.say(sprites.readDataString(value, "name"))
    }
})
scene.onOverlapTile(SpriteKind.npc, myTiles.tile10, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    timer.after(500, function () {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), false)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), myTiles.transparency16)
    })
})
function doSomething7 () {
    for (let index = 0; index < 10; index++) {
        if (look == l + 1) {
            doSomething4()
            doSomething5(mySprite)
            picture.drawLine(_1, _2, _1, _2, 2)
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 9)
            doSomething4()
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 5)
            doSomething5(mySprite)
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 3)
            doSomething5(mySprite)
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 10)
            doSomething5(mySprite)
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 4)
            doSomething5(mySprite)
        }
        if (look == l + 1) {
            pause(100)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile17)) {
        gg = 8
        _66 = 8
    }
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile1)) {
        if (look == blockSettings.readNumber("list")) {
            look = 0
        } else {
            look += 1
        }
        mySprite.setImage(list1[look])
    }
    if (mySprite.tileKindAt(TileDirection.Center, myTiles.tile2)) {
        controller.moveSprite(mySprite, 0, 0)
        mySprite.ay = 100
        mySprite.setFlag(SpriteFlag.Ghost, true)
        pause(1000)
        mySprite.setFlag(SpriteFlag.Ghost, false)
        leve2 = randint(_66, gg)
        level = list2[leve2]
        tiles.loadMap(level)
        scene.cameraFollowSprite(mySprite)
        controller.moveSprite(mySprite, 100, 0)
        scene.setBackgroundColor(8)
        tiles.placeOnRandomTile(mySprite, myTiles.tile6)
        tiles.placeOnRandomTile(mySprite, myTiles.tile13)
        for (let index = 0; index < 49; index++) {
            npc2 = sprites.create(list1[randint(0, l)], SpriteKind.npc)
            text_list = [
            "CatMaster",
            "BatGuy",
            "AppleMan",
            "Max969",
            "Luke21",
            "Gameboy9010",
            "butch048",
            "breetoGuy",
            "KittyGirl1",
            "Gid436",
            "Batty",
            "cat323",
            "Luke174"
            ]
            for (let index = 0; index < 1000; index++) {
                text_list.push("" + randint(0, 9) + randint(0, 9) + randint(0, 9) + randint(0, 9) + randint(0, 9))
            }
            sprites.setDataString(npc2, "name", text_list[randint(0, 30)])
            if (Math.percentChance(50)) {
                sprites.setDataNumber(npc2, "r", 1)
            } else {
                sprites.setDataNumber(npc2, "r", -1)
            }
            tiles.placeOnRandomTile(npc2, myTiles.tile6)
            sprites.setDataBoolean(mySprite, "q", false)
        }
        tiles.destroySpritesOfKind(SpriteKind.Food)
        count = 50
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -100
    }
})
function Gideon () {
    gideon = []
    for (let value of gideon) {
        list1.push(value)
        l += 1
    }
}
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile16, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile20, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, myTiles.tile9, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.npc, SpriteKind.npc, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
            otherSprite.y += -1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
            otherSprite.y += 1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
            otherSprite.x += 1
        } else if (otherSprite.isHittingTile(CollisionDirection.Bottom)) {
            otherSprite.vy += -100
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
function doSomething (mySprite: Sprite, mySprite2: Sprite) {
    rond += 1
    mySprite.destroy()
    tiles.destroySpritesOfKind(SpriteKind.npc)
    game.splash("qualify")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
    controller.moveSprite(mySprite, 0, 0)
    quofid = 0
    mySprite.ay = 100
    pause(1000)
    level = list2[randint(0, 2)]
    tiles.loadMap(level)
    for (let index = 0; index < 15; index++) {
        quofid = 0
        info.setScore(0)
        npc2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . 3 1 1 1 1 1 3 . . . . . . 
            . . . 3 1 f 1 f 1 3 . . . . . . 
            . . . 3 1 f 1 f 1 3 . . . . . . 
            . . . 3 1 1 1 1 1 3 . . . . . . 
            . . 3 3 3 3 3 3 3 3 3 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . . 3 . . . 3 . . . . . . . 
            `, SpriteKind.npc)
        npc2.vx = randint(45, 80)
    }
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    scene.setBackgroundColor(8)
    if (rond == 3) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 5; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 4) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 2; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 5) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 1; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 6) {
        game.over(true)
    }
}
sprites.onOverlap(SpriteKind.npc, SpriteKind.Enemy, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else {
            if (sprite.y > otherSprite.y) {
                sprite.y += 1
            } else if (sprite.y < otherSprite.y) {
                sprite.y += -1
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.npc, myTiles.tile24, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile24, function (sprite, location) {
    blockSettings.writeNumber("list", 1 + blockSettings.readNumber("list"))
    game.over(true)
})
function doSomething5 (mySprite: Sprite) {
    picture.setPixel(5, 4, 1)
    picture.setPixel(6, 4, 1)
    picture.setPixel(7, 4, 1)
    picture.setPixel(8, 4, 1)
    picture.setPixel(9, 4, 1)
    picture.setPixel(5, 7, 1)
    picture.setPixel(6, 7, 1)
    picture.setPixel(7, 7, 1)
    picture.setPixel(8, 7, 1)
    picture.setPixel(9, 7, 1)
    picture.setPixel(5, 5, 1)
    picture.setPixel(6, 5, 15)
    picture.setPixel(7, 5, 1)
    picture.setPixel(8, 5, 15)
    picture.setPixel(9, 5, 1)
    picture.setPixel(5, 6, 1)
    picture.setPixel(6, 6, 15)
    picture.setPixel(7, 6, 1)
    picture.setPixel(8, 6, 15)
    picture.setPixel(9, 6, 1)
}
sprites.onOverlap(SpriteKind.npc, SpriteKind.Food, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    timer.after(500, function () {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), false)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), myTiles.transparency16)
    })
})
function lucas () {
    Lucas = [img`
        . . . f f f f f f f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . f f f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . 2 3 1 1 1 1 1 3 . . . . . . 
        . . 2 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . e f e e e e e e e . . . . . 
        . e . f f e e e e e . e . . . . 
        . e . e f f e e e e . e . . . . 
        . e . e e f f e e e . e . . . . 
        . b . e e e f f e e . 3 . . . . 
        b . . e e e e f f f . . . . . . 
        . b . e e e e e e e . . . . . . 
        . . . . e . . . b . . . . . . . 
        `, img`
        . . . f f 7 f 7 f f . . . . . . 
        . . f f 7 f 7 f 7 f f . . . . . 
        . f f f f 7 f 7 f f f f . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . 2 3 1 1 1 1 1 3 . . . . . . 
        . . 2 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . e f e e e e e e e . . . . . 
        . e . f f e e e e e . e . . . . 
        . e . e f f e e e e . e . . . . 
        . e . e e f f e e e . e . . . . 
        . 7 . e e e f f e e . 3 . . . . 
        7 . . e e e e f f f . . . . . . 
        . 7 . e e e e e e e . . . . . . 
        . . . . e . . . 7 . . . . . . . 
        `]
    for (let value of Lucas) {
        list1.push(value)
        l += 1
    }
}
function doSomething2 (mySprite: Sprite, mySprite2: Sprite) {
    mySprite.destroy()
    for (let index = 0; index < 1; index++) {
        quofid += 1
        info.changeScoreBy(1)
    }
    if (rond == 2 && quofid == 15) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 1 && quofid == 25) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 3 && quofid == 5) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 4 && quofid == 2) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 5 && quofid == 1) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
}
function doSomething6 () {
    list1 = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
}
function doSomething4 () {
    _2 = randint(0, 16)
    _1 = randint(0, 16)
    while (picture.getPixel(_1, _2) == 0) {
        _2 = randint(0, 16)
        _1 = randint(0, 16)
    }
}
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile20, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    for (let index = 0; index < 17; index++) {
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else {
            if (sprite.y > otherSprite.y) {
                sprite.y += 1
            } else if (sprite.y < otherSprite.y) {
                sprite.y += -1
            }
        }
        pause(1)
    }
    controller.moveSprite(sprite, 100, 0)
})
let list55: Image[] = []
let mySprite2: Sprite = null
let spetate = false
let npc12: string[] = []
let npclist: Image[] = []
let spetate2 = 0
let Lucas: Image[] = []
let gideon: Image[] = []
let level: tiles.WorldMap = null
let leve2 = 0
let _2 = 0
let _1 = 0
let npc2: Sprite = null
let quofid = 0
let rond = 0
let look = 0
let player_quofid = 0
let list2: tiles.WorldMap[] = []
let text_list: string[] = []
let l = 0
let list1: Image[] = []
let picture: Image = null
let mySprite: Sprite = null
let count = 0
let _66 = 0
let gg = 0
if (blockSettings.exists("list")) {
    info.setScore(0)
} else {
    blockSettings.writeNumber("list", 1)
}
blockSettings.writeNumber("list", 100)
gg = 8
_66 = 0
let endgame1 = 9
let endgame2 = 10
count = 10
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `, SpriteKind.Player)
sprites.setDataBoolean(mySprite, "q", false)
picture = image.create(0, 0)
picture = image.create(16, 16)
sprites.setDataSprite(mySprite, "p2", sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . 3 3 3 3 . 3 3 3 . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
sprites.readDataSprite(mySprite, "p2").setFlag(SpriteFlag.Ghost, true)
sprites.readDataSprite(mySprite, "p2").setFlag(SpriteFlag.Invisible, true)
list1 = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . . 2 1 f 1 f 1 2 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 2 1 1 1 1 1 2 . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 1 1 1 1 1 2 . . . . . . 
    . . . 2 1 f 1 f 1 2 . . . . . . 
    . . . 2 1 f 1 f 1 2 . . . . . . 
    . . . 2 1 1 1 1 1 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . a a a a a a a a a . . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . a . . . a . . . . . . . 
    `,
img`
    . . . . . 2 2 2 . . . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . d d 2 2 2 d d . . . . . . 
    . . . d 1 1 1 1 1 d . . . . . . 
    . . . d 1 f 1 f 1 d . . . . . . 
    . . . d 1 f 1 f 1 d . . . . . . 
    . . . d 1 1 1 1 1 d . . . . . . 
    . . d d d 2 2 2 d d d . . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . . . d d 2 2 2 d d . . . . . . 
    . . . d d 2 2 2 d d . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . . d . . . d . . . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 . . . . . . . 
    . f 5 1 1 5 5 5 1 1 5 f . . . . 
    . f 5 1 1 2 5 1 1 1 5 f . . . . 
    . 5 5 1 1 1 2 1 1 1 5 5 . . . . 
    . . . 1 d d 2 d d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d d d d d 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 e 1 1 1 e 1 . 1 . . . . 
    . 1 . e e e 1 e e e . 1 . . . . 
    . 1 . e e e e e e e . 1 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . a a a a a . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . 1 f a a a f 1 . . . . . . 
    . . . 1 f a a a f 1 . . . . . . 
    . . . a a 5 5 5 a a . . . . . . 
    . . . a a a 5 a a a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . a a a a a a a a a . . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . . . . a . . . a . . . . . . . 
    `,
img`
    . . . . . a a a a a . . . . . . 
    . . . . 1 f a a a f 1 . . . . . 
    . . . . 1 f a a a f 1 . . . . . 
    . . . . a a a a a a a . . . . . 
    . . . . a f f f f f a . . . . . 
    . . . . a d a a a d a . . . . . 
    . . . . a 1 1 1 1 1 a . . . . . 
    . . . . a 1 f 1 f 1 a . . . . . 
    . . . . a 1 f 1 f 1 a . . . . . 
    . . . . a 1 1 1 1 1 a . . . . . 
    . . . . a a 7 7 7 a a . . . . . 
    . . . a a 7 7 7 7 7 a a . . . . 
    . . a . a 7 7 7 7 7 a . a . . . 
    . . a . a 7 7 7 7 7 a . a . . . 
    . . a . a a 7 7 7 a a . a . . . 
    . . . . . a . . . a . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . a f a a a f a . 3 . . . . 
    . 3 . f a a a a a f . 3 . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 5 . 4 2 4 4 4 2 4 . 5 . . . . 
    . 5 . 2 4 4 4 4 4 2 . 5 . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . . 5 . . . 5 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 8 f 8 8 8 f 8 . 9 . . . . 
    . 9 . f 8 8 8 8 8 f . 9 . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . d f 1 1 1 f d . . . . . . 
    . . . d f 1 1 1 f d . . . . . . 
    . . . 1 1 5 5 5 1 1 . . . . . . 
    . . . 1 1 1 5 1 1 1 . . . . . . 
    . . . 1 d d d d d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d d d d d 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . . . . 1 . . . 1 . . . . . . . 
    `,
img`
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . 1 f 6 6 6 f 1 . . . . . 
    . . . . 1 f 6 6 6 f 1 . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . 6 f f f f f 6 . . . . . 
    . . . . 6 d 6 6 6 d 6 . . . . . 
    . . . . 6 1 1 1 1 1 6 . . . . . 
    . . . . 6 1 f 1 f 1 6 . . . . . 
    . . . . 6 1 f 1 f 1 6 . . . . . 
    . . . . 6 1 1 1 1 1 6 . . . . . 
    . . . . 6 6 7 7 7 6 6 . . . . . 
    . . . 6 6 7 7 7 7 7 6 6 . . . . 
    . . 6 . 6 7 7 7 7 7 6 . 6 . . . 
    . . 6 . 6 7 7 7 7 7 6 . 6 . . . 
    . . 6 . 6 6 7 7 7 6 6 . 6 . . . 
    . . . . . 6 . . . 6 . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . 2 f 1 1 1 1 1 f . . . . . . 
    . . 2 f 1 f 1 f 1 f . . . . . . 
    . . 2 f 1 f 1 f 1 f . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . a f d d d d d f . . . . . . 
    . . a f d f d f d f . . . . . . 
    . . a f d f d f d f . . . . . . 
    . . . f d d d d d f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . 5 2 5 2 5 2 5 . . . . . . 
    . . 5 f 1 1 1 1 1 f . . . . . . 
    . . 2 f b f b f b f . . . . . . 
    . . 5 f b f b f b f . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . 3 f 1 1 1 1 1 f . . . . . . 
    . . 3 f 1 f 1 f 1 f . . . . . . 
    . . 3 f 1 f 1 f 1 f . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . 4 2 5 5 5 5 5 2 . . . . . . 
    . . 4 2 5 f 5 f 5 2 . . . . . . 
    . . 4 2 5 f 5 f 5 2 . . . . . . 
    . . . 2 5 5 5 5 5 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . c c c c c c c . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . c 1 f 1 f 1 c . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . c 1 1 1 1 1 c . . . . . . 
    . . a a a a a a a a a . . . . . 
    . c . c c c c c c c . c . . . . 
    . a . a a a a a a a . a . . . . 
    . c . c c c c c c c . c . . . . 
    . a . a a a a a a a . a . . . . 
    . . . c c c c c c c . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . c . . . c . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 6 1 1 1 1 1 6 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 6 1 f 1 f 1 6 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 6 6 6 6 6 6 6 6 6 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 9 9 9 9 9 9 1 1 1 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 1 9 . . . 
    . . 9 9 9 1 1 1 1 1 9 1 9 . . . 
    . . 9 9 9 1 f 1 f 1 9 9 9 . . . 
    . 6 9 9 9 1 f 1 f 1 9 9 9 6 . . 
    6 . 9 9 9 1 1 1 1 1 9 9 9 . 6 . 
    6 . 9 9 9 9 9 9 9 9 9 9 9 . 6 . 
    6 . 9 1 9 9 9 9 9 9 9 9 9 . 6 . 
    . . 9 1 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 1 1 1 9 9 9 9 9 9 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . . 6 . . . 6 . . . . . . 
    `,
img`
    . . . . . . . . 5 5 . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 6 9 9 9 9 9 9 9 6 . . . . . 
    . 6 . 9 9 9 9 5 9 9 . 6 . . . . 
    . 6 . 9 9 9 5 9 5 9 . 6 . . . . 
    . 6 . 9 9 5 9 9 9 5 . 6 . . . . 
    . 6 . 9 5 9 5 9 9 9 . 6 . . . . 
    . . . 5 9 9 9 9 9 9 . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 5 5 5 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 5 4 . . . 
    . . 4 4 4 1 1 1 1 1 4 5 4 . . . 
    . . 4 4 4 1 f 1 f 1 4 4 4 . . . 
    . 2 4 4 4 1 f 1 f 1 4 4 4 2 . . 
    2 . 4 4 4 1 1 1 1 1 4 4 4 . 2 . 
    2 . 4 4 4 4 4 4 4 4 4 4 4 . 2 . 
    2 . 4 5 4 4 4 4 4 4 4 4 4 . 2 . 
    . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 5 5 5 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . a a a a a a a a a . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . a . a a a a a a a . a . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . a . a a a a a a a . a . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e e e e e e . e . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . d d d d d d d . . . . . . 
    . . d d d d d d d d d . . . . . 
    . . d d d d d d d d d . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . d d d d d d d d d . . . . . 
    . e d d d d d d d d d e . . . . 
    e . . d d d d d d d . . e . . . 
    e . . 1 2 1 2 1 2 1 . . e . . . 
    e . . 2 1 2 1 2 1 2 . . e . . . 
    . . . 1 2 1 2 1 2 1 . . . . . . 
    . . . 2 1 2 1 2 1 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . b 2 2 2 b . . . . . . . 
    . . . . b 2 2 2 b . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . b 5 5 5 b . . . . . . . 
    . . . . b f 5 f b . . . . . . . 
    . . . d b f 5 f b d . . . . . . 
    . . d . b 5 5 5 b . d . . . . . 
    . . d . b b b b b . d . . . . . 
    . . d . b 7 7 7 b . d . . . . . 
    . . d . b 7 7 7 b . d . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . . d . d . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f 1 f f f . . . . . . 
    . . f f f f 1 f f f f . . . . . 
    . f . f f f 1 f f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f 1 f f f . . . . . . 
    . . . f f 1 f 1 f f . . . . . . 
    . . f f f 1 f 1 f f f . . . . . 
    . f . f f f f 1 f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . 5 . . . . . . . . 
    . . . . 5 . 5 4 . . 5 . . . . . 
    . . 5 . 4 5 4 2 5 5 4 . . . . . 
    . . 4 5 2 4 2 2 4 4 2 5 5 . . . 
    . 5 2 4 2 2 2 2 2 2 2 4 4 5 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 1 1 1 1 1 1 2 2 2 2 . . 
    . 2 2 2 1 f 1 1 f 1 2 2 2 2 . . 
    . 4 2 2 1 f 1 1 f 1 2 2 2 4 . . 
    . 4 2 2 1 1 1 1 1 1 2 2 2 4 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 4 . 2 2 2 2 2 2 2 2 2 . 4 . . 
    . . . . . 4 . . . 4 . . . . . . 
    `,
img`
    . . . 5 . 5 . 5 . 5 . . . . . . 
    . . . 5 5 5 . 5 5 5 . 5 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 1 1 1 1 1 1 2 2 . . . . 
    . . . 2 1 f 1 1 f 1 2 2 . . . . 
    . . 1 2 1 f 1 1 f 1 2 2 1 . . . 
    . 1 . 2 1 1 1 1 1 1 2 2 . 1 . . 
    . 1 . 2 2 2 2 2 2 2 2 2 . 1 . . 
    . 1 . 2 2 2 2 2 2 2 2 2 . 1 . . 
    . . . 2 2 2 2 2 2 2 2 2 . 1 . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 4 . . . 4 . . . . . . 
    `,
img`
    . . . . 5 5 . 5 5 . . . . . . . 
    . . . 5 . 5 5 5 . 5 . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . 6 e e e e e e e 6 . . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 1 1 1 1 1 8 8 8 8 8 1 
    1 8 8 8 8 1 f 1 f 1 8 8 8 8 8 1 
    1 8 8 8 8 1 f 1 f 1 8 8 8 8 8 1 
    1 8 8 8 8 1 1 1 1 1 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 . 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 . . . . . 
    . . . 7 1 1 1 1 1 7 . . . . . . 
    . 7 . 7 1 f 1 f 1 7 . . . . . . 
    . . 7 7 1 f 1 f 1 7 . . . . . . 
    . . . 7 1 1 1 1 1 7 . . . . . . 
    . . 6 7 7 7 7 7 7 7 6 . . . . . 
    . 6 . 7 7 7 7 7 7 7 . 6 . . . . 
    . 6 . 7 7 7 7 7 7 7 . 6 . . . . 
    . 6 . 7 7 7 7 7 7 7 . 6 . . . . 
    . 6 . 7 7 7 7 7 7 7 . 6 . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a 1 1 1 1 1 a a a a a 4 
    4 a a a a 1 f 1 f 1 a a a a a 4 
    4 a a a a 1 f 1 f 1 a a a a a 4 
    4 a a a a 1 1 1 1 1 a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . 1 2 2 2 1 . . . . . . . 
    . . . . 1 2 2 2 1 . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . 1 5 5 5 1 . . . . . . . 
    . . . . 1 f 5 f 1 . . . . . . . 
    . . . 1 1 f 5 f 1 1 . . . . . . 
    . . 1 . 1 5 5 5 1 . 1 . . . . . 
    . . 1 . 1 1 1 1 1 . 1 . . . . . 
    . . 1 . 1 7 7 7 1 . 1 . . . . . 
    . . 1 . 1 7 7 7 1 . 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . . 1 . 1 . . . . . . . . 
    `,
img`
    . . . 4 . . . . . 4 . . . . . . 
    . . . 4 . . . . . 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 1 1 1 1 1 4 . . . . . . 
    . . . 4 1 f 1 f 1 4 . . . . . . 
    . . . 4 1 f 1 f 1 4 . . . . . . 
    . . . 4 1 1 1 1 1 4 . . . . . . 
    . . 4 4 4 4 4 4 4 4 4 . . . . . 
    . 4 . 4 4 4 4 4 4 4 . 4 . . . . 
    . 4 . 4 4 1 1 1 4 4 . 4 . . . . 
    . 4 . 4 4 1 1 1 4 4 . 4 . . . . 
    . 4 . 4 4 1 1 1 4 4 . 4 . . . . 
    . . . 4 4 1 1 1 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . . 4 . . . 4 . . . . . . . 
    `,
img`
    . . . e . . . . . e . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e 1 1 1 e e . e . . . . 
    . e . e e 1 1 1 e e . e . . . . 
    . e . e e 1 1 1 e e . e . . . . 
    . . . e e 1 1 1 e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . b . . . . . b . . . . . . 
    . . . b . . . . . b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b 1 1 1 1 1 b . . . . . . 
    . . . b 1 f 1 f 1 b . . . . . . 
    . . . b 1 f 1 f 1 b . . . . . . 
    . . . b 1 1 1 1 1 b . . . . . . 
    . . b b b b b b b b b . . . . . 
    . b . b b b b b b b . b . . . . 
    . b . b b 1 1 1 b b . b . . . . 
    . b . b b 1 1 1 b b . b . . . . 
    . b . b b 1 1 1 b b . b . . . . 
    . . . b b 1 1 1 b b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . b . . . b . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b 1 1 b 1 1 b . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . b b b b b b b b b . . . . . 
    . b . b b d d d b b . b . . . . 
    . 3 . b b d d d b b . 3 . . . . 
    . 3 . b b d d d b b . 3 . . . . 
    . 3 . b b d d d b b . 3 . . . . 
    . . . b b b d b b b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . 3 3 6 1 1 1 1 1 6 3 3 . . . . 
    3 3 3 6 1 f 1 f 1 6 3 3 3 . . . 
    3 3 3 6 1 f 1 f 1 6 3 3 3 . . . 
    . 3 3 6 1 1 1 1 1 6 3 3 . . . . 
    . . 7 6 6 6 6 6 6 6 7 . . . . . 
    . 7 . 7 3 3 3 3 3 7 . 7 . . . . 
    . 7 . 7 3 3 3 3 3 7 . 7 . . . . 
    . 7 . 7 7 3 3 3 7 7 . 7 . . . . 
    . 7 . e e e e e e e . 7 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . . a a a . . . . . . . . 
    . . . . a a 5 a a . . . . . . . 
    . . . a 5 a a a 5 a . . . . . . 
    . a a a a a a a a a a a . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . a a a a a a a a a . . . . . 
    . a . a a a a a 5 a . a . . . . 
    . a . a a 5 a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a 5 a . a . . . . 
    . . . a 5 a 5 a a a . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . a . . . a . . . . . . . 
    `,
img`
    . . . . . 2 2 2 . . . . . . . . 
    . . . . 2 2 5 2 2 . . . . . . . 
    . . . 2 5 2 2 2 5 2 . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 4 5 5 5 5 5 4 . . . . . . 
    . . . 4 5 f 5 f 5 4 . . . . . . 
    . . . 4 5 f 5 f 5 4 . . . . . . 
    . . . 4 5 5 5 5 5 4 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 2 . 2 2 2 2 2 5 2 . 2 . . . . 
    . 2 . 2 2 5 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 5 2 . 2 . . . . 
    . . . 2 5 2 5 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . f f f . . . . . . . . 
    . . . . f f 5 f f . . . . . . . 
    . . . f 5 f f f 5 f . . . . . . 
    . f f f f f f f f f f f . . . . 
    . . . c a a a a a c . . . . . . 
    . . . c a f a f a c . . . . . . 
    . . . c a f a f a c . . . . . . 
    . . . c a a a a a c . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f 5 f . f . . . . 
    . f . f f 5 f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f 5 f . f . . . . 
    . . . f 5 f 5 f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . 2 2 2 . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . 2 2 6 1 1 1 1 1 6 2 2 . . . . 
    2 2 2 6 1 f 1 f 1 6 2 2 2 . . . 
    2 2 2 6 1 f 1 f 1 6 2 2 2 . . . 
    . 2 2 6 1 1 1 1 1 6 2 2 . . . . 
    . . 7 6 6 6 6 6 6 6 7 . . . . . 
    . 7 . 7 2 2 2 2 2 7 . 7 . . . . 
    . 7 . 7 2 2 2 2 2 7 . 7 . . . . 
    . 7 . 7 7 2 2 2 7 7 . 7 . . . . 
    . 7 . e e e e e e e . 7 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . . 5 5 5 . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . 5 5 6 1 1 1 1 1 6 5 5 . . . . 
    5 5 5 6 1 f 1 f 1 6 5 5 5 . . . 
    5 5 5 6 1 f 1 f 1 6 5 5 5 . . . 
    . 5 5 6 1 1 1 1 1 6 5 5 . . . . 
    . . 7 6 6 6 6 6 6 6 7 . . . . . 
    . 7 . 7 5 5 5 5 5 7 . 7 . . . . 
    . 7 . 7 5 5 5 5 5 7 . 7 . . . . 
    . 7 . 7 7 5 5 5 7 7 . 7 . . . . 
    . 7 . e e e e e e e . 7 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b 1 1 b 1 1 b . . . . . . 
    . . . 6 1 f 1 f 1 6 . . . . . . 
    . . . 6 1 f 1 f 1 6 . . . . . . 
    . . . 6 1 1 1 1 1 6 . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . . b b b b b b b b b . . . . . 
    . b . b d b b b b b . b . . . . 
    . 6 . b b d b b b b . 6 . . . . 
    . 6 . b b b d b d b . 6 . . . . 
    . 6 . b b b b d b b . 6 . . . . 
    . . . b b b d b d b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b 5 5 b 5 5 b . . . . . . 
    . . . 4 5 f 5 f 5 4 . . . . . . 
    . . . 4 5 f 5 f 5 4 . . . . . . 
    . . . 4 5 5 5 5 5 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . b b b b b b b b b . . . . . 
    . b . b d b b b b b . b . . . . 
    . 4 . b b d b b b b . 4 . . . . 
    . 4 . b b b d b d b . 4 . . . . 
    . 4 . b b b b d b b . 4 . . . . 
    . . . b b b d b d b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . 4 . . . 4 . . . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 1 1 1 1 1 f f . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 1 f f f f f 1 f . . . . 
    . . . f 1 f 1 f 1 f 1 f . . . . 
    . . . f 1 f 1 f 1 f 1 f . . . . 
    . . f f 1 f f f f f 1 f f . . . 
    . f f 1 1 1 1 1 1 1 1 1 f f . . 
    . f 1 f 1 1 1 1 1 1 1 f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 f 1 f . . 
    . f f f 1 1 1 1 1 1 1 f f f . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f f 1 f f f 1 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 f f f f f 1 1 . . . . 
    . . . 1 f f f f f f f 1 . . . . 
    . . . 1 f 1 1 1 1 1 f 1 . . . . 
    . . . 1 f 1 f 1 f 1 f 1 . . . . 
    . . . 1 f 1 f 1 f 1 f 1 . . . . 
    . . 1 1 f 1 1 1 1 1 f 1 1 . . . 
    . 1 1 f f f f f f f f f 1 1 . . 
    . 1 f 1 f f f f f f f 1 f 1 . . 
    . 1 f 1 f f f f f f f 1 f 1 . . 
    . 1 f 1 f f f f f f f 1 f 1 . . 
    . 1 f 1 f f f f f f f 1 f 1 . . 
    . 1 1 1 f f f f f f f 1 1 1 . . 
    . . . 1 f f f f f f f 1 . . . . 
    . . . 1 1 f 1 1 1 f 1 1 . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 2 2 2 2 2 f f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f 2 f f f f f 2 f . . . . 
    . . . f 2 f 2 f 2 f 2 f . . . . 
    . . . f 2 f 2 f 2 f 2 f . . . . 
    . . f f 2 f f f f f 2 f f . . . 
    . f f 2 2 2 2 2 2 2 2 2 f f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f f f 2 2 2 2 2 2 2 f f f . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f f 2 f f f 2 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 2 2 2 2 2 f f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f 9 2 2 2 2 2 9 f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . f f 2 9 9 9 9 9 2 f f . . . 
    . f f 2 2 2 2 2 2 2 2 2 f f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f f f 2 2 2 2 2 2 2 f f f . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f f 2 f f f 2 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f a a a a a f f . . . . 
    . . . f a a a a a a a f . . . . 
    . . . f 9 a a a a a 9 f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . f f a 9 9 9 9 9 a f f . . . 
    . f f a a a a a a a a a f f . . 
    . f a f a a a a a a a f a f . . 
    . f a f a a a a a a a f a f . . 
    . f a f a a a a a a a f a f . . 
    . f a f a a a a a a a f a f . . 
    . f f f a a a a a a a f f f . . 
    . . . f a a a a a a a f . . . . 
    . . . f f a f f f a f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 6 6 6 6 6 f f . . . . 
    . . . f 6 6 6 6 6 6 6 f . . . . 
    . . . f 6 7 7 7 7 7 6 f . . . . 
    . . . f 6 7 f f f 7 6 f . . . . 
    . . . f 6 7 f f f 7 6 f . . . . 
    . . f f 6 7 7 7 7 7 6 f f . . . 
    . f f 6 6 6 6 6 6 6 6 6 f f . . 
    . f 6 f 6 6 6 6 6 6 6 f 6 f . . 
    . f 6 f 6 6 6 6 6 6 6 f 6 f . . 
    . f 6 f 6 6 6 6 6 6 6 f 6 f . . 
    . f 6 f 6 6 6 6 6 6 6 f 6 f . . 
    . f f f 6 6 6 6 6 6 6 f f f . . 
    . . . f 6 6 6 6 6 6 6 f . . . . 
    . . . f f 6 f f f 6 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 9 9 9 9 9 f f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . . f 9 f f f f f 9 f . . . . 
    . . . f 9 f 9 f 9 f 9 f . . . . 
    . . . f 9 f 9 f 9 f 9 f . . . . 
    . . f f 9 f f f f f 9 f f . . . 
    . f f 9 9 9 9 9 9 9 9 9 f f . . 
    . f 9 f 9 9 9 9 9 9 9 f 9 f . . 
    . f 9 f 9 9 9 9 9 9 9 f 9 f . . 
    . f 9 f 9 9 9 9 9 9 9 f 9 f . . 
    . f 9 f 9 9 9 9 9 9 9 f 9 f . . 
    . f f f 9 9 9 9 9 9 9 f f f . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . . f f 9 f f f 9 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f c c c c c f f . . . . 
    . . . f c c c c c c c f . . . . 
    . . . f c f f f f f c f . . . . 
    . . . f c f c f c f c f . . . . 
    . . . f c f c f c f c f . . . . 
    . . f f c f f f f f c f f . . . 
    . f f c c c c c c c c c f f . . 
    . f c f c c c c c c c f c f . . 
    . f c f c c c c c c c f c f . . 
    . f c f c c c c c c c f c f . . 
    . f c f c c c c c c c f c f . . 
    . f f f c c c c c c c f f f . . 
    . . . f c c c c c c c f . . . . 
    . . . f f c f f f c f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 4 4 4 4 4 2 2 . . . . 
    . . . 2 4 4 4 4 4 4 4 2 . . . . 
    . . . 2 4 2 2 2 2 2 4 2 . . . . 
    . . . 2 4 2 4 2 4 2 4 2 . . . . 
    . . . 2 4 2 4 2 4 2 4 2 . . . . 
    . . 2 2 4 2 2 2 2 2 4 2 2 . . . 
    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
    . 2 4 2 4 4 4 4 4 4 4 2 4 2 . . 
    . 2 4 2 4 4 4 4 4 4 4 2 4 2 . . 
    . 2 4 2 4 4 4 4 4 4 4 2 4 2 . . 
    . 2 4 2 4 4 4 4 4 4 4 2 4 2 . . 
    . 2 2 2 4 4 4 4 4 4 4 2 2 2 . . 
    . . . 2 4 4 4 4 4 4 4 2 . . . . 
    . . . 2 2 4 2 2 2 4 2 2 . . . . 
    . . . . 2 2 2 . 2 2 2 . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 9 9 9 9 9 1 1 . . . . 
    . . . 1 9 9 9 9 9 9 9 1 . . . . 
    . . . 1 9 1 1 1 1 1 9 1 . . . . 
    . . . 1 9 1 9 1 9 1 9 1 . . . . 
    . . . 1 9 1 9 1 9 1 9 1 . . . . 
    . . 1 1 9 1 1 1 1 1 9 1 1 . . . 
    . 1 1 9 9 9 9 9 9 9 9 9 1 1 . . 
    . 1 9 1 9 9 9 9 9 9 9 1 9 1 . . 
    . 1 9 1 9 9 9 9 9 9 9 1 9 1 . . 
    . 1 9 1 9 9 9 9 9 9 9 1 9 1 . . 
    . 1 9 1 9 9 9 9 9 9 9 1 9 1 . . 
    . 1 1 1 9 9 9 9 9 9 9 1 1 1 . . 
    . . . 1 9 9 9 9 9 9 9 1 . . . . 
    . . . 1 1 9 1 1 1 9 1 1 . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    `,
img`
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . 6 6 7 7 7 7 7 6 6 . . . . 
    . . . 6 7 7 7 7 7 7 7 6 . . . . 
    . . . 6 7 6 6 6 6 6 7 6 . . . . 
    . . . 6 7 6 7 6 7 6 7 6 . . . . 
    . . . 6 7 6 7 6 7 6 7 6 . . . . 
    . . 6 6 7 6 6 6 6 6 7 6 6 . . . 
    . 6 6 7 7 7 7 7 7 7 7 7 6 6 . . 
    . 6 7 6 7 7 7 7 7 7 7 6 7 6 . . 
    . 6 7 6 7 7 7 7 7 7 7 6 7 6 . . 
    . 6 7 6 7 7 7 7 7 7 7 6 7 6 . . 
    . 6 7 6 7 7 7 7 7 7 7 6 7 6 . . 
    . 6 6 6 7 7 7 7 7 7 7 6 6 6 . . 
    . . . 6 7 7 7 7 7 7 7 6 . . . . 
    . . . 6 6 7 6 6 6 7 6 6 . . . . 
    . . . . 6 6 6 . 6 6 6 . . . . . 
    `,
img`
    . . . f f f f f f f . . . . . . 
    . . f f a a a a a f f . . . . . 
    . f f a a a 5 a a a f f . . . . 
    . f a a a a a a a a a f . . . . 
    . f f 3 1 1 1 1 1 3 f f . . . . 
    . . f 3 1 f 1 f 1 3 f . . . . . 
    . . f 3 1 f 1 f 1 3 f . . . . . 
    . f f 3 1 1 1 1 1 3 f f . . . . 
    f f a a a a a a a a a f f . . . 
    f a f a a a a a 5 a f a f . . . 
    f a f a a 5 a a a a f a f . . . 
    f a f a a a a a a a f a f . . . 
    f a f a a 5 a a 5 a f a f . . . 
    f f f a a a a a a a f f f . . . 
    . . f f a f f f a f f . . . . . 
    . . . f f f . f f f . . . . . . 
    `,
img`
    . . . c c c c c c c . . . . . . 
    . . c c f f f f f c c . . . . . 
    . c c f f f f f f f c c . . . . 
    . c f f f f f f f f f c . . . . 
    . c c 3 1 1 1 1 1 3 c c . . . . 
    . . c 3 1 f 1 f 1 3 c . . . . . 
    . . c 3 1 f 1 f 1 3 c . . . . . 
    . c c 3 1 1 1 1 1 3 c c . . . . 
    c c f f f f f f f f f c c . . . 
    c f c f f f f f f f c f c . . . 
    c f c f f f f f f f c f c . . . 
    c f c f f f f f f f c f c . . . 
    c f c f f f f f f f c f c . . . 
    c c c f f f f f f f c c c . . . 
    . . c c f c c c f c c . . . . . 
    . . . c c c . c c c . . . . . . 
    `,
img`
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . 3 3 a a a a a 3 3 . . . . . 
    . 3 3 a a a 5 a a a 3 3 . . . . 
    . 3 a a a a a a a a a 3 . . . . 
    . 3 3 5 1 1 1 1 1 5 3 3 . . . . 
    . . 3 5 1 f 1 f 1 5 3 . . . . . 
    . . 3 5 1 f 1 f 1 5 3 . . . . . 
    . 3 3 5 1 1 1 1 1 5 3 3 . . . . 
    3 3 a a a a a a a a a 3 3 . . . 
    3 a 3 a a a a a 5 a 3 a 3 . . . 
    3 a 3 a a 5 a a a a 3 a 3 . . . 
    3 a 3 a a a a a a a 3 a 3 . . . 
    3 a 3 a a 5 a a 5 a 3 a 3 . . . 
    3 3 3 a a a a a a a 3 3 3 . . . 
    . . 3 3 a 3 3 3 a 3 3 . . . . . 
    . . . 3 3 3 . 3 3 3 . . . . . . 
    `
]
l = 63
Gideon()
lucas()
list1.push(picture)
text_list = [
"CatMaster",
"BatGuy",
"AppleMan",
"Max969",
"Luke21",
"Gameboy9010",
"butch048",
"breetoGuy",
"KittyGirl1",
"Gid436",
"Batty",
"Cat222314",
"fire botxx"
]
for (let index = 0; index < 1000; index++) {
    text_list.push("" + randint(0, 9) + randint(0, 9) + randint(0, 9) + randint(0, 9) + randint(0, 9))
}
list2 = [
tiles.createMap(tiles.createTilemap(hex`64000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000020000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000200000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000002000000000000000000000000000400000000000000000000000000000000010101000001010100000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000010101000000000000000000000004030000000000000000000000000000000002000000000200000000000000000000000101010100000000000000000000000000000000000000000002020202020200000000000000000000000000000000000000000002000000000000020000000000040101010101010101010000010101000000020000000000000001010101010101000002020202000101010000000000000000000000000000000000020000000002000000000000000000000000000000010000000000020000000000000100000000000402020202020202020200000202020000000200000000020000000000000000000002020202020002020200000000000000000000000000000000000200000000020000000002020202020202020200020000000000000000000000000200000000000004020202020202020202000202020200000002000000000200000000000000000002020202020200020202000000000000000000000000000002000002000002000002020202000000000000000000000200000000000002000000000002000000000000040202020202020202020002020202000000000000000002000002020202020202020202020202020202020000000000000000000000000000020000020000020000000000000000000000000000000002000002020202020202020200020000000000000402020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200000000000200000000000000020202020202020202020202020202020202020202020202020202020202`, img`
    ...........................................................2.........................2..............
    ...........................................................2.........................2..............
    ...........................................................2.........................2..............
    ................222..222...................................2.........................222............
    .................2....2...........2222.....................222222.....................2......2......
    222222222..222...2.......2222222..2222.222.................2....2...............2.....2......2......
    222222222..222...2....2..........22222.222.................2....2....222222222.2............2.......
    222222222.2222...2....2.........222222.222..............2..2..2..2222..........2......2.....2.......
    222222222.2222........2..22222222222222222..............2..2..2................2..222222222.2.......
    222222222222222222222222222222222222222222222222222222222.....2.......222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060603030303030303030303030303030303000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606020202020202020202020202020202020000000000000000000000000000000005050505050505050505050505050505`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile9,myTiles.tile10], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
    `, [myTiles.transparency16], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
    `, [myTiles.transparency16], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
    `, [myTiles.transparency16], TileScale.Sixteen)),
tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
    `, [myTiles.transparency16], TileScale.Sixteen))
]
player_quofid += 1
tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100006060606060606060606060606060606060403030302010403030304040404060604030303030304030303040404040606040303030303040303030304040406060403030505050303050505040404060604030305030304030303050404040606040303050303040303030504040406060505050503030403030305040403060607030303030304030303050404040606040303030303030303030504040406060403030503030303030305040404060604030305030303030303050404040606040404050505030305050504040406060304040404040404040405040404060603040404040404040404050404040606060606060606060606060606060606`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . 2 2 2 . . 2 2 2 . . . 2 
    2 . . . 2 . . . . . . 2 . . . 2 
    2 . . . 2 . . . . . . 2 . . . 2 
    2 2 2 2 2 . . . . . . 2 . . . 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 . . . 2 . . . . . . 2 . . . 2 
    2 . . . 2 . . . . . . 2 . . . 2 
    2 . . . 2 2 2 . . 2 2 2 . . . 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile13,myTiles.tile25,myTiles.tile3,myTiles.tile5,myTiles.tile17], TileScale.Sixteen)))
scene.setBackgroundColor(8)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
controller.moveSprite(mySprite)
look = 0
rond = 1
let sprite_list = sprites.allOfKind(SpriteKind.npc)
scene.cameraFollowSprite(mySprite)
forever(function () {
	
})
forever(function () {
    for (let value7 of sprites.allOfKind(SpriteKind.npc)) {
        if (value7.tileKindAt(TileDirection.Center, myTiles.tile7)) {
            value7.destroy()
            info.changeScoreBy(1)
            npclist.push(value7.image)
            npc12.push(sprites.readDataString(value7, "name"))
            quofid += 1
            if (quofid == count - 10) {
                if (sprites.readDataBoolean(mySprite, "q")) {
                    tiles.destroySpritesOfKind(SpriteKind.Food)
                    tiles.destroySpritesOfKind(SpriteKind.npc)
                    spetate = false
                    sprites.setDataBoolean(mySprite, "q", false)
                    mySprite.setFlag(SpriteFlag.Ghost, false)
                    mySprite.setFlag(SpriteFlag.Invisible, false)
                    count = count - 10
                    controller.moveSprite(mySprite, 100, 0)
                    mySprite.ay = 100
                    if (count == 10) {
                        leve2 = randint(endgame1, endgame2)
                        level = list2[leve2]
                        tiles.loadMap(level)
                    } else {
                        leve2 = randint(_66, gg)
                        level = list2[leve2]
                        tiles.loadMap(level)
                    }
                    tiles.placeOnRandomTile(mySprite, myTiles.tile6)
                    tiles.placeOnRandomTile(mySprite, myTiles.tile13)
                    info.setScore(0)
                    for (let value8 of npclist) {
                        quofid = 0
                        info.setScore(0)
                        npc2 = sprites.create(value8, SpriteKind.npc)
                        sprites.setDataString(npc2, "name", npc12.shift())
                        if (Math.percentChance(50)) {
                            sprites.setDataNumber(npc2, "r", 1)
                        } else {
                            sprites.setDataNumber(npc2, "r", -1)
                        }
                        npc2.vx = randint(45, 75)
                        tiles.placeOnRandomTile(npc2, myTiles.tile6)
                    }
                    npclist = []
                    npc12 = []
                    scene.cameraFollowSprite(mySprite)
                } else {
                    game.over(false)
                    scene.setBackgroundColor(8)
                }
            }
        }
    }
})
forever(function () {
    if (spetate2 == 1 && (!(sprite_list.length <= 0) && controller.A.isPressed())) {
        scene.cameraFollowSprite(sprite_list.pop())
        pause(200)
    } else {
        sprite_list = sprites.allOfKind(SpriteKind.npc)
    }
})
forever(function () {
    if (look == l + 1) {
        picture = image.create(16, 16)
        picture = img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 1 1 1 1 1 8 . . . . . 
            . . . . 8 1 f 1 f 1 8 . . . . . 
            . . . . 8 1 f 1 f 1 8 . . . . . 
            . . . . 8 1 1 1 1 1 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . 8 . 8 8 8 8 8 8 8 . 8 . . . 
            . . 8 . 8 8 8 8 8 8 8 . 8 . . . 
            . . 8 . 8 8 8 8 8 8 8 . 8 . . . 
            . . 8 . 8 8 8 8 8 8 8 . 8 . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . 8 . . . 8 . . . . . . 
            `
        for (let index = 0; index < 20; index++) {
            doSomething7()
        }
    }
})
forever(function () {
    for (let value13 of sprites.allOfKind(SpriteKind.npc)) {
        if (value13.tileKindAt(TileDirection.Center, myTiles.tile24)) {
            scene.cameraFollowSprite(value13)
            game.setDialogCursor(value13.image)
            game.showLongText("" + sprites.readDataString(value13, "name") + " is the winer", DialogLayout.Center)
            game.over(false)
        }
    }
})
forever(function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
        if (!(sprites.readDataBoolean(value2, "q"))) {
            if (value2.tileKindAt(TileDirection.Center, myTiles.tile7)) {
                value2.setFlag(SpriteFlag.Invisible, true)
                value2.setFlag(SpriteFlag.Ghost, true)
                controller.moveSprite(value2)
                quofid += 1
                game.splash("qualify")
                sprites.setDataBoolean(value2, "q", true)
                mySprite.ay = 0
                spetate = true
                info.changeScoreBy(1)
                if (quofid == count - 10) {
                    tiles.destroySpritesOfKind(SpriteKind.Food)
                    tiles.destroySpritesOfKind(SpriteKind.npc)
                    spetate = false
                    sprites.setDataBoolean(mySprite, "q", false)
                    mySprite.setFlag(SpriteFlag.Ghost, false)
                    mySprite.setFlag(SpriteFlag.Invisible, false)
                    count = count - 10
                    controller.moveSprite(mySprite, 100, 0)
                    mySprite.ay = 100
                    if (count == 10) {
                        leve2 = randint(endgame1, endgame2)
                        level = list2[leve2]
                        tiles.loadMap(level)
                    } else {
                        leve2 = randint(_66, gg)
                        level = list2[leve2]
                        tiles.loadMap(level)
                    }
                    tiles.placeOnRandomTile(mySprite, myTiles.tile6)
                    tiles.placeOnRandomTile(mySprite, myTiles.tile13)
                    info.setScore(0)
                    for (let value3 of npclist) {
                        quofid = 0
                        info.setScore(0)
                        npc2 = sprites.create(value3, SpriteKind.npc)
                        if (Math.percentChance(50)) {
                            sprites.setDataNumber(npc2, "r", 1)
                        } else {
                            sprites.setDataNumber(npc2, "r", -1)
                        }
                        npc2.vx = randint(45, 75)
                        tiles.placeOnRandomTile(npc2, myTiles.tile6)
                    }
                    npclist = []
                    npc12 = []
                    scene.cameraFollowSprite(mySprite)
                }
            }
        }
    }
})
forever(function () {
    pause(2000)
    for (let value11 of tiles.getTilesByType(myTiles.tile15)) {
        mySprite2 = sprites.create(myTiles.tile15, SpriteKind.Enemy)
        mySprite2.vx += -60
        tiles.placeOnTile(mySprite2, value11)
    }
    for (let value12 of tiles.getTilesByType(myTiles.tile14)) {
        mySprite2 = sprites.create(myTiles.tile14, SpriteKind.Enemy)
        mySprite2.vx += -60
        tiles.placeOnTile(mySprite2, value12)
    }
})
forever(function () {
    if (leve2 == 0) {
        for (let value9 of sprites.allOfKind(SpriteKind.npc)) {
            if (value9.isHittingTile(CollisionDirection.Bottom)) {
                if (value9.isHittingTile(CollisionDirection.Left)) {
                    value9.vy += -100
                } else if (value9.isHittingTile(CollisionDirection.Right)) {
                    value9.vy += -100
                }
            }
        }
    } else if (leve2 >= 2) {
        for (let value10 of sprites.allOfKind(SpriteKind.npc)) {
            if (value10.isHittingTile(CollisionDirection.Bottom)) {
                if (value10.isHittingTile(CollisionDirection.Left)) {
                    value10.vy += -100
                } else if (value10.isHittingTile(CollisionDirection.Right)) {
                    value10.vy += -100
                }
            }
        }
    }
})
forever(function () {
    list2 = [
    tiles.createMap(tiles.createTilemap(hex`64000b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000002000002000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000002000202000200000000000000000000000000000000000000020200000000020000020000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000002000000000000000000000000000000000000020002000000000200000000000000000400000000000000000000000000000000010101000001010100000000000000000000000000000000000000000101010100010101000000000000000200000000020000000000000000000000000000000000020000010102020202000000000000000004030000000000000000000000050000000002000000000200000000000000000000000101010100000000000000000000000000000000000000000002020202020200000000000000000000000000000000000000000002000000000000020000000000040101010101010101010000010101000000020000000000000001010101010101000002020202000101010000000000000000000000000000000000020000000002000000000000000000000000000000010000000000020000000000000100000000000402020102020202020200000202020000000200000000000000000000000000000002020202020002020200000000000000000000000000000000000200000000020000000002020202020202020200020000000000000000000000000200000000000004020202020202020202000202020200000002000000000200000000000000000002020202020200020202000000000000000000000000000002000002000002000002020202000000000000000000000200000000000000000000000002000000000000040202020202020202020002020202000000000000000002000002020202020202020202020202020202020000000000000000000000000000020000020000020000000000000000000000000000000002000002020202020202020202010000000000000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020200000000000200000000000000020202020202020202020202020202020202020202020202020202020200`, img`
        .............................................................................................2......
        .....................................................................................2....2..2......
        ......................................................222..2.22.2...................22....2..2......
        ...........................................................2....2..................2.2....2.........
        ................222..222....................2222.222.......2....2.................2..222222.........
        .................2....2...........2222.....................222222.....................2......2......
        222222222..222...2.......2222222..2222.222.................2....2...............2.....2......2......
        222222222..222...2...............22222.222.................2....2....222222222.2............2.......
        222222222.2222...2....2.........222222.222..............2..2..2..2222..........2............2.......
        222222222.2222........2..22222222222222222..............2..2..2................2..22222222222......2
        222222222222222222222222222222222222222222222222222222222.....2.......22222222222222222222222222222.
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile13], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`10003c00000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060601010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606030303030303030303030303030303030000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060603030303030303030303030303030303000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606020202020202020202020202020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060303030303030303030303030303030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000060606060606060606060606060606060202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006060606060606060606060606060606030303030303030303030303030303030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060601010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005050505050505050505050505050505`, img`
        ................
        ................
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        ................
        2222222222222222
        ................
        ................
        ................
        ................
        ................
        ................
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile9,myTiles.tile10], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`3c001000000000000000000005020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020500000000000000000000000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000005060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060500000000000000000000000001040104010101040101010101010401010101010101010104010101010101010101010104010101010104010101040100000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ........222222222222222222222222222222222222222222222222....
        ........222222222222222222222222222222222222222222222222....
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile12,myTiles.tile20,myTiles.tile13], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`3200110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040300000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000004020202020202020202020200020200000000000000000000000000000000000000000000020202020202020202020202020200000000000000000000000000000000000000000101010000000000000000000000000202020202020202020202020202020000000000000000000000000000000001010100000000000000000000000000000002020202020202020202020202020202030000000000000000000500000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020202020002020000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202000000000000000000010101000000000000000002020202020202020202020202020202020202000000000000000000000000000000000106010000000000000000000000020202020202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000202020202020202020202020202020202020202020000000000000000000000000000000000000000000000000000000002020202020202020202020202020202020202020202030000000000000000000000000000000000000001010100000000020202020202020202020202020202020202020202020202020202020202020202020002020000000000000000000000000202020202020202020202020202020202020202020202020202020202020202020202000000000001010100000000000002020202020202020202020202020202020202020202020202000000000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020203000000000000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
        ..................................................
        ..................................................
        22222222222.22......................22222222222222
        ....................222............222222222222222
        ................222...............2222222222222222
        .................................22222222222222222
        22222222222.22..................222222222222222222
        22222222222.........222........2222222222222222222
        ................222...........22222222222222222222
        .............................222222222222222222222
        ............................2222222222222222222222
        ....................222....22222222222222222222222
        22222222222.22............222222222222222222222222
        22222222222.....222......2222222222222222222222222
        ........................22222222222222222222222222
        .......................222222222222222222222222222
        22222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile13,myTiles.tile12], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`32001200000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000040400000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000004040200000000000003000000060000000000000000000000000000000000000000000000000000000000000000000000000404010101010101010100000006000000000000000000000000000606060606060606060606060606060606060101010101010101010101010101000000000600000000000000000000000000060606060600000000000000000000000000000000000004040101010101010000000000060000000000000000000000000606060606000000000000000000000000000000000000000404010101010100000000000006000000000000000000000000060606060000000000000000000000000000000000000000040401010100000000000000000600000000000000000000000606060600000000000001010101010101010101010101010101010101000000000000000000060000000000000000000000060606000000000000010101010101010101010101010101010101010000000000000000000006000000000000000000000606060000000000000101010101010101010101010101010101010100000000000000000000000000000000000000000006060600000000000001010101010101010101010101010101010101010000000000000000000000000000000000000000000606000000000000010101010101010101010101010101010101010101000000000000000000000707070707070707070706060000000000000101010101010101010101010101010101010101010107070707070707070707050505050505050505050600000000000001010101010101010101010101010101010101010101010505050505050505050500000000000000000005000000000000010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        ...........2......................................
        ...........2......................................
        ...........2......................................
        22222222...2.............2222222222222222222222222
        2222222....2.............22222....................
        222222.....2............22222.....................
        22222......2............2222......................
        222........2...........2222......22222222222222222
        22.........2...........222......222222222222222222
        2..........2..........222......2222222222222222222
        .....................222......22222222222222222222
        .....................22......222222222222222222222
        ....................22......2222222222222222222222
        ..........22222222222......22222222222222222222222
        2222222222.........2......222222222222222222222222
        .........................2222222222222222222222222
        ........................22222222222222222222222222
        22222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile13,myTiles.tile7,myTiles.tile4,myTiles.tile5,myTiles.tile10], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`6400100006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004010000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040100000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050101010101000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000007000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000501010101010000000000000000000000000000000000000000000000000000000000000000000000000600010101010101010101010101010101010101010100000001010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000101010101010001010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ...............................................................2....................................
        ...............................................................2....................................
        ...........................................................22222....................................
        ...........................................................22222....................................
        ..22222222222222222222...222222222222222222222222222222222222222....................................
        ................................222222.22...........................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile9,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile13], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`6400320002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101000000000a000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010000000000000000000000000000000000000000000000000000000404040404090905090907070707070707070909090606060606060606060900000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010000000000000000000000000000000005050505050904040404040000050000070707070707070700000006060606060606060609000000000100000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101000000000000050505050500040404040400000500000707070707070707000000060606060606060606090004000101010000050505050505000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101090505050505000404040404000005000007070707070707070000000606060606060606060900000001010100000505050505050000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010005050505050004040404040000050000070707070707070700000006060606060606060601010101010101000005050505050500000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010100050505050500000000000000000000000707070707070707000000000006060606060606010101010101010000050505050505000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000060606060606010101010101010100000005050505050000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000000000010101010101010101000000000000000000040404040404040404040404010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000003010300000000000000000000000000000000000000000101010101010101010000000000000000000404040404040404040404040101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010909090901010101010101010100000000000000000004040404040404040404040401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000001010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000001010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103000000010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000001010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000001010101010101010100040404040404040404040404040404040400000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000010101010101010101000404040404040404040404040404040404000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000101010101010101010004040404040404040404040404040404040000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000001010101010101010100040404040404040404040404040404040400000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000010101010101010101000101010101010101010101010101010101000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010001000001010101010101010001010101010101010101010101010101010000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010100010101010101010101010101010101010100000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000101010101010101000101010101010101010101010101010101000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100010001010101010101010001010101010101010101010101010101000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010100010101010101010101010101010101010000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000100000101010101010101000101010101010101010101010101010100000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000001010101010101010001010101010101010101010101010101000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000100010101010101010100010101010101010101010101010101010000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000101010101010101000101010101010101010101010101010100000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010001000001010101010101010001010101010101010101010101010101000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000010101010101010100010101010101010101010101010101010000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010001000101010101010101000101010101010101010101010101010100000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000090000000000000000000000000000000000080808080101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000900000000000000000000000000000000000808080801010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000009000000000000000000000000000000000008080808010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        2222222222.......................................2..................................................
        222222222222222...........................22222..2..22222222...222222222............................
        22222222222222222222................22222.22222..2..22222222...222222222.....2......................
        222222222222222222222222222222......22222.22222..2..22222222...222222222..2.222..222222.............
        22222222222222222222222222222222222.22222.22222..2..22222222...222222222....222..222222.............
        22222222222222222222222222222222222.22222.22222..2..22222222...2222222222222222..222222.............
        22222222222222222222222222222222222.22222...........22222222.....22222222222222..222222.............
        22222222222222222222222222222222222..............................22222222222222...22222.............
        22222222222222222222222222222222222...................................222222222.........222222222222
        22222222222222222222222222222222222............222....................222222222.........222222222222
        222222222222222222222222222222222222222222222222222222222222222222....222222222.........222222222222
        222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
        222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
        222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
        222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
        222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
        222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
        222222222222222222222222222222222222222222222222222222222222222222....222222222.....................
        2222222222222222222222222222222222222222222222222222222222222222222...222222222.....................
        2222222222222222222222222222222222222222222222222222222222222222222...222222222.....................
        2222222222222222222222222222222222222222222222222222222222222222222...222222222.....................
        2222222222222222222222222222222222222222222222222222222222222222222...222222222.....................
        2222222222222222222222222222222222222222222222222222222222222222222...222222222.22222222222222222...
        2222222222222222222222222222222222222222222222222222222222222222222...222222222.22222222222222222...
        2222222222222222222222222222222222222222222222222222222222222222222...222222222.22222222222222222...
        222222222222222222222222222222222222222222222222222222222222222222....222222222.22222222222222222...
        2222222222222222222222222222222222222222222222222222222222222222222...222222222.22222222222222222...
        2222222222222222222222222222222222222222222222222222222222222222222.2..22222222.22222222222222222...
        2222222222222222222222222222222222222222222222222222222222222222222....22222222.22222222222222222...
        2222222222222222222222222222222222222222222222222222222222222222222....22222222.22222222222222222...
        22222222222222222222222222222222222222222222222222222222222222222222.2.22222222.2222222222222222....
        2222222222222222222222222222222222222222222222222222222222222222222....22222222.2222222222222222....
        2222222222222222222222222222222222222222222222222222222222222222222.2..22222222.2222222222222222....
        2222222222222222222222222222222222222222222222222222222222222222222....22222222.2222222222222222....
        22222222222222222222222222222222222222222222222222222222222222222222.2.22222222.2222222222222222....
        2222222222222222222222222222222222222222222222222222222222222222222....22222222.2222222222222222....
        2222222222222222222222222222222222222222222222222222222222222222222.2..22222222.2222222222222222....
        2222222222222222222222222222222222222222222222222222222222222222222....22222222.2222222222222222....
        22222222222222222222222222222222222222222222222222222222222222222222.2.22222222.2222222222222222....
        2222222222222222222222222222222222222222222222222222222222222222222.................................
        2222222222222222222222222222222222222222222222222222222222222222222.................................
        2222222222222222222222222222222222222222222222222222222222222222222.................................
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile12,myTiles.tile4,myTiles.tile5,myTiles.tile18,myTiles.tile19,myTiles.tile7,myTiles.tile20,myTiles.tile13], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`5000500000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010200000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020000000000000000000000040000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000001000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000808080808080808080808080808080808080808080808010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101060606060606060606060606060606060606060606060601010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101080808080808080808080808080808080808080808080101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010106060606060606060606060606060606060606060606010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010108080808080808080808080808080808080808080808010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010106060606060606060606060606060606060606060600010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000007070700000000000707070000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000707070000000000070707000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000070707000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000707070000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000070707000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000007070700000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000060606000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000006060600000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000606060000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000007070700000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000707070000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000070707000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010008080808080808080808080808080808080808080101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010606060606060606060606060606060606060606060101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000606060000000606060000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000060606000000060606000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000006060600000006060600000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000060606000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000006060600000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000606060000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101080808080808080808080808080808080808080808010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101070707070707070707070707070707070707070707010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000060606000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000006060600000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000606060000000100000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000010000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000101000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000100000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010108080808080808080808080808080808080808080101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010100000000000000000006060600000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000606060000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000060606000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000006000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000600000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000006060600000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000606060000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000060606000000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010808080808080808080808080808080808080101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010707070707070707070707070707070707070101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010505050505050505050505050505050503010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000700000007000007000003010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000700000000000000030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000700000003010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
        ...............................2222222222222222222222222222222222222222222222222
        ...............................2222222222222222222222222222222222222222222222222
        ...............................2222222222222222222222222222222222222222222222222
        ...............................2222222222222222222222222222222222222222222222222
        ...............................2222222222222222222222222222222222222222222222222
        ...............................2222222222222222222222222222222222222222222222222
        2222........2..................2222222222222222222222222222222222222222222222222
        22222..........................2222222222222222222222222222222222222222222222222
        222222.........................2222222222222222222222222222222222222222222222222
        2222222........................2222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222......................2222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222......................222222222222222222222222222222222222222222222222
        22222222222222222222222222222222.22222222222222222222222222222222222222222222222
        222222222222......................2222222222222222222222222222222222222222222222
        2222222222222......222.....222.....222222222222222222222222222222222222222222222
        22222222222222.....222.....222......22222222222222222222222222222222222222222222
        222222222222222....222..............22222222222222222222222222222222222222222222
        2222222222222222........222..........2222222222222222222222222222222222222222222
        22222222222222222.......222...........222222222222222222222222222222222222222222
        222222222222222222......222............22222222222222222222222222222222222222222
        2222222222222222222.....................2222222222222222222222222222222222222222
        22222222222222222222..........222........222222222222222222222222222222222222222
        22222222222222222222..........222.........22222222222222222222222222222222222222
        222222222222222222222.........222..........2222222222222222222222222222222222222
        2222222222222222222222................222...222222222222222222222222222222222222
        22222222222222222222222...............222....22222222222222222222222222222222222
        222222222222222222222222..............222.....2222222222222222222222222222222222
        2222222222222222222222222.....................2222222222222222222222222222222222
        22222222222222222222222222.....................222222222222222222222222222222222
        222222222222222222222222222.....................22222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222.....................222222222222222222222222222222
        222222222222222222222222222222.....................22222222222222222222222222222
        2222222222222222222222222222222.....................2222222222222222222222222222
        2222222222222222222222222222222..........222...222...222222222222222222222222222
        22222222222222222222222222222222.........222...222....22222222222222222222222222
        222222222222222222222222222222222........222...222.....2222222222222222222222222
        2222222222222222222222222222222222.....................2222222222222222222222222
        22222222222222222222222222222222222.........222.........222222222222222222222222
        222222222222222222222222222222222222........222..........22222222222222222222222
        2222222222222222222222222222222222222.......222...........2222222222222222222222
        22222222222222222222222222222222222222.....................222222222222222222222
        222222222222222222222222222222222222222.....................22222222222222222222
        2222222222222222222222222222222222222222.....................2222222222222222222
        22222222222222222222222222222222222222222.....................222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222.....................22222222222222222
        2222222222222222222222222222222222222222222..........222........2222222222222222
        22222222222222222222222222222222222222222222.........222.........222222222222222
        222222222222222222222222222222222222222222222........222...2......22222222222222
        2222222222222222222222222222222222222222222222.....................2222222222222
        22222222222222222222222222222222222222222222222................2....222222222222
        222222222222222222222222222222222222222222222222..22.................22222222222
        2222222222222222222222222222222222222222222222222...........2........22222222222
        22222222222222222222222222222222222222222222222222....................2222222222
        222222222222222222222222222222222222222222222222222....................222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222.........222........2222222
        22222222222222222222222222222222222222222222222222222.........222.........222222
        222222222222222222222222222222222222222222222222222222........222..........22222
        2222222222222222222222222222222222222222222222222222222................2....2222
        22222222222222222222222222222222222222222222222222222222...2................2222
        222222222222222222222222222222222222222222222222222222222....................222
        2222222222222222222222222222222222222222222222222222222222..........222.......22
        22222222222222222222222222222222222222222222222222222222222.........222........2
        222222222222222222222222222222222222222222222222222222222222........222........2
        2222222222222222222222222222222222222222222222222222222222222..................2
        22222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222.................
        2222222222222222222222222222222222222222222222222222222222222222................
        2222222222222222222222222222222222222222222222222222222222222222................
        22222222222222222222222222222222222222222222222222222222222222222....2...2..2...
        222222222222222222222222222222222222222222222222222222222222222222..............
        2222222222222222222222222222222222222222222222222222222222222222222....2........
        22222222222222222222222222222222222222222222222222222222222222222222.......2....
        222222222222222222222222222222222222222222222222222222222222222222222...........
        22222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile6,myTiles.tile7,myTiles.tile13,myTiles.tile20,myTiles.tile5,myTiles.tile4,myTiles.tile10], TileScale.Sixteen)),
    tiles.createMap(tiles.createTilemap(hex`5a00100000000000000000000000000000000000000000000000000000000000000000080808080808080808000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a01030000000000000000000000000000000000000000000000000000000000080808080808080808000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a02020400000000000000000000000000000000000000000000000000000000080808080808080808000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a02020204000000000000000000000000000000000000000000000000000000080808080808080808000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a020202020400000000000000000000000000000000000000000000000000000c0808080808080808000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a020202020400000000000000000000000000000000000000000000000000000c0808080808080808000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a020202020204000000000000000000000000000000000000000000000b0000080808080808080808000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a020202020204000000000606060606060606060606060606060606060b0000080808080808080808000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a02020202020808080808050505050505050505050505050505050505020000000808080808080808000000000000000000000000000000000000000000000000000000000000000009000900090000090009000900090000090a02020202020808080808040404040404040404040404040404040402020000000808080808080808000000000000000000000000000000000000000000000000000000000000090000000000000000000000000000000000000a02020202020808080808000000000000000000000000000000000202020000000808080808080808000000000000000000000000000000000000000009000900090009000900000000000000000000000000000000000000000a02020202020808080808000000000000000000000000000000020202020000000808080808080808000000000000000000000000000000000000000009000000000000000000000000000000000000000000000000000000000a02020202020808080808000000000000000000000000000002020202020000000808080808080808000000000000000000000000090000000000090009000000000000000000000000000000000000000000000000000000000a02020202020808080808000000000000000000000000000202020202020000000808080808080808000000000000000000000009090000000009090000000000000000000000000000000000000000000000000000000000000a02020202020808080808020702020202020202020207020202020202020000000000000000000000000000000000000000000909090000000909090000000000000000000000000000000000000000000000000000000000000a020202020208080808080202020202020202020202020202020202020209090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909`, img`
        ...............................222222222..................................................
        ...............................222222222..................................................
        22.............................222222222..................................................
        222............................222222222..................................................
        2222............................22222222..................................................
        2222............................22222222..................................................
        22222..........................222222222..................................................
        22222..........................222222222..................................................
        22222222222222222222222222222...22222222................................2.2.2..2.2.2.2..2.
        2222222222.................22...22222222..............................2...................
        2222222222................222...22222222....................2.2.2.2.2.....................
        2222222222...............2222...22222222....................2.............................
        2222222222..............22222...22222222............2.....2.2.............................
        2222222222.............222222...22222222...........22....22...............................
        22222222222.222222222.2222222.....................222...222...............................
        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile6,myTiles.tile18,myTiles.tile25,myTiles.tile20,myTiles.tile5,myTiles.tile10,myTiles.tile12,myTiles.tile19,myTiles.tile4,myTiles.tile7,myTiles.tile14,myTiles.tile15], TileScale.Sixteen))
    ]
    list2.push(tiles.createMap(tiles.createTilemap(hex`6400100000000000000000000000000000000000000000000100000001000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000040000000004000000000008030000000000000000000000070000000000010000000100000000000100000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000400000000040000000000080101010101010100000101010101010100010101010101010404040404040404040404040404040400000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000004000000000400000000000800000000000000000000000000000000000101010101010104040404040404040404040404040000000000000606060000000000000000000000000000000000000000000000000000000000000000000004000000000000040000000004000000000008000000000000000000000000000000000001010101010101040404040404040404040400000000000000000606060000000000000000000000000000000000000000000000000000000000000000040000000000000400000000000400000000000000080002020202020202020202020202020000010101010101010404040404040404000000000000000000000606060000000606040404040404040404040404040404040000000000000000000000000400000000000004000000000004000000000000000800000000000000000000000000000000000101010101010104040404040400000000000000000000000606060000000606060404000000000000000000000000000400000404000004040404040404040404040404040404040404040404040404000008010000000000000000000000000000000001010101010101040404000000000000000000000000000006060000000606060604040000000000000000000000000004040404040000040404040404040404040404040404040404040404040404040000080001000000000000000000000000010100010101010101010400000000000000000000000005050500000000000606060606040400000000000000000000000000040404040400000000000000000000000000000000000000000000000000000404000800000101000000000000000001010000000101010101010100000000000000000005050000050505000000000505050505050404000000000000000000000000000404040404000000000000000000000000000000000000000000000000000004040008000000000000000000000000000000000001010101010101000000000005050505050505000505050000000505050505050504040000000000000000000000000004040404040000000000000000000000000000000000000000000000000000040400080000000000000000000000000000000000000000000000000000010202020202020202050000000000000505050505050505040400000000000000000000000000040404040400000000000000000000000000000000000000000000000000000404000800000000000000000000000000000000000000000000000000010102020202020202020500000000000505050505050505050404000000000000000000000000000404040404000000000000000000000000000000000000000000000000000004040008000000000000000000000000000000000000000000000000010101020202020202020205050505050505050505050505050504040000000000000000000000000004040404040000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000001000101010202020202020202050505050505050505050505050505040400000000000000000000000000040404040400000000000000000000000000000000000000000000000000000000000801010101010101010101010101010101010101010101010101010102020202020202020505050505050505050505050505050404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`, img`
        ....................2...2.......2................................................2......2....2......
        ..................2...2.....2......2.............................................2......2....2......
        2222222..2222222.22222222222222222222222.........................................2......2....2......
        .................222222222222222222222......222..................................2......2....2......
        .................222222222222222222........222................................2......2.....2........
        .22222222222222..222222222222222..........222...222222222222222222............2......2.....2........
        .................2222222222222...........222...22222.............2..22..2222222222222222222222222...
        2................2222222222..............22...222222.............22222..2222222222222222222222222...
        .2............22.22222222............222.....2222222.............22222..........................22..
        ..22........22...2222222.........22..222....22222222.............22222..........................22..
        .................2222222.....2222222.222...222222222.............22222..........................22..
        ..........................2222222222......2222222222.............22222..........................22..
        .........................22222222222.....22222222222.............22222..........................22..
        ........................2222222222222222222222222222.............22222..............................
        ......................2.2222222222222222222222222222.............22222..............................
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile4,myTiles.tile18,myTiles.tile19,myTiles.tile13,myTiles.tile24], TileScale.Sixteen)))
    list2.push(tiles.createMap(tiles.createTilemap(hex`c80010000400000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070000000000000007000000000000000700000000000700000008010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007000000000000000700000000000000070000000000070000000801010101010101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010000000000000000000000000000000000000000000000000000000000000700000000000000070000000000000007000000000007000000080101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010106060606060606060600000000000000000000000000000000000000000000070000000000000007000000000000000700000000000700000008010101010101010103030300000000000001010000000000000000000000000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010106060101010106060606060606000000000000000000000000000000000000000007000000000000000700000000000000070000000000070000000801010101010101010303030303030303010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000707070707070707070000000101010101010101010101060101010101010106060606060606000000000000000000000000000000000000000700000000000000070000000000000007000000000007000000080101010101010101030303030303030301010101010100000000000000000000000000000000000000000000000003030303030303000000000000000000000000000000000000000000000000000000000000000000000000000000000303030000000000000000000000000000000000000707070707070707070707070701010101010101010101010601010101010101010106060606060606000000000000000000000000000000000000070000000000000007000000000000000700000000000700000008010101010101010103030303030303030101010101010000000000000000000001010000010101010101010101010303030303030000000307000000070707000000070600000002020202000002020200000002020200000000000303030303030000000000000000000000000000000007070707070707070707070707070701010101010101010106010101010101010101010606060606060606000000000000000000000000000000070000000000000007000000000000000700000000000700000000000801010101010101010303030303030303010101010101000000000000000000000101000001010101010101010101030303030300000003030707000000000000000707060600000000000000000000000000000000000000020203030303030303030300000000000000000000000000070202020203030303030303070701010701010101010101010601010101010101010101010606060606060600000000000000000000000000000707000000000000070700000000000007070000000007070000000000080101010101010101030303030303030301010101010101010101010101010101010100000101010101010101010103030303000000030303070707000000000007070706060600000000000000000000000000000000000202020303030303030303030300000000000202020200000207020202030303030202020203010101070101010106060606060606010101010101010101010606060606060607000000000000000000000007070700000000000707070000000000070707000000070707000000000008010101010101010103030303030303030101010101010101010101010101010101010000010101010101010101010303030000000303030307070707000000070707070606060600000000000000000000000000000002020202030303030303030303030300020202020202020002070202020303030303030302020103070707070101060606060606060606010101010101010101060606060606060707070707070707070707070707070707070707070707070707070707070707070707070707070707070701010101010101010303030303030303010101010101010101010101010101010101000001010101010101010101030300000003030303030707070707070707070707060606060600000000000000000000000000020202020203030303030303030303030202020202020202000207020203030303030303030202010103070707010606060606060606060606010101010101010106060606060606070707070707070707070707070707070707070707070707070707070707070707070707070707070707070101010101010101030303030303030301010101010101010101010101010101010100000101010101010101010103000000030303030303070707070707070707070706060606060600000000000000000000000202020202020303030303030303030303020202020202020202020702020303030303030303030201010307070701060606060606060606060601010101010101010606060606060607070707070707070707070707070707070707070707070707070707070707070707070707070707070707010101010101010103030303030303030101010101010101010101010101010101010000010101010101010101010000000303030303030307070707070707070707070606060606060600000000020000000002020202020202030303030303030303030302020202020202020202070202030303030303030303020101030707070106060606060606060606060101010101010101060606060606060707070707070707070707070707070707070707070707070707070707070707070707070707070707070701010101010101010303030303030303010101010101010101010101010101010101000001010101010101010101000003030303030303030707070707070707070707060606060606060600000002000000000202020202020203030303030303030303030202020202020202020207020203030303030303030302010103070707010606060606060606060606010101010101010106060606060606070707070707070707070707070707070707070707070707070707070707070707070707070707070707070101010101010101030303030303030301010101010101010101010101010101010100000000000000000000000000030303030303030303070707070707070707070706060606060606060602020202020202020202020202020303030303030303030303020202020202020202020702020303030303030303030202010301010706060606060606060606060601010101010101010606060606060607070707070707070707070707070707070707070707070707070707070707070707070707070707070707`, img`
        .............................................................................................................................................................................2.......2.......2.....2....
        22222222.....................................................................................................................................................................2.......2.......2.....2....
        22222222............................................................................................................................22222222222..............................2.......2.......2.....2....
        22222222...........................................................................................................................22222222222222222222......................2.......2.......2.....2....
        22222222222......22..........................................2...................................................................22222222222..22222222222....................2.......2.......2.....2....
        2222222222222222222.................................................................................................222222222...22222222222.22222222222222...................2.......2.......2.....2....
        2222222222222222222222........................2222222........................................222..................222222222222222222222222.2222222222222222..................2.......2.......2.....2....
        2222222222222222222222..........22..2222222222222222...22...222...22...2222..222...222.....222222................2222222222222222222222222222222222222222222...............2.......2.......2.....2......
        2222222222222222222222..........22..222222222222222...2222.......2222...................22222222222.............22222222222222222222222222222222222222222222..............22......22......22....22......
        2222222222222222222222222222222222..22222222222222...222222.....222222.................2222222222222.....2222..22222222222222222222222222222222222222222222222...........222.....222.....222...222......
        2222222222222222222222222222222222..2222222222222...22222222...22222222...............222222222222222.2222222.222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222..222222222222...222222222222222222222.............222222222222222222222222.222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222..22222222222...22222222222222222222222...........22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222..2222222222...2222222222222222222222222....2....222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222..2222222222..222222222222222222222222222...2....222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222.............222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile13,myTiles.tile18,myTiles.tile19,myTiles.tile24], TileScale.Sixteen)))
})
forever(function () {
    for (let value4 of sprites.allOfKind(SpriteKind.npc)) {
        if (value4.tileKindAt(TileDirection.Center, myTiles.tile9)) {
            value4.destroy()
            info.changeScoreBy(1)
            if (info.score() == 10) {
                for (let value5 of sprites.allOfKind(SpriteKind.npc)) {
                    npclist.push(value5.image)
                    npc12.push(sprites.readDataString(value5, "name"))
                }
                sprites.setDataBoolean(mySprite, "q", false)
                count = count - 10
                tiles.destroySpritesOfKind(SpriteKind.npc)
                tiles.destroySpritesOfKind(SpriteKind.Food)
                tiles.destroySpritesOfKind(SpriteKind.Enemy)
                game.splash("qualify")
                controller.moveSprite(mySprite, 0, 0)
                quofid = 0
                mySprite.ay = 100
                if (count == 10) {
                    leve2 = randint(endgame1, endgame2)
                    level = list2[leve2]
                    tiles.loadMap(level)
                } else {
                    leve2 = randint(_66, gg)
                    level = list2[leve2]
                    tiles.loadMap(level)
                }
                tiles.placeOnRandomTile(mySprite, myTiles.tile6)
                tiles.placeOnRandomTile(mySprite, myTiles.tile13)
                info.setScore(0)
                for (let value6 of npclist) {
                    quofid = 0
                    info.setScore(0)
                    npc2 = sprites.create(value6, SpriteKind.npc)
                    npc2.vx = randint(45, 75)
                    sprites.setDataString(npc2, "name", npc12.shift())
                    tiles.placeOnRandomTile(npc2, myTiles.tile6)
                    if (Math.percentChance(50)) {
                        sprites.setDataNumber(npc2, "r", 1)
                    } else {
                        sprites.setDataNumber(npc2, "r", -1)
                    }
                }
                npclist = []
                npc12 = []
                scene.cameraFollowSprite(mySprite)
                controller.moveSprite(mySprite, 100, 0)
                scene.setBackgroundColor(8)
                if (count <= 0) {
                    blockSettings.writeNumber("list", 1 + blockSettings.readNumber("list"))
                    game.over(true)
                }
            }
        }
    }
})
game.onUpdateInterval(500, function () {
    for (let value18 of tiles.getTilesByType(myTiles.tile12)) {
        list55 = [img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, img`
            4 4 4 . . 4 4 4 4 4 . . . . . . 
            4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
            b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
            . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
            . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
            b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
            . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
            . . c 4 4 d 4 4 4 4 4 d d 5 d c 
            . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
            . . . . c c b 4 4 4 b b 4 5 4 4 
            . . . . . . c c c c c c b b 4 . 
            `, img`
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 8 6 6 . . . 6 8 . . 
            . . . e e e 8 8 6 6 . 6 7 8 . . 
            . . e 2 2 2 2 e 8 6 6 7 6 . . . 
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
            e 2 2 2 2 2 2 2 4 e 2 e e c . . 
            e e 2 e 2 2 4 2 2 e e e c . . . 
            e e e e 2 e 2 2 e e e c . . . . 
            e e e 2 e e c e c c c . . . . . 
            . c c c c c c c . . . . . . . . 
            `, img`
            . . . . . . . . . . . 6 6 6 6 6 
            . . . . . . . . . 6 6 7 7 7 7 8 
            . . . . . . 8 8 8 7 7 8 8 6 8 8 
            . . e e e e c 6 6 8 8 . 8 7 8 . 
            . e 2 5 4 2 e c 8 . . . 6 7 8 . 
            e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
            e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
            e 2 e e 2 2 2 2 e e e e c 6 8 . 
            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
            . c 2 e e e 2 e 2 4 2 2 2 2 c . 
            . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
            . . . e c c e c 2 2 2 2 2 2 2 e 
            . . . . . . . c 2 e e 2 2 e 2 c 
            . . . . . . . c e e e e e e 2 c 
            . . . . . . . . c e 2 2 2 2 c . 
            . . . . . . . . . c c c c c . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 6 5 5 5 . . . . . 
            . . . 5 4 4 4 4 4 4 4 5 . . . . 
            . . 5 4 4 5 5 4 4 4 4 4 5 . . . 
            . 5 4 4 5 5 4 4 4 4 4 4 4 5 . . 
            . 5 4 5 5 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 5 5 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . . 5 4 4 4 4 4 4 4 4 4 5 . . . 
            . . . 5 4 4 4 4 4 4 4 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `]
        mySprite2 = sprites.create(list55[randint(0, 4)], SpriteKind.Food)
        if (!(tiles.tileIsWall(tiles.locationInDirection(value18, CollisionDirection.Bottom)))) {
            mySprite2.ay += 100
        } else {
            mySprite2.ay += -100
        }
        if (mySprite.x > mySprite2.x) {
            mySprite2.ax += 60
        } else {
            mySprite2.ax += -60
        }
        mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
        tiles.placeOnTile(mySprite2, value18)
    }
})
game.onUpdateInterval(500, function () {
    if (leve2 == 1) {
        for (let value14 of sprites.allOfKind(SpriteKind.npc)) {
            if (Math.percentChance(50)) {
                if (sprites.readDataNumber(value14, "r") == 1) {
                    value14.vx = randint(90, 130)
                    value14.ay = 100
                } else {
                    value14.vx = randint(-90, -130)
                    value14.ay = 100
                }
            } else {
                if (Math.percentChance(50)) {
                    sprites.setDataNumber(value14, "r", 2)
                } else {
                    sprites.setDataNumber(value14, "r", 1)
                }
            }
        }
    } else if (leve2 == 2) {
        for (let value15 of sprites.allOfKind(SpriteKind.npc)) {
            if (sprites.readDataNumber(value15, "r") == 2) {
                value15.vx = randint(90, 130)
                value15.ay = 100
            } else {
                value15.vx = randint(-90, -130)
                value15.ay = 100
            }
            if (tiles.tileIs(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value15), CollisionDirection.Left), CollisionDirection.Bottom), myTiles.transparency16)) {
                sprites.setDataNumber(value15, "r", 1)
            } else if (tiles.tileIs(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value15), CollisionDirection.Right), CollisionDirection.Bottom), myTiles.transparency16)) {
                sprites.setDataNumber(value15, "r", -1)
            }
        }
    } else if (leve2 == 5) {
        for (let value16 of sprites.allOfKind(SpriteKind.npc)) {
            if (Math.percentChance(50)) {
                if (sprites.readDataNumber(value16, "r") == 1) {
                    value16.vx = randint(90, 130)
                    value16.ay = 100
                } else {
                    value16.vx = randint(-90, -130)
                    value16.ay = 100
                }
            } else {
                if (Math.percentChance(50)) {
                    sprites.setDataNumber(value16, "r", 2)
                } else {
                    sprites.setDataNumber(value16, "r", 1)
                }
            }
        }
    } else {
        for (let value17 of sprites.allOfKind(SpriteKind.npc)) {
            value17.vx = randint(90, 130)
            value17.ay = 100
        }
    }
})

import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("space-ship", "sprites/space-ship.png")
loadSprite("wall", "sprites/wall.png")
loadSprite("space-invader", "sprites/space-invader.png")

// add a character to screen
const j = add([
  // list of components
  sprite("space-ship"),
  pos(height() / 2, width() / 2),
  origin("center"),
  area(),
])

// add a kaboom on mouse click
onClick(() => {
  addKaboom(mousePos())
})

// burp on "b"
onKeyPress("b", burp)

addLevel([
  "!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   $",
  "!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   $",
  "!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx   $",
  "!                                $",
  "!                                $",
  "!                                $",
  "!                                $",
  "!                                $",
  "!                                $",
  "!                                $",

], {
  height: 22,
  width: 30,
  "x": () => [
    sprite("space-invader")

  ],
  "!": () => [
    sprite("wall"),
    "left-wall"
  ],
  "$": () => [
    sprite("wall"),
    "right-wall"


  ]
})
const un = 20

keyDown("right", () => {
  v.move(un, 0)
})
keyDown("left", () => {
  v.move(-un, 0)
})
layers([
  "bg",
  "obj",
  "ui",
], "bg")
const score = add([
  text("0"),
  layer("ui"),
  pos(50, 50),
  {
    value: 0
  }

])
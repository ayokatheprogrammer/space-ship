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

//add new item or level to the screen
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
    sprite("space-invader"), "space-invader", area(),

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
const un = 200

keyDown("right", () => {
  j.move(un, 0)
})
keyDown("left", () => {
  j.move(-un, 0)
})
layers([
  "bg",
  "obj",
  "ui",
], "obj")

//adding text value
const score = add([
  text("0"),
  layer("ui"),
  pos(50, 50),
  {
    value: 0
  }

])

//setting timer to our code
// const sab = 60
// const timer = add([
//   text("0"),
//   layer("ui"),
//   pos(90, 50),
//   {
//     time: sab

//   }
// ])
// timer.action(() => {
//   timer.time -= dt()
//   timer.text = timer.time.toFixed(3)
// })
function spawnBullet(p) {
  add([
    rect(6, 18),
    pos(p),
    origin("center"),
    color(0.5, 0 - 5, 1),
    area(),
    "bullet"

  ])
}
keyPress("space", () => {
  spawnBullet(j.pos.add(0, -25))
})
const bulletspeed = 400
action("bullet", (b) => {
  b.move(0, -bulletspeed)
  // if (b.pos.y > 0) {
  //   destroy(b)
  // }
})

collides("bullet", "space-invader", (b, s) => {
  destroy(b)
  destroy(s)
  score.value++
  score.text = score.value
})

var FULL_WIDTH = 600;
var FULL_HEIGHT = 560;
var WALL_GROWTH_RATE = 5;
var WALL_WIDTH = 10;

Crafty.init(
    FULL_WIDTH,
    FULL_HEIGHT, document.getElementById('game')
);

var player = Crafty.e('2D, Collision, Canvas, Color, Fourway, player')
    .attr({
        x: 150,
        y: 300,
        w: 40,
        h: 60
    })
    .collision([0, 0, 0, 60, 40, 60, 40, 0])
    .color('Brown')
    .fourway(180)
    .bind('Move', checkDogHit)


Crafty.e('2D, Canvas, Color, Fourway, wall')
    .attr({
        x: 0,
        y: 0,
        w: FULL_WIDTH,
        h: WALL_WIDTH
    })
    .color('orange')
    .bind("SHRINK", function (entity) {
        this.h += WALL_GROWTH_RATE;
    })


Crafty.e('2D, Canvas, Color, Fourway, wall')
    .attr({
        x: FULL_WIDTH - WALL_WIDTH,
        y: 0,
        w: WALL_WIDTH,
        h: FULL_HEIGHT
    })
    .color('orange')
    .bind("SHRINK", function (entity) {
        this.w += WALL_GROWTH_RATE;
        this.x -= WALL_GROWTH_RATE;
    })


Crafty.e('2D, Canvas, Color, Fourway, wall')
    .attr({
        x: 0,
        y: FULL_HEIGHT - WALL_WIDTH,
        w: FULL_WIDTH,
        h: WALL_WIDTH
    })
    .color('orange')
    .bind("SHRINK", function (entity) {
        this.h += WALL_GROWTH_RATE;
        this.y -= WALL_GROWTH_RATE;
    })



Crafty.e('2D, Canvas, Color, Fourway, wall')
    .attr({
        x: 0,
        y: 0,
        w: WALL_WIDTH,
        h: FULL_HEIGHT
    })
    .color('orange')
    .bind("SHRINK", function (entity) {
        this.w += WALL_GROWTH_RATE;
    });

setInterval(function () {
    Crafty.trigger("SHRINK", {});
    checkDogHit();
}, 1000);


function checkDogHit (evt) {
    var hitDatas, hitData;

    if ((hitDatas = player.hit('wall'))) {
        hitData = hitDatas[0]
        if (hitData.type === 'MBR') {
            //KILL THE DOG
            console.log("Kill the DoG!")
        }
    }
}
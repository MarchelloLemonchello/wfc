var gridX = 24;
var gridY = 24;

var w = 2000;
var h = 2000;

var tileW = w/gridX;
var tileH = h/gridY;

var tiles = []

var arr = []
arr.length = gridX*gridY;
arr.fill({
    collapsed: false,
    options: [
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
    ]
})
arr = arr.map((el,i)=>({...el,id:i}))

var filterFunctionsLeft = [
    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},

    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},
    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},
    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},
    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},

    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},
    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},
    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},
    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},

    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},
    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},
    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},
    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},

    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},
    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},
    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},

    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},
    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},
    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},
    function (el) {return [1,2,3,4,5,6,7,8,20,21,22,23].includes(el)},

    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},
    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},
    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},
    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},

    function (el) {return [0,9,10,11,12,13,14,15,16,17,18,19,24].includes(el)},
]

var filterFunctionsRight = [
    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},

    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},
    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},
    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},
    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},

    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},
    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},
    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},
    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},

    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},
    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},
    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},
    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},

    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},
    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},
    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},

    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},
    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},
    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},
    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},

    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},
    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},
    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},
    function (el) {return [5,6,7,8,9,10,11,12,16,17,18,19].includes(el)},

    function (el) {return [0,1,2,3,4,13,14,15,20,21,22,23,24].includes(el)},

]

var filterFunctionsTop = [
    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},

    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},

    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},

    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},

    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},
    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},

    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},

    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},
    function (el) {return [2,3,6,7,10,11,13,15,17,18,21,22].includes(el)},

    function (el) {return [0,1,4,5,8,9,12,14,16,19,20,23,24].includes(el)},
]

var filterFunctionsDown = [
    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},

    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},

    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},

    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},

    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},

    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},

    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [3,4,7,8,11,12,13,14,18,19,22,23].includes(el)},
    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},

    function (el) {return [0,1,2,5,6,9,10,15,16,17,20,21,24].includes(el)},
]

function collapsFunction(minArr) {
    var randomElId =minArr[Math.floor(Math.random() * minArr.length)].id;
    var randomOption = arr[randomElId].options[Math.floor(Math.random() * arr[randomElId].options.length)];
    arr[randomElId].options = [randomOption]
    arr[randomElId].collapsed = true

    var i = arr[randomElId].id % gridX
    var j = Math.floor(arr[randomElId].id / gridY)

    if (i!==0 && !arr[randomElId-1].collapsed) {
        var newOps = arr[randomElId-1].options.filter(filterFunctionsLeft[arr[randomElId].options[0]])
        arr[randomElId-1].options=newOps
    }
    if (i!==gridX-1 && !arr[randomElId+1].collapsed) {
        var newOps = arr[randomElId+1].options.filter(filterFunctionsRight[arr[randomElId].options[0]])
        arr[randomElId+1].options=newOps
    }
    if (j!==0 && !arr[randomElId-gridX].collapsed) {
        var newOps = arr[randomElId-gridX].options.filter(filterFunctionsTop[arr[randomElId].options[0]])
        arr[randomElId-gridX].options=newOps
    }
    if (j!==gridY-1 && !arr[randomElId+gridX].collapsed) {
        var newOps = arr[randomElId+gridX].options.filter(filterFunctionsDown[arr[randomElId].options[0]])
        arr[randomElId+gridX].options=newOps
    }
}
var c = 1

function preload() {
    tiles[0] = loadImage('./cow-00.png')
    tiles[1] = loadImage('./cow-01.png')
    tiles[2] = loadImage('./cow-02.png')
    tiles[3] = loadImage('./cow-03.png')
    tiles[4] = loadImage('./cow-04.png')
    tiles[5] = loadImage('./cow-05.png')
    tiles[6] = loadImage('./cow-06.png')
    tiles[7] = loadImage('./cow-07.png')
    tiles[8] = loadImage('./cow-08.png')
    tiles[9] = loadImage('./cow-09.png')
    tiles[10] = loadImage('./cow-10.png')
    tiles[11] = loadImage('./cow-11.png')
    tiles[12] = loadImage('./cow-12.png')
    tiles[13] = loadImage('./cow-13.png')
    tiles[14] = loadImage('./cow-14.png')
    tiles[15] = loadImage('./cow-15.png')
    tiles[16] = loadImage('./cow-16.png')
    tiles[17] = loadImage('./cow-17.png')
    tiles[18] = loadImage('./cow-18.png')
    tiles[19] = loadImage('./cow-19.png')
    tiles[20] = loadImage('./cow-20.png')
    tiles[21] = loadImage('./cow-21.png')
    tiles[22] = loadImage('./cow-22.png')
    tiles[23] = loadImage('./cow-23.png')
    tiles[24] = loadImage('./cow-24.png')
}

function setup() {
    createCanvas(w, h);
    background(220);
}
function draw() {
    minColArr = [...arr]
    // console.log(minColArr)
    minColArr = minColArr.filter(el=>!el.collapsed)
    minColArr.sort((a,b)=>a.options.length-b.options.length);
    collapsFunction(minColArr.filter((el,i,arr)=>el.options.length===arr[0].options.length))


    for (var i = 0; i < gridX; i++) {
        for (var j = 0; j < gridY; j++) {
            var index = i + j*gridX;
            if (arr[index].collapsed) {
                image(tiles[arr[index].options[0]], tileW*i, tileH*j,tileW, tileH);
            }
        }
    }

    if (c>=gridX*gridY) {
        noLoop()
    } else {
        c++
    }
}

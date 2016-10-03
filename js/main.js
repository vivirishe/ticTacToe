console.log('hola')
var backGround1 = 'http://www.drodd.com/images14/yellow-wallpaper29.jpg'
var xButton = 'https://openclipart.org/image/800px/svg_to_png/227977/Red-X-Icon.png'
var roundButton = 'http://www.clipartkid.com/images/340/red-round-circle-with-white-interior-vector-clip-art-iLMYTH-clipart.png'
var options = ['https://openclipart.org/image/800px/svg_to_png/227977/Red-X-Icon.png', 'http://www.clipartkid.com/images/340/red-round-circle-with-white-interior-vector-clip-art-iLMYTH-clipart.png','https://openclipart.org/image/800px/svg_to_png/227977/Red-X-Icon.png', 'http://www.clipartkid.com/images/340/red-round-circle-with-white-interior-vector-clip-art-iLMYTH-clipart.png']

function startGame()
// var fullGame = 9
//Loop for a complete game
for (var i = 0; i < 9; i++) {
  document.getElementById('board').addEventListener('click', function displayImage(){
    if (document.getElementById('pos1').innerHTML.src === xButton) {
        console.log('si3')
    }
    if (this.src === backGround1) {
        this.src = xButton
        // event.stopPropagation()
    console.log('si')
    }
    console.log('si2')
  })
}


// var turns = Math.floor(Math.random()*7)
//   document.getElementsByClassName('blanco')[turns].addEventListener('click', function(){
//     if (this.src === backGround1) {
//       // var player = Math.floor(Math.random()* 7)
//       this.src = options[turns]
//       }
//     })






// var buttonToPlay = document.createElement("BUTTON")

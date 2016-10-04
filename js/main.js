console.log('hola')

var backGround1 = 'http://www.drodd.com/images14/yellow-wallpaper29.jpg'
// var xButton = 'https://openclipart.org/image/800px/svg_to_png/227977/Red-X-Icon.png'
// var roundButton = 'http://www.clipartkid.com/images/340/red-round-circle-with-white-interior-vector-clip-art-iLMYTH-clipart.png'

var currentTurn = "X"

var cells = document.getElementsByClassName('cell')
console.log(cells)

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function(){
    //Check if the cell is occupied
    if (this.innerHTML === "-") {
      // alert("Clicked on ", this)
      this.innerHTML = currentTurn
      checkWin()
      switchTurn()
    }else {
      alert('Select an empty cell')
    }
  })
}

function switchTurn(){
  if (currentTurn === "X") {
    currentTurn = "O"
  }else {
    currentTurn = "X"
  }
}

function checkWin(){
  if(cells[0].innerHTML !== "-" && cells[0].innerHTML == cells[1].innerHTML && cells[0].innerHTML == cells[2].innerHTML){
    alert (currentTurn + " has won!")
  }
  if(cells[0].innerHTML !== "-" && cells[0].innerHTML == cells[4].innerHTML && cells[0].innerHTML == cells[8].innerHTML){
    alert (currentTurn + " has won!")
  }
  if(cells[0].innerHTML !== "-" && cells[0].innerHTML == cells[3].innerHTML && cells[0].innerHTML == cells[6].innerHTML){
    alert (currentTurn + " has won!")
  }
  if(cells[1].innerHTML !== "-" && cells[1].innerHTML == cells[4].innerHTML && cells[1].innerHTML == cells[7].innerHTML){
    alert (currentTurn + " has won!")
  }
  if(cells[2].innerHTML !== "-" && cells[2].innerHTML == cells[5].innerHTML && cells[2].innerHTML == cells[8].innerHTML){
    alert (currentTurn + " has won!")
  }
  if(cells[3].innerHTML !== "-" && cells[3].innerHTML == cells[4].innerHTML && cells[3].innerHTML == cells[5].innerHTML){
    alert (currentTurn + " has won!")
  }
  if(cells[6].innerHTML !== "-" && cells[6].innerHTML == cells[7].innerHTML && cells[6].innerHTML == cells[8].innerHTML){
    alert (currentTurn + " has won!")
  }
  if(cells[2].innerHTML !== "-" && cells[2].innerHTML == cells[4].innerHTML && cells[2].innerHTML == cells[6].innerHTML){
    alert (currentTurn + " has won!")
  }
}
var reset = document.getElementById('reset').addEventListener('click', function(){
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '-'
    currentTurn = "X"
  }
  console.log('reset mode')
})
//
//
// function startGame()
// // var fullGame = 9
// //Loop for a complete game
// for (var i = 0; i < 9; i++) {
//   document.getElementById('board').addEventListener('click', function displayImage(){
//     if (document.getElementById('pos1').innerHTML.src === xButton) {
//         console.log('si3')
//     }
//     if (this.src === backGround1) {
//         this.src = xButton
//         // event.stopPropagation()
//     console.log('si')
//     }
//     console.log('si2')
//   })
// }
//

// var turns = Math.floor(Math.random()*7)
//   document.getElementsByClassName('blanco')[turns].addEventListener('click', function(){
//     if (this.src === backGround1) {
//       // var player = Math.floor(Math.random()* 7)
//       this.src = options[turns]
//       }
//     })


// var buttonToPlay = document.createElement("BUTTON")

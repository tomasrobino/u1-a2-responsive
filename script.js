const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const height = canvas.height
const width = canvas.width
//ctx.fillStyle = "green"
//ctx.fillRect(10, 10, 150, 100)
ctx.beginPath()
ctx.moveTo(0,0)
ctx.lineTo(canvas.width, canvas.height)
ctx.moveTo(0,canvas.height)
ctx.lineTo(canvas.width, 0)

const casillero_h_width = document.getElementsByClassName("casillero")[0].offsetWidth-2
const casillero_h_height = document.getElementsByClassName("casillero")[0].offsetHeight-2
const casillero_v_width = document.getElementsByClassName("casilleroOb")[0].offsetWidth-2
const casillero_v_height = document.getElementsByClassName("casilleroOb")[0].offsetHeight-2
console.log(casillero_h_height)
ctx.moveTo(0,0)
ctx.rect(casillero_h_width, 0, casillero_h_width, casillero_h_height)

ctx.stroke()
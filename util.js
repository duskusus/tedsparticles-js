function updateWidth(canvas, context){
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    context.fillStyle = "#000"
    context.fillRect(0, 0, canvas.width, canvas.height)
    console.log("window resized to ", canvas.width, canvas.height)
}
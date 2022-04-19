
var canvas = document.getElementById("mainCanvas")
var context = canvas.getContext("2d")
var title = document.getElementById("title")
var overlay = document.getElementById("overlay")
var sidebar = document.getElementById("sidebar")
var sidebarItems = sidebar.children
var firstItem = sidebarItems[0]
var configureDialogue = document.getElementById("configure")

var currentFunction = {
    P: (x, y, z) => { return x },
    Q: (x, y, z) => { return y },
    R: (x, y, z) => { return z },
}
updateWidth(canvas, context)
window.onresize = () => { updateWidth(canvas, context) }
document.addEventListener("mousemove", (e) => {
    //console.log(e.clientX, e.clientY)
    sidebar.hidden = (e.clientX > 200)
})
var createNewSidebarItem = (text) => {
    var newSidebarItem = firstItem.cloneNode(deep = true)
    newSidebarItem.innerHTML = text
    sidebar.appendChild(newSidebarItem)
    newSidebarItem.hidden = false
    return newSidebarItem
}
//main renderer??

var defVecField = createNewSidebarItem("define vector field")
defVecField.onclick = () => {
    configureDialogue.hidden = !configureDialogue.hidden;
}
var renderButton = createNewSidebarItem("render")
renderButton.onclick = ()=> {
    render()
}
function parseVF(functionComponent, event) {
    if (event.keyCode == 13) {
        var value = document.getElementById("component" + functionComponent).value
        currentFunction[functionComponent] = new Function("x", "y", "z", "return " + value)
    }
}
function draw3DVector(x, y, z) {
    context.beginPath()
    context.fillStyle = "#fff"

}
function render() {
    console.log("rendering")
    context.fillStyle = "#000"
    context.fillRect(0, 0, canvas.width, canvas.height)
    const x_divisions = 20
    const y_divisions = 12
    const x_step = canvas.width / x_divisions
    const y_step = canvas.height / y_divisions
    for (i = 0; i < x_divisions; i++) {
        var start_x = i / x_divisions
        for (j = 0; j < y_divisions; j++) {
            var start_y = j / y_divisions
            context.beginPath()
            context.lineWidth = 1
            context.strokeStyle = "#fff"
            context.moveTo(start_x * canvas.width, start_y * canvas.height)
            context.lineTo(canvas.width * (start_x + currentFunction.P(start_x, start_y, 0)),canvas.height * (currentFunction.Q(start_x, start_y, 0)))
            context.stroke()
            console.log(i, j)
        }
    }
}




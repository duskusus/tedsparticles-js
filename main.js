
var canvas = document.getElementById("mainCanvas")
var context = canvas.getContext("2d")
var title = document.getElementById("title")
var overlay = document.getElementById("overlay")
var sidebar = document.getElementById("sidebar")
var sidebarItems = sidebar.children
var firstItem = sidebarItems[0]
var configureDialogue = document.getElementById("configure")
updateWidth(canvas, context)
window.onresize=()=>{updateWidth(canvas, context)}
document.addEventListener("mousemove", (e)=>{
    //console.log(e.clientX, e.clientY)
    sidebar.hidden = (e.clientX > 200)
})
var createNewSidebarItem = (text)=>{
    var newSidebarItem = firstItem.cloneNode(deep=true)
    newSidebarItem.innerHTML = text
    sidebar.appendChild(newSidebarItem)
    newSidebarItem.hidden = false
    return newSidebarItem
}
//main renderer??
var defVecField = createNewSidebarItem("define vector field")
defVecField.onclick = ()=>{
    configureDialogue.hidden= ! configureDialogue.hidden;
}
function parseVF(functionComponent, event){
    if(event.keyCode == 13){
        var value = document.getElementById("component" + functionComponent).value
        var f = new Function("x", "y", "z","return " + value)
        alert(f(5))
    }
}



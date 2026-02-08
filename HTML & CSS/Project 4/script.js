var popupoverlay = document.querySelector(".popup-overlay")   
var popup = document.querySelector(".popup")
var btn = document.getElementById("idname")

idname.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popup.style.display = "block"
})
    
var cancelbtn = document.getElementById("cancel-btn")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popup.style.display = "none"
})

var container = document.querySelector(".container")
var booktitle = document.getElementById("booktitle")
var bookauthor = document.getElementById("bookauthor")
var textarea = document.getElementById("textarea")
var addbtn = document.getElementById("add-btn")

addbtn.addEventListener("click",function(event){
event.preventDefault()

var div = document.createElement("div")
div.setAttribute("class","one")

div.innerHTML=`<h3>${booktitle.value}</h3>
        <b>${bookauthor.value}</b>
        <p>${textarea.value}</p>
        <button class="btn" onclick="deletebook(event)" >Delete</button>`
        container.append(div)
        popupoverlay.style.display = "none"
        popup.style.display = "none"

})

function deletebook(event){
    event.target.parentElement.remove()
}
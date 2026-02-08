var ul=document.getElementById("res");
var input=document.getElementById("input");
function add()
{
   var li=document.createElement("li");
   li.innerHTML=input.value + "<button onclick='del(event)'>Delete</button>"
   ul.append(li);
}

function del(event)
{
   event.target.parentElement.remove(event);
}

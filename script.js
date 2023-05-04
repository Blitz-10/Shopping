var button=document.getElementById("enter");
var input=document.getElementById("userinput45");
var ul=document.querySelector("ul");
var button1=document.getElementById("button1")

function inputLength()
{
	return input.value.length;
}
function createListElement()
{
	li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function afterbuttonpress()
{	
	if(inputLength() > 0)
	{
		createListElement();
	}
}

function afterkeypress(event)
{

	if(inputLength() > 0 && event.which === 13)
	{
		createListElement();

	
	}
}

input.addEventListener("keypress",afterkeypress);
button.addEventListener("click",afterbuttonpress);

button1.addEventListener("click",function()
{

	alert("The details are saved successfully!")

});


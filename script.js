//your JS code here. If required.
let div= document.getElementById("main");

function fun() {
	let h= document.createElement("h1");
	h.innerHtml=`
 <h1>Width: ${window.width} and Height: ${window.height}</h1>
 `
	div.append(h);
}
fun();
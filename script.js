/* Write your code here */

var a = document.getElementById("tasks");
var gs = a.getElementsByTagName('div');

//var apa = gs.childNodes;
//var apa1 = gs.firstChild;

var span = a.getElementsByTagName('span');


for (var i = 0; i <span.length; i++) {
	var sr = span[i].innerHTML;
	

}
var like=new Array();
var lik=new Array();
for (var i = 0; i <gs.length; i++) {
	like["but"+i]=gs[i].firstChild;
	//like["text"+i]=gs[i].lastChild.text;
	

}
var co = document.getElementsByTagName("span");

like["but0"].onclick = function() {

		gs[0].dataset.status="done";
          
          //var element= document.createElement("span");
          
          //element.innerHTML = like["text0"];
          
          //element.style.textDecoration=line-through;
          
          //alert(like["text0"].innerHTML);
       }
like["but1"].onclick = function() {
gs[1].dataset.status="done";
}
like["but2"].onclick = function() {
gs[2].dataset.status="done";
}
like["but3"].onclick = function() {
gs[3].dataset.status="done";
}
like["but4"].onclick = function() {
gs[4].dataset.status="done";
}
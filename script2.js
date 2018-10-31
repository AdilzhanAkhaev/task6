let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

/* Write your code here */
var option = document.createElement('option');
//option.innerHTML=var;

var list = document.getElementById('countries');
var list2 = document.getElementById('cities');

//var kon= '<option>'+countries[i]+'</option>'
for (var i = 0; i < countries.length; i++) {
	 	var option= document.createElement('option');
	 	
        option.innerHTML=countries[i];
	
	    list.appendChild(option);

	    
}

document.getElementById("countries").onclick = function() {reg()};
function reg(){
	
	 var x = document.getElementById("countries").selectedIndex;
	var ggg=--x;
	if(ggg>0){
		var aaaa=countries[ggg];
		var lik =cities_by_country[aaaa]

		for (var i = 0; i < lik.length; i++) {
	 	var option= document.createElement('option');
	 	
        option.innerHTML=lik[i];
	
	    list2.appendChild(option);

	    
}
	}
	
    }

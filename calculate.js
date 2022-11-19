var p_per_sqrt = 1.99; // price per sqrt ft
var p_per_box = 30.85; // price per sqrt ft
var metaval = 15.5; //sqrt value 
var no_of_tile = 0; //calculate how many tiles need

function sqrtVal(){

	// show output boxs
	document.getElementById('makelive').style.display='block';
	// document.getElementById('makelive').style.opacity='1';
	// varibales
	var sqrl_value = document.getElementById('sq-ft').value;   // get user value
	var show_num = document.getElementById('show_num').value;  // show tile no
	var sqrt_num = document.querySelector('.sqrt-num span');  // coverage sqft area
	var extra = document.getElementById('if-check');  // 15% extra check
	var sqrt_price = document.querySelector('.sqrt-price span');  // show final price

	if(sqrl_value >= metaval){
		
		no_of_tile = Math.ceil(sqrl_value / metaval);

		document.getElementById('show_num').value = no_of_tile;
		sqrt_num.innerText = no_of_tile*metaval;
		sqrt_price.innerText = (no_of_tile*p_per_box).toFixed(2);

		if(extra.checked == true){
			var old = no_of_tile * metaval; // old no of boxes
			var new_v = old + old*0.15;  // 15% extra no of boxes
			sqrt_num.innerText = Math.ceil(new_v);

			document.getElementById('show_num').value = Math.ceil(no_of_tile+no_of_tile*0.15);
			sqrt_price.innerText = ((no_of_tile+no_of_tile*0.15)*p_per_box).toFixed(2);
		}
	
	}
	else if(sqrl_value < 1){
		document.getElementById('makelive').style.display='none';	
	}
	else{
		document.getElementById('show_num').value = 0;
		document.querySelector('.sqrt-num span').innerText = 0;
		sqrt_price.innerText = 0;
		//document.getElementById('makelive').style.display='none';

	}
	
}

function vincf(val,stat){

	//alert(stat);
	if(stat == 'inc'){
		no_of_tile = parseInt(val)+1;
	}
	if(stat == 'dec'){
		no_of_tile = parseInt(val)-1;
	}

	var show_num = document.getElementById('show_num').value;  // show tile no
	var sqrt_num = document.querySelector('.sqrt-num span');  // coverage sqft area
	var extra = document.getElementById('if-check');  // 15% extra check
	var sqrt_price = document.querySelector('.sqrt-price span');  // show final price

	if(no_of_tile > 0){
		
		sqrt_num.innerText = no_of_tile*metaval;
		sqrt_price.innerText = (no_of_tile*p_per_box).toFixed(2);

		if(extra.checked == true){
			var old = no_of_tile * metaval; // old no of boxes
			var new_v = old + old*0.15;  // 15% extra no of boxes
			sqrt_num.innerText = Math.ceil(new_v);

			document.getElementById('show_num').value = Math.ceil(no_of_tile+no_of_tile*0.15);
			sqrt_price.innerText = ((no_of_tile+no_of_tile*0.15)*p_per_box).toFixed(2);
		}
	
	}else{
		document.getElementById('show_num').value = 0;
		document.querySelector('.sqrt-num span').innerText = 0;
		sqrt_price.innerText = 0;
	}
	
	
}



function calculateSQFT(){

	document.getElementById('calculator').style.display = 'block';

	var res = 0;
	var no_of_box = 0;
	var width = 0;
	var length = 0;

	//var values = document.querySelectorAll('#area1 input');
	var c1 = document.querySelectorAll('#area1 .c1');
	var c2 = document.querySelectorAll('#area1 .c2');
	var c3 = document.querySelectorAll('#area1 .c3');
	var c4 = document.querySelectorAll('#area1 .c4');

	// length = values[0].value +'.'+ values[1].value;
	// width = values[2].value +'.'+ values[3].value;

	for(var i = 0; i < c1.length ; i++){
		var l = c1[i].value +'.'+ c2[i].value;
		var w = c3[i].value +'.'+ c4[i].value;
		width = width + parseInt(w);
		length = length + parseInt(l);
	}

	//res = width * length;

	// 15% extra
	//var isfifteen = document.getElementById('extraid').value;

	res = (length*width).toFixed(2);
	no_of_box = Math.ceil(res / metaval);

	document.querySelector('.cal-answer').style.display='block';

	document.getElementById('nsqft').innerText = res;
	document.getElementById('nsqft2').innerText = res;
	document.getElementById('nbox').innerText = no_of_box;

}


// calculator jquery code
$(document).ready(function(){

	$('#copy').hide();
	$('.add-another').click(function(){
		$('#area1').append($('#copy').html());
	});

	// toggle how to
	$('.how-to h3').click(function(){
		$('.how-details').toggle();
	});


	$('#cal-sq-ft').click(function(e){
		e.preventDefault();
		$('#calculator').css('display','block');
	});

	$('#calclose').click(function(){
		$('#calculator').css('display', 'none');
	});

});


window.onload= function	() {
	var iosToggle= document.getElementsByTagName('div');

function toggle (k){
	if(iosToggle.item(k).getElementsByClassName('toggle').item(0).style.float=='left'){
		iosToggle.item(k).getElementsByClassName('toggle').item(0).style.float='right';
		iosToggle.item(k).getElementsByClassName('state').item(0).style.marginLeft='0';
		iosToggle.item(k).getElementsByClassName('state').item(0).style.marginRight='10px';
		iosToggle.item(k).getElementsByClassName('state').item(0).innerHTML='off';
	}else{
		iosToggle.item(k).getElementsByClassName('toggle').item(0).style.float='left';
		iosToggle.item(k).getElementsByClassName('state').item(0).style.marginRight='0';
		iosToggle.item(k).getElementsByClassName('state').item(0).style.marginLeft='10px';
		iosToggle.item(k).getElementsByClassName('state').item(0).innerHTML='on';
	}

}

	for(i=0;i<iosToggle.length;i++){

		(function(j){

			iosToggle.item(j).onclick= function(){

				if(iosToggle.item(j).hasAttribute("data-iostg")){
					toggle(j);
				}
			}
		})(i)
			
	}

}
	
	    oListbox = document.getElementById("Temperature");  

		function insertPicture(){
		    var value = oListbox.select;			
		    var indx = oListbox.selectedIndex;
			//alert(oListbox.options[indx].firstChild.nodeValue); //显示的内容 'Second_Layer'   
            //alert(oListbox.options[indx].getAttribute("value"));//对应的value  '2'			
			
			path = "Image/" + (indx + 1) + ".jpg";		
            var divImage = document.getElementById('ChipLayerTemperature');
            divImage.innerHTML = '<img src="'+path+'" />';
		}

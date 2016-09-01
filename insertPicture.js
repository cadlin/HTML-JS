

		function insertPicture(elmtID){		
	        oListbox = document.getElementById(elmtID);  		
		    var indx = oListbox.selectedIndex;				
			var value = oListbox.options[indx].firstChild.nodeValue;			
			path = "Image/" + value + ".jpg";	
            elmtID += "Image";
            var divImage = document.getElementById(elmtID);
            divImage.innerHTML = '<img src="'+path+'" />';
		}

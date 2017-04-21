
    
    var figures = new Array();
	var selector = 0;
	var map = {};
	onkeydown = onkeyup =  function(e){
    	e = e || event; // to deal with IE
    	map[e.keyCode] = e.type == 'keydown';
    				
    	xTrans = 0.0
    	yTrans = 0.0
    	xRot = 0.0
    	yRot = 0.0			
    	if(map[37]){
    		xTrans += -1;
    	}
    	if(map[38]){
   			yTrans += 1;
    	}
    	if(map[39]){
    		xTrans += 1;
    	}
    	if(map[40]){
    		yTrans += -1;
    	}
    	if(map[87]){
    		xRot += 90;
    	}
    	if(map[83]){
    		xRot += -90;
    	}
    	if(map[65]){
    		yRot += 90;
    	}
    	if(map[68]){
    		yRot += -90;
    	}
    	if(map[32]){
    		//console.log(selector % colors.length);
    		//var mat = new THREE.MeshPhongMaterial({ color : (colors[selector % colors.length])});
    		figures.push(new THREE.Mesh(subBlockGeo, subBlockMaterial));
    		selector = figures.length - 1;
    		scene.add(figures[selector]);
            figures[selector].position.set(0, 0, 0);
    	}
		console.log(xTrans, yTrans, xRot, yRot);
    	//figures[selector].translateX(xTrans);
    	//figures[selector].translateY(yTrans);
    	//figures[selector].rotation.x += xRot;
    	//figures[selector].rotation.y += yRot;
	}
	

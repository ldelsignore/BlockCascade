
    
    var figures = new Array();
	var selector = 0;
	var map = {};
	onkeydown = onkeyup =  function(e){
    	e = e || event; // to deal with IE
    	map[e.keyCode] = e.type == 'keydown';
    				
    	xTrans = 0.0
    	zTrans = 0.0
    	xRot = 0.0
    	yRot = 0.0			
    	if(map[37]){
    		xTrans += -1;
    	}
    	if(map[38]){
   			zTrans += -1;
    	}
    	if(map[39]){
    		xTrans += 1;
    	}
    	if(map[40]){
    		zTrans += 1;
    	}
    	if(map[87]){
    		xRot += Math.PI/2;
    	}
    	if(map[83]){
    		xRot += -Math.PI/2;
    	}
    	if(map[65]){
    		yRot += Math.PI/2;
    	}
    	if(map[68]){
    		yRot += -Math.PI/2;
    	}
    	if(map[32]){
    		//console.log(selector % colors.length);
    		//var mat = new THREE.MeshPhongMaterial({ color : (colors[selector % colors.length])});
    		figures.push(new THREE.Mesh(subBlockGeo, subBlockMaterial));
    		selector = figures.length - 1;
    		scene.add(figures[selector]);
            figures[selector].position.set(2, 5, 2);
    	}
		console.log(xTrans, zTrans, xRot, yRot);
    	figures[selector].translateX(xTrans);
    	figures[selector].translateZ(zTrans);
    	figures[selector].rotateX(xRot);
    	figures[selector].rotateY(yRot);
	}
	
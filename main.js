/* Luca Del Signore
 * BlockCascade
 * Created April 21st, 2017
 */
	
	var scene = new THREE.Scene();

	// Add camera
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 5;
	camera.position.y = 0;

	// Add lights
	var light1 = new THREE.DirectionalLight(0xffffff, 1.5);
	light1.position.set(-2,-2,-2);
	scene.add(light1);

	var light2 = new THREE.DirectionalLight(0xffffff, 1.5);
	light2.position.set(7,7,7);
	scene.add(light2);

	var light3 = new THREE.DirectionalLight(0xffffff, 1.5);
	light2.position.set(6,10,3);
	scene.add(light2);

			
	// Add renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// Add mouse controls
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.maxPolarAngle = Math.PI * 0.5;
	controls.minDistance = 10;
	controls.maxDistance = 50;

	// Add playing grid
	var gridSquare = new THREE.BoxGeometry(1, 1, 1);
	var geo = new THREE.EdgesGeometry(gridSquare);
	var mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });

	var subBlockGeo = new THREE.BoxGeometry(1, 1, 1);
	var subBlockMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

	gridSpace.cells = Array();
	for(i = 0; i < gridSpace.length; i++)
	{
		gridSpace.cells[i] = Array();	
		for(j = 0; j < gridSpace.width; j++)
		{
			gridSpace.cells[i][j] = Array();
			for(k = 0; k < gridSpace.height; k++)
			{
				gridSpace.cells[i][j][k] = new THREE.LineSegments(geo, mat);
				scene.add(gridSpace.cells[i][j][k]);
				gridSpace.cells[i][j][k].position.set(i,k,j); // Middle parameter is height
			}
		}
	}





/* Luca Del Signore
 * BlockCascade
 * Created April 21st, 2017
 */
	
	var scene = new THREE.Scene();

	// Add camera
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 5;
	camera.position.y = 0;

	// Add light
	var light = new THREE.DirectionalLight(0xffffff, 1.5);
	light.position.set(0,0,1);
	scene.add(light);
			
	// Add renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// Add mouse controls
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.maxPolarAngle = Math.PI * 0.5;
	controls.minDistance = 5;
	controls.maxDistance = 20;

	// Add playing grid
	var grid = new THREE.BoxGeometry(1, 1, 1);
	var geo = new THREE.EdgesGeometry(grid);
	var mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });

	for(i = 0; i < gridSpace.length; i++)
	{
		for(j = 0; j < gridSpace.length; j++)
		{
			for(k = 0; k < gridSpace.length; k++)
			{				
				gridSpace.cells[i][j][k] =  new THREE.LineSegments(geo, mat);
			}
		}
	}
	var wireframe = new THREE.LineSegments(geo, mat);
	scene.add(wireframe);
	wireframe.position = new THREE.Vector3(0, 0, 0);

	var wireframe2 = new THREE.LineSegments(geo, mat);
	scene.add(wireframe2);
	wireframe2.position = new THREE.Vector3(0, .5, 0);


	// Render loop
	function render() {
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();

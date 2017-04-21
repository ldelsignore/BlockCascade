// Render loop
	function render() {
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
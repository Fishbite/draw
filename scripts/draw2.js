function draw2() {
    var canvas = document.getElementById('canvas2');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  // Draw a filled rectangle: start x&y@25.5 dims 100
     ctx.fillStyle = 'rgb(0, 0, 150)';
      ctx.fillRect(25.5, 25.5, 100, 100);
  // Cut a rectangular hole: start x&y@45.5 dims 60
      ctx.clearRect(45.5, 45.5, 60, 60);
  // Draw an outline rectangle in the hole
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgb(255, 255, 0)';
      ctx.strokeRect(50.5, 50.5, 50, 50);
  // Note: .5 positioning to create crisp lines!!!
    }
  }
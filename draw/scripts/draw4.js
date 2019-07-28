function draw4() {
    var canvas = document.getElementById('canvas4');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      
      ctx.beginPath();
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 1;
      ctx.arc(75.5, 75.5, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(12.5, 125.5);
      ctx.lineTo(137.5, 125.5);
      ctx.lineTo(75,25.5);
      ctx.lineTo(12.5,125.5);
      ctx.stroke();
    }
  }
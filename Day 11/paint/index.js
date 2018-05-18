//1. Create context Variable & setup your Canvas
  //1 a get the context
    var context = document.getElementById("main").getContext("2d");

    //1 b setupt "brush" (width & color)
    context.lineWidth = 5;
    context.strokeStyle = "#0000FF";

//2 Setup main canvas variavle
    var mainCanvas = document.getElementById("main");

/*
    MOuse Events:
      mouseDown
      mouseUp
      mouseLeave
      mouseMove

      click = mouseDown + mouseUp

      Drag = mouseDown + mouseUp + mouseMove
*/


//Detect if its a CLICK or the End of Drag
      var isClick = 0;
      var startDrawing  = false;  //Track if you should draw or not
//3 Detect mouse eevents
    mainCanvas.addEventListener("mousedown", function(event) {
      //detect a click
      isClick = 0;
      startDrawing = true;
    });

    mainCanvas.addEventListener("mouseup", function(event) {
      console.log("mouseup");
      //Stop whether drawing you are doing
      startDrawing = false;

      //detect the difference between CLICK and END of DRAG

      if(isClick == 0) {
        console.log("Person Is Clicked");

      //Insert Code to draw a rectangle
        //get the (x,y) of the mouse
        var x = event.pageX - mainCanvas.offsetLeft;
        var y = event.pageY - mainCanvas.offsetTop;
        //Get the size of
        context.fillRect(x,y,context.lineWidth,context.lineWidth);
      } else if(isClick = 1) {
            console.log("Person Is DRAGGING");
            context.beginPath();
      }
    });

    mainCanvas.addEventListener("mousemove", function(event) {
    //   console.log("MOVING");
       isClick = 1;

       if(startDrawing == true) {
         //detect your mouse(x,y) Position
         var x = event.pageX - mainCanvas.offsetLeft;
         var y = event.pageY - mainCanvas.offsetTop;
         // console.log(x + ", " + y);

         context.lineTo(x,y);
         context.closePath();
         context.stroke();

          context.moveTo(x,y);
       }

    });
    mainCanvas.addEventListener("mouseleave", function(event) {
      startDrawing = false;
    });

    // 4 User Interface Nonsense

    //New button
    document.getElementById("newDrawing").addEventListener("click", function() {
      context.clearRect(0,0, mainCanvas.width,mainCanvas.height);
    });

    //Erase button
    document.getElementById("erase").addEventListener("click", function() {
      context.strokeStyle = "#ffffff";
        context.fillStyle = "#ffffff";
    });

    //Pink button
    document.getElementById("pink").addEventListener("click", function() {
      context.strokeStyle="#D81B60";
      context.fillStyle="#D81B60";
    });

    //Yellow button
    document.getElementById("yellow").addEventListener("click", function() {
      context.strokeStyle="#FFEB3B";
        context.fillStyle="#FFEB3B";
    });

    //Blue button
    document.getElementById("blue").addEventListener("click", function() {
      context.strokeStyle="blue";
      context.fillStyle="blue";
    });

    //Chnage Brush size
    document.getElementById("slider").addEventListener("change", function() {
        var sliderValue = this.value;
        //Logic
        var sliderValue = this.value;
        console.log(sliderValue);

        //ui
        context.lineWidth = sliderValue;
        document.getElementById("brushSize").innerHTML = sliderValue;
    });

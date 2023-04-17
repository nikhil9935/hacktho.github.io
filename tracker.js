
	  // Start tracking user time when the page loads
	  // get the current time in milliseconds
  var startTime = new Date().getTime();
  
  // update the time every second
  setInterval(function() {
	// get the current time in milliseconds again
	var currentTime = new Date().getTime();
  
	// calculate the time difference
	var timeDiff = currentTime - startTime;
  
	// convert the time difference to seconds
	var seconds = Math.floor(timeDiff / 1000);

  
	// update the time display
	document.getElementById("time").innerHTML = seconds + " seconds";
    if(seconds==3600)
            alert("You are using website for an hr.")
  }, 1000);
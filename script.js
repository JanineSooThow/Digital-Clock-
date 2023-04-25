//The code 'let hrs = dateTime.getHours()' creates a new 'Date' object and assigns it to the 'dateTime' constant using the 'new' keyword
//The 'Date' object represents the current date and time. The code retrieves the current hour value from the 'dateTime' object using the 'getHours()' method and assigns it to the 'hrs'variable. 
//The 'getHours()' method returns an integer between 0 and 23 representing hr of the day in 24-hr format
//This code is getting the current hour of the day and storing it in the 'hrs' variable 

function displayTime() {
    const dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if (hrs >=12){
      session.innerHTML = 'PM';

    } else {
      session.innerHTML = 'AM';
    }

// add leading zero to hours if it is less than 10
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
// add leading zero to minutes if it is less than 10
  if (min < 10) {
    min = "0" + min;
  }

// add leading zero to seconds if it is less than 10
  if (sec < 10) {
    sec = "0" + sec;
  }

  //Using the 'getElementById' method to retrieve an HTML element with ID of "hours"
  //then setting the 'innerHTML' property of that element to the value of the 'hrs' variable
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 1000);

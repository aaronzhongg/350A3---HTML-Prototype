// document.getElementById("sidebar").innerHTML =
// '<ul>'+
//  '<li style="font-size:14pt;background-color: #FFA500"><a href="#"> IJIF <br>HOME AUTOMATION</a></li>'+
//  '<li class="li1"><a href="index.html">Dashboard</a></li>'+
//  '<li class="li2"><a href="doors.html">Doors</a></li>'+
//  '<li class="li3"><a href="windows.html">Windows</a></li>'+
//  '<li class="li4"><a href="lights.html">Lights</a></li>'+
//  '<li class="li5"><a href="#">Temperature</a></li>'+
//  '<li class="li6"><a href="#">Settings</a></li>'+
// '</ul>';

//DOOR FUNCTIONS

if (typeof(Storage) !== "undefined" && localStorage.getItem("door1") == null) {
  localStorage.setItem("door1", "close");
  localStorage.setItem("door1lock", "lock");
  localStorage.setItem("door2", "close");
  localStorage.setItem("door2lock", "lock");
  localStorage.setItem("door3", "close");
  localStorage.setItem("door3lock", "lock");
  localStorage.setItem("door4", "close");
  localStorage.setItem("door4lock", "lock");
}

if (localStorage.getItem("door1lock") == "unlock") {
  $('#door1lock').bootstrapToggle("on");
  $('#door1').bootstrapToggle('enable');
} else {
  $('#door1').bootstrapToggle('disable');
}
if (localStorage.getItem("door1") == "open") {
  $('#door1').bootstrapToggle("on");

}

if (localStorage.getItem("door2") == "open") {
  $('#door2').bootstrapToggle("on");
  $('#door2lock').bootstrapToggle("on");
}
if (localStorage.getItem("door2lock") == "unlock") {
  $('#door2lock').bootstrapToggle("on");
} else {
  $('#door2').bootstrapToggle('disable');
}
if (localStorage.getItem("door3") == "open") {
  $('#door3').bootstrapToggle("on");
  $('#door3lock').bootstrapToggle("on");
}

if (localStorage.getItem("door3lock") == "unlock") {
  $('#door3lock').bootstrapToggle("on");
} else {
  $('#door3').bootstrapToggle('disable');
}
if (localStorage.getItem("door4") == "open") {
  $('#door4').bootstrapToggle("on");
  $('#door4lock').bootstrapToggle("on");
}

if (localStorage.getItem("door4lock") == "unlock") {
  $('#door4lock').bootstrapToggle("on");
} else {
  $('#door4').bootstrapToggle('disable');
}

$(function() {
  $('#door1lock').change(function() {
    if (localStorage.getItem("door1lock") == "unlock") {
      localStorage.setItem("door1lock", "lock");
      $('#door1').bootstrapToggle("off");
      $('#door1').bootstrapToggle('disable');
    }
    else {
      localStorage.setItem("door1lock", "unlock");
      $('#door1').bootstrapToggle('enable');
    }
  })
})

$(function() {
  $('#door1').change(function() {
    if (localStorage.getItem("door1") == "open") {
      localStorage.setItem("door1", "close");
    }
    else {
      localStorage.setItem("door1", "open");
    }
  })
})

$(function() {
  $('#door2lock').change(function() {
    if (localStorage.getItem("door2lock") == "unlock") {
      localStorage.setItem("door2lock", "lock");
      $('#door2').bootstrapToggle("off");
      $('#door2').bootstrapToggle('disable');
    }
    else {
      localStorage.setItem("door2lock", "unlock");
      $('#door2').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#door2').change(function() {
    if (localStorage.getItem("door2") == "open") {
      localStorage.setItem("door2", "close");
    }
    else {
      localStorage.setItem("door2", "open");
    }
  })
})

$(function() {
  $('#door3lock').change(function() {
    if (localStorage.getItem("door3lock") == "unlock") {
      localStorage.setItem("door3lock", "lock");
      $('#door3').bootstrapToggle("off");
      $('#door3').bootstrapToggle('disable');
    }
    else {
      localStorage.setItem("door3lock", "unlock");
      $('#door3').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#door3').change(function() {
    if (localStorage.getItem("door3") == "open") {
      localStorage.setItem("door3", "close");
    }
    else {
      localStorage.setItem("door3", "open");
    }
  })
})

$(function() {
  $('#door4lock').change(function() {
    if (localStorage.getItem("door4lock") == "unlock") {
      localStorage.setItem("door4lock", "lock");
      $('#door4').bootstrapToggle("off");
      $('#door4').bootstrapToggle('disable');
    }
    else {
      localStorage.setItem("door4lock", "unlock");
      $('#door4').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#door4').change(function() {
    if (localStorage.getItem("door4") == "open") {
      localStorage.setItem("door4", "close");
    }
    else {
      localStorage.setItem("door4", "open");
    }
  })
})

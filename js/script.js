//DOOR FUNCTIONS

if (typeof(Storage) !== "undefined" && sessionStorage.getItem("door1") == null) {
  sessionStorage.setItem("door1", "close");
  sessionStorage.setItem("door1lock", "lock");
  sessionStorage.setItem("door2", "close");
  sessionStorage.setItem("door2lock", "lock");
  sessionStorage.setItem("door3", "close");
  sessionStorage.setItem("door3lock", "lock");
  sessionStorage.setItem("door4", "close");
  sessionStorage.setItem("door4lock", "lock");
}

if (sessionStorage.getItem("door1lock") == "unlock") {
  $('#door1lock').bootstrapToggle("on");
  $('#door1').bootstrapToggle('enable');
} else {
  $('#door1').bootstrapToggle('disable');
}
if (sessionStorage.getItem("door1") == "open") {
  $('#door1').bootstrapToggle("on");

}

if (sessionStorage.getItem("door2") == "open") {
  $('#door2').bootstrapToggle("on");
  $('#door2lock').bootstrapToggle("on");
}
if (sessionStorage.getItem("door2lock") == "unlock") {
  $('#door2lock').bootstrapToggle("on");
} else {
  $('#door2').bootstrapToggle('disable');
}
if (sessionStorage.getItem("door3") == "open") {
  $('#door3').bootstrapToggle("on");
  $('#door3lock').bootstrapToggle("on");
}

if (sessionStorage.getItem("door3lock") == "unlock") {
  $('#door3lock').bootstrapToggle("on");
} else {
  $('#door3').bootstrapToggle('disable');
}
if (sessionStorage.getItem("door4") == "open") {
  $('#door4').bootstrapToggle("on");
  $('#door4lock').bootstrapToggle("on");
}

if (sessionStorage.getItem("door4lock") == "unlock") {
  $('#door4lock').bootstrapToggle("on");
} else {
  $('#door4').bootstrapToggle('disable');
}

$(function() {
  $('#door1lock').change(function() {
    if (sessionStorage.getItem("door1lock") == "unlock") {
      sessionStorage.setItem("door1lock", "lock");
      $('#door1').bootstrapToggle("off");
      $('#door1').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("door1lock", "unlock");
      $('#door1').bootstrapToggle('enable');
    }
  })
})

$(function() {
  $('#door1').change(function() {
    if (sessionStorage.getItem("door1") == "open") {
      sessionStorage.setItem("door1", "close");
    }
    else {
      sessionStorage.setItem("door1", "open");
    }
  })
})

$(function() {
  $('#door2lock').change(function() {
    if (sessionStorage.getItem("door2lock") == "unlock") {
      sessionStorage.setItem("door2lock", "lock");
      $('#door2').bootstrapToggle("off");
      $('#door2').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("door2lock", "unlock");
      $('#door2').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#door2').change(function() {
    if (sessionStorage.getItem("door2") == "open") {
      sessionStorage.setItem("door2", "close");
    }
    else {
      sessionStorage.setItem("door2", "open");
    }
  })
})

$(function() {
  $('#door3lock').change(function() {
    if (sessionStorage.getItem("door3lock") == "unlock") {
      sessionStorage.setItem("door3lock", "lock");
      $('#door3').bootstrapToggle("off");
      $('#door3').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("door3lock", "unlock");
      $('#door3').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#door3').change(function() {
    if (sessionStorage.getItem("door3") == "open") {
      sessionStorage.setItem("door3", "close");
    }
    else {
      sessionStorage.setItem("door3", "open");
    }
  })
})

$(function() {
  $('#door4lock').change(function() {
    if (sessionStorage.getItem("door4lock") == "unlock") {
      sessionStorage.setItem("door4lock", "lock");
      $('#door4').bootstrapToggle("off");
      $('#door4').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("door4lock", "unlock");
      $('#door4').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#door4').change(function() {
    if (sessionStorage.getItem("door4") == "open") {
      sessionStorage.setItem("door4", "close");
    }
    else {
      sessionStorage.setItem("door4", "open");
    }
  })
})

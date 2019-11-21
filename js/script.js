// Button and Msg Discovery
const left_button = document.querySelector("button.left-button");
const right_button = document.querySelector("button.right-button");
const discovery = document.querySelector("div.discovery");
const about = document.querySelector("section.about-box");
const about_img = document.querySelector("img.about-img");
// End Button and Msg Discovery

// Button Click
left_button.addEventListener("click", turn_left);
right_button.addEventListener("click", turn_right);
// End Button Click

// Img
const top_left = document.querySelector("img.img-top-left");
const top_right = document.querySelector("img.img-top-right");
const bottom_right = document.querySelector("img.img-bottom-right");
const bottom_left = document.querySelector("img.img-bottom-left");
// End Img

// Click Img
top_left.addEventListener("click", click_top_left);
top_right.addEventListener("click", click_top_right);
bottom_right.addEventListener("click", click_bottom_right);
bottom_left.addEventListener("click", click_bottom_left);

var orientation_left = {
  // Auxilities for check orientation
  top_left: Number(),
  top_right: Number(),
  bottom_left: Number(),
  bottom_right: Number()
};
var orientation_right = {
  top_left: Number(),
  top_right: Number(),
  bottom_left: Number(),
  bottom_right: Number()
};

var top_left_correct = Boolean();
var top_right_correct = Boolean();
var bottom_right_correct = Boolean();
var bottom_left_correct = Boolean();
var discovery_ok = Boolean();

function click_top_left() {
  // Check if anyone was clicked
  if (
    top_left_correct === false ||
    top_right_correct === false ||
    bottom_right_correct === false ||
    bottom_left_correct === false
  ) {
    if (
      !(
        top_right.style.marginBottom == "3%" ||
        bottom_right.style.marginTop == "3%" ||
        bottom_left.style.marginTop == "3%"
      )
    ) {
      if (top_left.style.marginRight != "3%") {
        top_left.style.marginRight = "3%";
        top_left.style.marginBottom = "3%";
        top_left.classList.add("selected");
      } else {
        top_left.style.marginRight = "0%";
        top_left.style.marginBottom = "0%";
        top_left.classList.remove("selected");
      }
    }
  } else {
    top_left.style.marginRight = "0%";
    top_left.style.marginBottom = "0%";
    discovery_ok = true;
    discovery.innerHTML = "Discovery!";
    discovery.style.background = "var(--discovery-background)";
    top_left.classList.remove("selected");
    show_about();
  }
}
function click_top_right() {
  if (
    top_left_correct === false ||
    top_right_correct === false ||
    bottom_right_correct === false ||
    bottom_left_correct === false
  ) {
    if (
      !(
        top_left.style.marginBottom == "3%" ||
        bottom_right.style.marginTop == "3%" ||
        bottom_left.style.marginTop == "3%"
      )
    ) {
      if (top_right.style.marginLeft != "3%") {
        top_right.style.marginLeft = "3%";
        top_right.style.marginBottom = "3%";
        top_right.classList.add("selected");
      } else {
        top_right.style.marginLeft = "0%";
        top_right.style.marginBottom = "0%";
        top_right.classList.remove("selected");
      }
    }
  } else {
    top_right.style.marginLeft = "0%";
    top_right.style.marginBottom = "0%";
    discovery_ok = true;
    discovery.innerHTML = "Discovery!";
    discovery.style.background = "var(--discovery-background)";
    top_right.classList.remove("selected");
    show_about();
  }
}
function click_bottom_right() {
  if (
    top_left_correct === false ||
    top_right_correct === false ||
    bottom_right_correct === false ||
    bottom_left_correct === false
  ) {
    if (
      !(
        top_right.style.marginBottom == "3%" ||
        top_left.style.marginBottom == "3%" ||
        bottom_left.style.marginTop == "3%"
      )
    ) {
      if (bottom_right.style.marginLeft != "3%") {
        bottom_right.style.marginLeft = "3%";
        bottom_right.style.marginTop = "3%";
        bottom_right.classList.add("selected");

        bottom_left.style.marginBottom = "3%"; //For both don't move, only one
      } else {
        bottom_right.style.marginLeft = "0%";
        bottom_right.style.marginTop = "0%";
        bottom_right.classList.remove("selected");

        bottom_left.style.marginBottom = "0%"; //For both don't move, only one
      }
    }
  } else {
    bottom_right.style.marginLeft = "0%";
    bottom_right.style.marginTop = "0%";
    bottom_left.style.marginBottom = "0%";
    discovery_ok = true;
    discovery.innerHTML = "Discovery!";
    discovery.style.background = "var(--discovery-background)";
    bottom_right.classList.remove("selected");
    show_about();
  }
}
function click_bottom_left() {
  if (
    top_left_correct === false ||
    top_right_correct === false ||
    bottom_right_correct === false ||
    bottom_left_correct === false
  ) {
    if (
      !(
        top_right.style.marginBottom == "3%" ||
        bottom_right.style.marginTop == "3%" ||
        top_left.style.marginBottom == "3%"
      )
    ) {
      if (bottom_left.style.marginRight != "3%") {
        bottom_left.style.marginRight = "3%";
        bottom_left.style.marginTop = "3%";
        bottom_right.style.marginBottom = "3%"; //For both don't move, only one
        bottom_left.classList.add("selected");
      } else {
        bottom_left.style.marginRight = "0%";
        bottom_left.style.marginTop = "0%";
        bottom_left.classList.remove("selected");
        bottom_right.style.marginBottom = "0%"; //For both don't move, only one
      }
    }
  } else {
    bottom_left.style.marginRight = "0%";
    bottom_left.style.marginTop = "0%";
    bottom_right.style.marginBottom = "0%";
    discovery_ok = true;
    discovery.innerHTML = "Discovery!";
    discovery.style.background = "var(--discovery-background)";
    bottom_left.classList.remove("selected");
    show_about();
  }
}
// End Click Img

// Turn Img
function check_which_turn() {
  //Return the img for turn
  if (top_left.style.marginBottom == "3%") {
    return top_left;
  } else {
    if (top_right.style.marginBottom == "3%") {
      return top_right;
    } else {
      if (bottom_right.style.marginTop == "3%") {
        return bottom_right;
      } else {
        if (bottom_left.style.marginTop == "3%") {
          return bottom_left;
        }
      }
    }
  }
}

function turn_left() {
  var img = check_which_turn();
  if (img === top_left) {
    img.style.transform += "rotate(-90deg)";
    orientation_left["top_left"] += -90;
    var result =
      (orientation_left["top_left"] + orientation_right["top_left"]) / 180;
    if (result % 2 == 1 || result % 2 == -1) {
      top_left_correct = true;
    } else {
      top_left_correct = false;
    }
  } else {
    if (img === top_right) {
      img.style.transform += "rotate(-90deg)";
      orientation_left["top_right"] += -90;
      var result =
        (orientation_left["top_right"] + orientation_right["top_right"]) / 180;
      if (result % 2 == 1 || result % 2 == -1) {
        top_right_correct = true;
      } else {
        top_right_correct = false;
      }
    } else {
      if (img === bottom_right) {
        img.style.transform += "rotate(-90deg)";
        orientation_left["bottom_right"] += -90;
        var result =
          (orientation_left["bottom_right"] +
            orientation_right["bottom_right"]) /
          180;
        if (result % 2 == 1 || result % 2 == -1) {
          bottom_right_correct = true;
        } else {
          bottom_right_correct = false;
        }
      } else {
        if (img === bottom_left) {
          img.style.transform += "rotate(-90deg)";
          orientation_left["bottom_left"] += -90;
          var result =
            (orientation_left["bottom_left"] +
              orientation_right["bottom_left"]) /
            180;
          if (result % 2 == 1 || result % 2 == -1) {
            bottom_left_correct = true;
          } else {
            bottom_left_correct = false;
          }
        }
      }
    }
  }
}
function turn_right() {
  var img = check_which_turn();
  if (img === top_left) {
    img.style.transform += "rotate(90deg)";
    orientation_right["top_left"] += 90;
    var result =
      (orientation_left["top_left"] + orientation_right["top_left"]) / 180;
    if (result % 2 == 1 || result % 2 == -1) {
      top_left_correct = true;
    } else {
      top_left_correct = false;
    }
  } else {
    if (img === top_right) {
      img.style.transform += "rotate(90deg)";
      orientation_right["top_right"] += 90;
      var result =
        (orientation_left["top_right"] + orientation_right["top_right"]) / 180;
      if (result % 2 == 1 || result % 2 == -1) {
        top_right_correct = true;
      } else {
        top_right_correct = false;
      }
    } else {
      if (img === bottom_right) {
        img.style.transform += "rotate(90deg)";
        orientation_right["bottom_right"] += 90;
        var result =
          (orientation_left["bottom_right"] +
            orientation_right["bottom_right"]) /
          180;
        if (result % 2 == 1 || result % 2 == -1) {
          bottom_right_correct = true;
        } else {
          bottom_right_correct = false;
        }
      } else {
        if (img === bottom_left) {
          img.style.transform += "rotate(90deg)";
          orientation_right["bottom_left"] += 90;
          var result =
            (orientation_left["bottom_left"] +
              orientation_right["bottom_left"]) /
            180;
          if (result % 2 == 1 || result % 2 == -1) {
            bottom_left_correct = true;
          } else {
            bottom_left_correct = false;
          }
        }
      }
    }
  }
}
// End Turn Img

// Show About
function show_about() {
  about.style +=
    "position: relative; padding-top: 1.2%; padding-bottom: 0.5%; ";
  about.innerHTML +=
    "<div class='about-content content-container'> <img class='about-img content-container' src='img/mozila/logo.png'> <p class='about-text content-container'>Mozilla Firefox  is a free and open source web browser which is made by the Mozilla Foundation and its subsidiary, the Mozilla Corporation. It works on common operating systems, such as Windows, macOS, Linux and Android. With Firefox, browsing features can be added or removed and users can customize Firefox to fit their needs. This was done to make Firefox safe and simple to use. See more <a class='about-link' href='https://www.mozilla.org/en-US/about/'>Mozila Firefox</a>.</p> </div>";
  about.style += "display: block";
}
// End Show About

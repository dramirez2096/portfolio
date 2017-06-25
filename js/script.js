function toggleNavPanel (x) {
  var panel = document.getElementById (x), maxW="100%";
  if(panel.style.width == maxW) {
    panel.style.width = "0px";
  } else {
    panel.style.width = maxW;
  }
}
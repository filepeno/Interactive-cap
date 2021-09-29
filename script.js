"use strict";

document.addEventListener("DOMContentLoaded", loadSvg);

let elementToPaint;

async function loadSvg() {
  const resp = await fetch("assets/cap03.svg");
  const svgData = await resp.text();
  document.querySelector("main").innerHTML = svgData;
  init();
}

function init() {
  console.log("init");
  document.querySelectorAll(".g_to_interact").forEach((g) => g.addEventListener("click", getElement));
  document.querySelectorAll(".color_btn").forEach((btn) => btn.addEventListener("click", getColor));
}

function getElement(e) {
  console.log(e.target.parentElement);
  elementToPaint = e.target.parentElement;
  unhighlight();
  highlight(elementToPaint);
}

function unhighlight() {
  document.querySelectorAll(".g_to_interact").forEach((g) => {
    g.style.stroke = "";
  });
}

function highlight(elementToPaint) {
  if (elementToPaint === undefined) {
    console.log("Choose what to colour");
  } else {
    elementToPaint.style.stroke = "black";
    elementToPaint.style.strokeWidth = "5px";
  }
}

function getColor(e) {
  const chosenColor = e.target.attributes.fill.value;
  changeColour(chosenColor);
}

function changeColour(chosenColor) {
  console.log(chosenColor);
  if (elementToPaint === undefined) {
    console.log("You haven't chosen what to colour");
  } else {
    elementToPaint.style.fill = chosenColor;
  }
  elementToPaint = undefined;
  unhighlight();
}

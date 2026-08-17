const state = {
  background: "",
  body: "",
  eyes: "",
  nose: "",
  mouth: "",
  hairBack: "",
  hairFront: "",
  outfit: "",
  accessory: ""
};

const ids = {
  bgLayer: "background",
  bodyLayer: "body",
  eyesLayer: "eyes",
  noseLayer: "nose",
  mouthLayer: "mouth",
  hairBackLayer: "hairBack",
  hairFrontLayer: "hairFront",
  outfitLayer: "outfit",
  accessoryLayer: "accessory"
};

const welcome = document.getElementById("welcome");
const creator = document.getElementById("creator");
const startBtn = document.getElementById("startBtn");

startBtn?.addEventListener("click", () => {
  welcome.hidden = true;
  creator.hidden = false;

  loadState();
  render();
});

function render() {
  Object.entries(ids).forEach(([elementId, key]) => {
    const img = document.getElementById(elementId);

    if (img) {
      img.src = state[key] || "";
    }
  });
}

function setLayer(layer, imagePath) {
  state[layer] = imagePath;

  saveState();

  render();
}

function saveState() {
  localStorage.setItem(
    "girlBecomingState",
    JSON.stringify(state)
  );
}

function loadState() {
  const saved = localStorage.getItem("girlBecomingState");

  if (!saved) return;

  try {
    Object.assign(state, JSON.parse(saved));
  } catch (err) {
    console.error(err);
  }
}

document.querySelectorAll("nav button").forEach(button => {

  button.addEventListener("click", () => {

    const options = document.getElementById("options");

    options.innerHTML = `
      <h3>${button.dataset.tab}</h3>

      <p>
      Customization options for
      <strong>${button.dataset.tab}</strong>
      will appear here.
      </p>
    `;

  });

});

window.GirlCreator = {
  state,
  render,
  setLayer,
  saveState,
  loadState
};

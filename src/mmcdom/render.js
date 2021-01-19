import mount from "./mount";
import diff from "./diff";

function render(element, container) {
  if (!container) {
    throw new Error(
      "O container não existe. Você precisa passar um container para renderizar seu app."
    );
  }

  container.appendChild(mount(element));
}

export default render;

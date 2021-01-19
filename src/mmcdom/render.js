import mount from "./mount";
import patch from "./patch";

function render(element, nextElement, container) {
  if (!container) {
    throw new Error(
      "O container não existe. Você precisa passar um container para renderizar seu app."
    );
  }

  container.appendChild(mount(element));
}

export default render;

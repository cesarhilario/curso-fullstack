import mount from "./mount";
import diff from "./diff";
import patch from "./patch";

function render(element, nextElement, container) {
  if (!container) {
    throw new Error(
      "O container não existe. Você precisa passar um container para renderizar seu app."
    );
  }

  container.appendChild(mount(element));

  const patches = diff(element, nextElement);
  patch(container, patches);
}

export default render;

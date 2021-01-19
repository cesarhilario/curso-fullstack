// import { OPERATIONS } from "./diff";
import mount from "./mount";

function setProp(target, name, value) {
  if (name === "className") {
    return target.setAttribute("class", value);
  }
  target.setAttribute(name, value);
}

function removeProp(target, name) {
  if (name === "className") {
    return target.removeAttribute("class");
  }
  target.removeAttribute(name);
}

function patchProps(parentElement, patches) {
  for (let i = 0; i < patches.length; i++) {
    const propPatch = patches[i];
    const { type, name, value } = propPatch;
    if (type === OPERATIONS.SET_PROP) {
      setProp(parentElement, name, value);
    }
    if (type === OPERATIONS.REMOVE_PROP) {
      removeProp(parentElement, name);
    }
  }
}

function patch(parentElement, patches, index = 0) {
  if (!patches) return;

  const el = parentElement.childNodes[index];

  switch (patches.type) {
    case OPERATIONS.CREATE: {
      const newElement = mount(patches.newVNode);
      parentElement.appendChild(newElement);
      break;
    }
    case OPERATIONS.REMOVE: {
      parentElement.removeChild(el);
      break;
    }
    case OPERATIONS.REPLACE: {
      const newElement = mount(patches.newVNode);
      parentElement.replaceChild(newElement, el);
      break;
    }
    case OPERATIONS.UPDATE: {
      const { props, children } = patches;

      patchProps(el, props);

      for (let i = 0; i < children.length; i++) {
        patch(el, children[i], i);
      }

      break;
    }
    default: {
      break;
    }
  }
}

export default patch;

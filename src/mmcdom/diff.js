export const OPERATIONS = {
  CREATE: "CREATE",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
  UPDATE: "UPDATE",
  SET_PROP: "SET_PROP",
  REMOVE_PROP: "REMOVE_PROP",
};

function diffProps(oldVNode, newVNode) {
  const patches = [];
  const props = Object.assign({}, newVNode.props, oldVNode.props);

  Object.keys(props).forEach((name) => {
    if (name === "children") return;

    const newVal = newVNode.props[name];
    const oldVal = oldVNode.props[name];

    if (!newVal) {
      patches.push({ type: OPERATIONS.REMOVE_PROP, name, value: oldVal });
    } else if (newVal !== oldVal) {
      patches.push({ type: OPERATIONS.SET_PROP, name, value: newVal });
    } else {
      return;
    }
  });

  return patches;
}

function diffChildren(oldVNode, newVNode) {
  const patches = [];
  const patchesLength = Math.max(
    newVNode.props.children.length,
    oldVNode.props.children.length
  );

  for (let i = 0; i < patchesLength; i++) {
    const changes = diff(
      oldVNode.props.children[i],
      newVNode.props.children[i]
    );

    if (changes) {
      patches[i] = changes;
    }
  }

  return patches;
}

function changed(node1, node2) {
  return (
    typeof node1 !== typeof node2 ||
    (typeof node1 === "string" && node1 !== node2) ||
    node1.type !== node2.type
  );
}

function diff(oldVNode, newVNode) {
  if (!oldVNode) {
    return { type: OPERATIONS.CREATE, newVNode };
  }

  if (!newVNode) {
    return { type: OPERATIONS.REMOVE };
  }

  if (changed(oldVNode, newVNode)) {
    return { type: OPERATIONS.REPLACE, newVNode };
  }

  if (newVNode.type) {
    return {
      type: OPERATIONS.UPDATE,
      props: diffProps(oldVNode, newVNode),
      children: diffChildren(oldVNode, newVNode),
    };
  }

  return null;
}

export default diff;

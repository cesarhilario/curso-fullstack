function createElement(component, props, ...children) {
  if (typeof component === "function") {
    return component();
  }

  const obj = Object.create(null);
  const objProps = Object.create(null);

  return Object.assign(obj, {
    type: component,
    props: Object.assign(objProps, props, {
      children,
    }),
  });
}

export default createElement;

import shouldPureComponentUpdate from './function';

export function pureClass(Component) {
  const componentName = Component.displayName || Component.name || 'component';

  if (Component.prototype === undefined) {
    throw new Error(`${componentName} does not have a prototype`);
  }

  if (Component.prototype.shouldComponentUpdate !== undefined) {
    throw new Error(`${componentName} already has shouldComponentUpdate`);
  }

  Component.prototype.shouldComponentUpdate = shouldPureComponentUpdate;
}

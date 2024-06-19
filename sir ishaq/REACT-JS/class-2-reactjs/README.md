# React + Vite

> The component which is used in other states will be a StateFull Component.
> A component which is not used in any other state will be a Stateless Component.

Currently, two official plugins are available:

(From Child to Parent) In order to pass data from the child to the parent, we use props, but instead of passing values or data, we pass a method. The parent will specify which action needs to be taken, and the child will call that method as needed.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

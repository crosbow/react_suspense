# Understand React suspense and error boundary

- **Learn `</ Suspense>` Component** <br />
  Handling promises In component
  <br/>

  1. The child component first time must return a Promise.
  2. When Suspense re-render, it must get Promise as resolved. Otherwise fallback always shown(loading is true)

- **Learn `</ ErrorBoundary>` Component** <br />
  Handle error and catch a error in a boundary by wrapping the component from - `npm i react-error-boundary`

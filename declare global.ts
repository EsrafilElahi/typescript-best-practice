// dont do this
const a = (window as any).foo()

// do this
decalre global {
  interface Window {
    foo: () => string
  }
}
const a = window.foo()

 

// 增量
export const increment = state => {
  state.count++
  state.history.push('increment')
}

// 减量
export const decrement = state => {
  state.count--
  state.history.push('decrement')
}

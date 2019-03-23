export const state = () => ({
  counter: 0,
  discounts: []
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

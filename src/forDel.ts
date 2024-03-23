export let store = {
  _state: {
    firstName: "Gago",
    lastName: "Pogosyan",
  },
  _subscriber() {},
  getState() {
    return this._state
  },
  subscribe(observer: any) {
    this._subscriber = observer
  },
  setFirstName(newFirstName: string) {
    this._state.firstName = newFirstName
    this._subscriber()
  },
}

// store.subscribe(()=>{console.log("The firstName has been changed.")})

store.setFirstName("Vaz")

// console.log(store.getState())

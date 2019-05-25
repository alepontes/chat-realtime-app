import { createStore } from 'redux'

import reduces from './reduces'

const store = createStore(reduces)

export default store
// https://nerdcave.com/tailwind-cheat-sheet
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L5

import 'styled-components'

// 1. fonts colors, scree sizes etc
export * from './settings'

// 2 Tools (use javascript)
// -- nothing in here

// 3. Resets and normalizers, box-sizing etc..
export * from './generic'

// 4. styling for bare HTML elements like (h1, a, header, footer)
export * from './elements'

// 5. Objects → layout mostly
// https://codepen.io/collection/DmzVOM/

// 6. Components → Specific UI components, button, card, concrete-list
export * from './components'
// 7. Utilities → utils & helper classes with ability to override anything which
// goes before in the triangle

import {createGlobalStyle} from 'styled-components'
import bgpattern from './hideout.svg'
import normalize from 'normalize.css'

export const GenericStyles = createGlobalStyle`
${normalize}
	/**
	 * Set up a decent box model on the root element
	 */

	html {
    font-size: 62.5%;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
    margin-left: calc(100vw - 100%);
	}

	/**
	 * Make all elements from the DOM inherit from the parent box-sizing
	 * Since * has a specificity of 0, it does not override the html value
	 * making all elements inheriting from the root box-sizing value
	 * See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
	 */
	*, *::before, *::after {
		box-sizing: inherit;
	}
  body { }
`

import styled from 'styled-components'
import {screens} from 'src/styles/settings'

export const Sidebar = styled.div`
  background-color: #fff;
  flex: 0 1 300px;

  @media (min-width: ${screens.md}) {
    margin-right: 2rem;
  }
`
export const Main = styled.div`
  width: 95%;
  margin: 0 auto;
`

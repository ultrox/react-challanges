import styled from 'styled-components'
import {screens, colors} from './settings'

export const AppWrapper = styled.div`
  font-size: 2rem;
`

export const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${screens.sm}) {
    display: block;
    width: 65%;
  }

  @media (min-width: ${screens.md}) {
    width: 85%;
    display: flex;
  }

  @media (min-width: ${screens.lg}) {
    width: 65%;
  }

  @media (min-width: ${screens.xl}) {
    width: 110rem;
  }
`

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  @media (min-width: ${screens.lg}) {
    font-size: 3rem;
  }

  text-align: center;
  color: ${colors.gray[600]};
`

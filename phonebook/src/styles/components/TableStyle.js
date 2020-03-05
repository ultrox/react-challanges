import React from 'react'
import styled from 'styled-components'
import {colors} from 'src/styles/settings'

const mainColor = colors.indigo[700]

export const TableStyle = styled.table`
  margin-top: 1rem;
  width: 100%;
  border-collapse: collapse;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`

const tdTh = `
  white-space: nowrap;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`
export const Td = styled.th`
  font-weight: normal;
  ${tdTh}
`

export const Th = styled.th`
  cursor: pointer;
  background-color: ${mainColor};
  color: #fff;
  ${tdTh}
`

export const Tr = styled.tr`
  &:hover {
    background-color: #edecfe;
  }
`

export const Footer = styled.div`
  background-color: ${mainColor};
  height: 5px;
`
// this is where count & date needs to be
export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Input = styled.input`
  margin-top: 0.3rem;
  padding: 4px;
`
export const Label = styled.label`
  display: inline-block;
  width: 120px;
  text-align: left;
  &:after {
    content: ":" 
  }
}
`
export const Button = styled.button`
  margin-top: 1rem;
  padding: 8px 11px;
  background-color: ${mainColor};
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
`
export const Form = styled.form``
export const FormInput = styled.div``

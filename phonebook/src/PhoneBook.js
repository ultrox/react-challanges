import React, {useRef, useCallback} from 'react'
import styled from 'styled-components'
import {
  TableStyle,
  Th,
  Td,
  Tr,
  Form,
  Input,
  Label,
  Button,
  FormInput,
} from 'src/styles/components/TableStyle'

const PhoneBookWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`
const initState = [
  {fname: 'Ki', lname: 'Sta', phone: '1111', address: 'Kolin Farki 5'},
  {fname: 'Vi', lname: 'Kir', phone: '0000', address: 'Rudi Kakona 111'},
  {fname: 'Ana', lname: 'Stalone', phone: '40000', address: 'Kiki'},
]

function PhoneBook() {
  const [people, setPeople] = React.useState(initState)

  function sortPhonebookBy(key) {
    // pob → person object
    const sortedPeople = people.sort((pob1, pob2) => {
      const test = pob1[key] < pob2[key]
      return test ? -1 : 1
    })

    setPeople(sortedPeople.slice())
  }

  /* useCallback has performance penality in this simple case */
  const handlePersonAdd = React.useCallback((data, form) => {
    setPeople(currPeople => [data].concat(currPeople))
    form.reset()
  }, [])

  return (
    <PhoneBookWrapper>
      <PhoneBookForm onPersonAdd={handlePersonAdd} />
      <TableStyle>
        <thead>
          <Tr
            onClick={e => {
              const sortKey = e.target.getAttribute('name')
              sortPhonebookBy(sortKey)
            }}
          >
            <Th name="fname" sort>
              First Name
            </Th>
            <Th name="lname">Last Name</Th>
            <Th name="phone">Phone</Th>
            <Th name="address">Address</Th>
          </Tr>
        </thead>
        <tbody>
          {people.map(p => {
            return (
              <Tr key={p.fname + p.address}>
                <Td>{p.fname}</Td>
                <Td>{p.lname}</Td>
                <Td>{p.phone}</Td>
                <Td>{p.address}</Td>
              </Tr>
            )
          })}
        </tbody>
      </TableStyle>
    </PhoneBookWrapper>
  )
}

function PhoneBookForm({onPersonAdd}) {
  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        /* no need to keep it in react state, I'm letting browser do its job
           HTML5 for the win */
        const {fname, phone, address, lname} = e.target
        const person = {
          fname: fname.value,
          phone: phone.value,
          address: address.value,
          lname: lname.value,
        }
        onPersonAdd(person, e.target)
      }}
    >
      <FormInput>
        <Label>First Name</Label>
        <Input required name="fname" placeholder="John" />
      </FormInput>

      <FormInput>
        <Label>Last Name</Label>
        <Input required name="lname" placeholder="Doe" />
      </FormInput>

      <FormInput>
        <Label>Phone</Label>
        <Input name="phone" placeholder="555-555-555" />
      </FormInput>
      <FormInput>
        <Label>Address</Label>
        <Input name="address" placeholder="Subway Str. 5" />
      </FormInput>
      <Button type="submit">Add New</Button>
    </Form>
  )
}
export default PhoneBook

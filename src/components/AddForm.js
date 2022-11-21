import React from 'react'
import { Form, FormControl, FormGroup, Button} from 'react-bootstrap';

const AddForm = () => {
  return (
    <>
    <Form className='text-center'>
        <FormGroup >
            <FormControl type="text" placeholder='Full Name' required />
        </FormGroup>
        <FormGroup className='my-3'>
            <FormControl type="email" placeholder='Email Address' required />
        </FormGroup>
        <FormGroup className='my-3'>
            <FormControl type="text" placeholder='Phone Number' required />
        </FormGroup>
        <FormGroup className='my-3'>
            <FormControl type="text" placeholder='Phone Number' required />
        </FormGroup>
        <Form.Select className='my-3' aria-label="Default select example">
         <option value="volvo">Please choose package</option>
         <option value="Joy Tandem">Joy Tandem</option>
         <option value="Instructional Tandem">Instructional Tandem</option>
         <option value="Acro Tandem">Acro Tandem</option>
        </Form.Select>
        <FormGroup className='my-3'>
            <FormControl type="date" placeholder='Booking Date' required />
        </FormGroup>
        <Button className="theme-btn theme-btn-one" type='submit'>Submit</Button>{' '}

    </Form>
    </>
  )
}

export default AddForm;
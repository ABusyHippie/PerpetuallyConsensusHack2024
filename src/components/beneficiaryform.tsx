//@ts-nocheck
import React, { FC } from 'react'
import { FormField, Form, Header } from 'semantic-ui-react'

interface IProps {
    handleChange: any
}

/**
* @author
* @function @BenificiaryForm
**/

const BenificiaryForm: FC<IProps> = ({ handleChange }) => {
    return (
        <div className='p-5'>
            <Header>Add Beneficiary</Header>
            <Form>
                <FormField>
                    <label>Name</label>
                    <input placeholder='Name' onChange={handleChange("name")} />
                </FormField>
                <FormField>
                    <label>Email</label>
                    <input placeholder='Email' onChange={handleChange("email")} />
                </FormField>
                <FormField>
                    <label>Wallet Address</label>
                    <input placeholder='Address' onChange={handleChange("address")} />
                </FormField>
            </Form>
        </div>
    )
}

export default BenificiaryForm;

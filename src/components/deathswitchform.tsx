//@ts-nocheck
import React, { FC } from 'react'
import { FormField, Form, Header } from 'semantic-ui-react'
interface IProps {
    handleChange: () => void
}

/**
* @author
* @function @DeathSwitchForm
**/

const DeathSwitchForm: FC<IProps> = ({ handleChange }) => {
    return (
        <div>
            <div className='p-5'>
                <Header>Death Switch Rules</Header>
                <Form>
                </Form>
            </div>
        </div>
    )
}

export default DeathSwitchForm;

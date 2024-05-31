//@ts-nocheck
import React, { FC, useState } from 'react'
import { Dropdown, FormField, Form, Header, Label, Input } from 'semantic-ui-react'
import TimeSelector from './selectTimer'
interface IProps {
    handleChange: () => void
}

/**
* @author
* @function @DeathSwitchForm
**/

const benef = [{
    key: "1",
    value: "ahmerpatel123@gmail.com",
    text: "ahmerpatel123@gmail.com"
}]

const distribute = [{
    key: "1",
    value: "50",
    text: "Evenly"
},
{
    key: "2",
    value: "50",
    text: "Individually"
}]


const types = [{
    key: "1",
    value: "timer",
    text: "Set a timer"
}, {
    key: "2",
    value: "inactivity",
    text: "Account inactivity"
}]


const DeathSwitchForm: FC<IProps> = ({ handleChange }) => {
    const [selectType, setType] = useState()
    console.log(selectType)
    return (
        <div>
            <div className='p-5 gap-3'>
                <Header>Death Switch Condition</Header>
                <Form >
                    <FormField>
                        <label>Name</label>
                        <Input type='ext' onChange={handleChange('name')} />
                    </FormField>
                    <FormField>
                        <label>Select Beneficiaries</label>
                        <Dropdown
                            placeholder='Select Beneficiaries'
                            fluid
                            multiple
                            search
                            selection
                            options={benef}
                        />
                    </FormField>
                    <FormField>
                        <label>Select Type of trigger</label>
                        <Dropdown
                            placeholder='Select Type'
                            fluid
                            selection
                            onChange={(e, data) => setType(data.value)}
                            options={types}
                        />
                    </FormField>
                    {selectType === "timer" && <FormField>
                        <label>Select date of trigger</label>
                        <Input placeholder='select trigger date' type='datetime-local'></Input>
                    </FormField>}
                    {selectType === "inactivity" && <FormField width={"8"}>
                        <label>Select Idle Time</label>
                        <TimeSelector />
                    </FormField>}
                    <FormField>
                        <label>Select Distribution</label>
                        <Dropdown
                            placeholder='Distribute'
                            fluid
                            multiple
                            search
                            selection
                            options={distribute}
                        />
                    </FormField>
                </Form>
            </div>
        </div>
    )
}

export default DeathSwitchForm;

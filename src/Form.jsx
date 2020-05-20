import React from 'react'

export default function Form(props) {

    const {
        values,
        onInputChange,
        onSubmit,
    } = props




    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a member</h2>
                <button>Submit</button>
            </div> 

            <label> Name:&nbsp;
                <input
                type='text'
                placeholder='Type a name'
                name = 'name'
                value={values.name}
                onChange={onInputChange}
                />
            </label>&nbsp;

            <label>Email:&nbsp;
                <input
                    type='text'
                    placeholder='Type an email'
                    name = 'email'
                    value={values.email}
                    onChange={onInputChange}
                />

            </label>&nbsp;

            <label>Role:&nbsp;
            <select name='role' value={values.role} onChange={onInputChange}>
                <option value=''>Select a Role</option>
                <option value='FrontEnd'>Frontend</option>
                <option value='BackEnd'>Backend</option>
                <option value='UIUX'>UIUX</option>

            </select>
            </label>



        </form>
    )
}
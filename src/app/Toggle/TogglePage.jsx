'use client';
import Toggle from 'react-styled-toggle'
import ToggleButtonComponent from './ToggleButton';
import React from 'react'

function TogglePage() {
    return (
        <div className=' container '>
        <h5>Standard Permission</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">List</th>
                        <th scope="col">Show</th>
                        <th scope="col">Create</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <th scope="row">User</th>
                       <ToggleButtonComponent/>
                       <ToggleButtonComponent/>
                       <ToggleButtonComponent/>
                       <ToggleButtonComponent/>
                       <ToggleButtonComponent/>
                    </tr>
                    <tr>
                        <th scope="row">Roles</th>
                        <ToggleButtonComponent/>
                        <ToggleButtonComponent/>
                        <ToggleButtonComponent/>
                        <td className=''></td>
                        <td className=''></td>
                    </tr>
                    <tr>
                        <th scope="row">Resources</th>
                        <td></td>
                        <td></td>
                        <ToggleButtonComponent/>
                        <ToggleButtonComponent/>
                        <ToggleButtonComponent/>
                      
                    </tr>
                    <tr>
                        <th scope="row">Channels</th>
                        <ToggleButtonComponent/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">Api Keys</th>
                        <ToggleButtonComponent/>
                        <ToggleButtonComponent/>
                        <ToggleButtonComponent/>
                        <ToggleButtonComponent/>
                        <ToggleButtonComponent/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TogglePage
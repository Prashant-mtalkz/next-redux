"use client"
import Toggle from 'react-styled-toggle'
import ToggleButtonComponent from './ToggleButton';
import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'

function TogglePage() {
  const [state, setstate] = useState([]);
  const [Users, setUsers] = useState([]);
  const [Roles, setRoles] = useState([])
  const [Resources, setResources] = useState([])
  const [Channels, setChannels] = useState([])
  const [ApiKeys, setApiKeys] = useState([])  
  const [Additional, setAdditional] = useState([]);  
  const callData = async()=>{
        try {
            const data=await axios.get("https://app.mtalkz.cloud/perms.php?id=5")
            setstate(data.data)
           
            setUsers(data?.data?.filter((item)=>item.indexOf("users")!=-1))
            setRoles(data?.data?.filter((item)=>item.indexOf("roles")!=-1))
            setResources(data?.data?.filter((item)=>item.indexOf("resources")!=-1))
            setChannels(data?.data?.filter((item)=>item.indexOf("channels")!=-1))
            setApiKeys(data?.data?.filter((item)=>item.indexOf("api-keys")!=-1))
            setAdditional(data?.data?.filter((item)=>item.indexOf("users")==-1 && item.indexOf("roles")==-1 && item.indexOf("resources")==-1 && item.indexOf("channels")==-1 && item.indexOf("api-keys")==-1))


        } catch (error) {
                console.log(error)
        }
    }   
    console.log(Users.filter((item)=>item.indexOf("list")!=-1))
    
    useEffect(() => {
        callData()
    }, [])

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
                      {
                        Users.filter((item)=>item.indexOf("list")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Users.filter((item)=>item.indexOf("show")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Users.filter((item)=>item.indexOf("store")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Users.filter((item)=>item.indexOf("update")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Users.filter((item)=>item.indexOf("destroy")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                    </tr>
                    <tr>
                        <th scope="row">Roles</th>
                        {
                        Roles.filter((item)=>item.indexOf("list")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Roles.filter((item)=>item.indexOf("show")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Roles.filter((item)=>item.indexOf("store")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Roles.filter((item)=>item.indexOf("update")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Roles.filter((item)=>item.indexOf("destroy")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                    </tr>
                    <tr>
                        <th scope="row">Resources</th>
                        {
                        Resources.filter((item)=>item.indexOf("list")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Resources.filter((item)=>item.indexOf("show")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Resources.filter((item)=>item.indexOf("store")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Resources.filter((item)=>item.indexOf("update")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Resources.filter((item)=>item.indexOf("destroy")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                    </tr>
                    <tr>
                        <th scope="row">Channels</th>
                        {
                       Channels.filter((item)=>item.indexOf("list")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Channels.filter((item)=>item.indexOf("show")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Channels.filter((item)=>item.indexOf("store")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Channels.filter((item)=>item.indexOf("update")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        Channels.filter((item)=>item.indexOf("destroy")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                    </tr>
                    <tr>
                        <th scope="row">Api Keys</th>
                        {
                        ApiKeys.filter((item)=>item.indexOf("list")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        ApiKeys.filter((item)=>item.indexOf("show")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        ApiKeys.filter((item)=>item.indexOf("store")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        ApiKeys.filter((item)=>item.indexOf("update")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                      {
                        ApiKeys.filter((item)=>item.indexOf("destroy")!=-1).length==0 ?(
                            <td className=''></td>
                        ):(
                        <ToggleButtonComponent/>
                        )
                      }
                    </tr>
                </tbody>
            </table>
            <h5>Additional permission</h5>
            <table className="table ">
            <tbody>
              
                {
                    Additional?.map((item)=>{
                        return( 
                        <tr> <td className='d-flex justify-content-between'>
                            {item.replace("."," ") .replace("-"," ")}
                            <div className='me-5'>
                            <Toggle/>
                            </div>
                        </td></tr>
                        )
                    })
                }
                
            </tbody>
           </table>
            
        </div>
    )
}

export default TogglePage
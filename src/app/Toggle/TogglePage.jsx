"use client"
import Toggle from 'react-styled-toggle'
import ToggleButtonComponent from './ToggleButton';
import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'

function TogglePage() {
  const [state, setstate] = useState([]);
  const [Entity, setEntity] = useState([]);
  const [Parameter, setParameter] = useState(6865480);
  const [Additional, setAdditional] = useState([]);  
  const callData = async()=>{
        try {
            const data=await axios.get(`https://app.mtalkz.cloud/perms.php?id=${Parameter}`)
            setstate(data.data)
            setAdditional(data?.data?.filter((item)=>item.indexOf("show")===-1 && item.indexOf("update")===-1 && item.indexOf("index")===-1 && item.indexOf("destroy")==-1 && item.indexOf("store")==-1))
            const EntityData =  [...new Set(data?.data?.map((item)=>item.slice(0,item.indexOf("."))))]
            setEntity(EntityData)
            
        } catch (error) {
                console.log(error)
        }
    }   
    console.log(Entity)

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
                  {
                    Entity.map((item,index)=>{
                      return <tr>
                        <th>
                          {(item.slice(0,item.indexOf('.')).replace('-'," "))}
                        </th>
                        
                        {
                          (state.filter((item2)=>item2.split(".")[0]==item)).filter(x=>x.split(".")[1]=="index").length ==0 ?(
                            <td className=''></td>
                          ):(
                        <ToggleButtonComponent/>
                        )  
                        }
                        
                        {
                          (state.filter((item2)=>item2.split(".")[0]==item)).filter(x=>x.split(".")[1]=="show").length ==0 ?(
                            <td className=''></td>
                          ):(
                        <ToggleButtonComponent/>
                        )  
                        }
                        {
                          (state.filter((item2)=>item2.split(".")[0]==item)).filter(x=>x.split(".")[1]=="store").length ==0 ?(
                            <td className=''></td>
                          ):(
                        <ToggleButtonComponent/>
                        )  
                        }
                        {
                          (state.filter((item2)=>item2.split(".")[0]==item)).filter(x=>x.split(".")[1]=="update").length ==0 ?(
                            <td className=''></td>
                          ):(
                        <ToggleButtonComponent/>
                        )  
                        }
                        {
                          (state.filter((item2)=>item2.split(".")[0]==item)).filter(x=>x.split(".")[1]=="destroy").length ==0 ?(
                            <td className=''></td>
                          ):(
                        <ToggleButtonComponent/>
                        )  
                        }
                      </tr>
                    })
                  }
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
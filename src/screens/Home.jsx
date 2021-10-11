import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { allPolocyDetails } from "../actions/UserAction"



export const Home = (props) =>{


    const dispatch = useDispatch()
    const signInDetails = useSelector(state=>state.signInDetails)
    const {userInfo} = signInDetails
    if(!userInfo){
        props.history.push("/signin")
    }

    const allPolicyDetails = useSelector(state=>state.allPolicyDetails)
    const {loading,allPolicyInfo,error} = allPolicyDetails

    useEffect(()=>{
        dispatch(allPolocyDetails())
    },[])


    return(
        <>

<table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0"  style={{marginTop:"30px",marginLeft:"30px"}}>
  <thead>
    <tr>
      <th class="th-sm" style={{textAlign:"center"}}>Client Name

      </th>
      <th class="th-sm" style={{textAlign:"center"}}>Email Id

      </th>
      <th class="th-sm" style={{textAlign:"center"}}>Contact

      </th>
      <th class="th-sm" style={{textAlign:"center"}}>Actions

      </th>
     
    </tr>
  </thead>
  <tbody>
      {
          allPolicyInfo ?
        (
          
          allPolicyInfo.map(data=>(
           
        <tr key={data.id}>
            <td>{data.clientName}</td>
            <td>{data.emailId}</td>
            <td>{data.mobile}</td>
            <td style={{textAlign:"center"}}><button type="button" class="btn btn-info btn-rounded" onClick={()=>{props.history.push({ pathname: "/details", state: data.id })}}>Details</button></td>
            
          </tr>
          
         
          ))
        )
          :null
      }
   
  </tbody>
</table>

        </>
    )




}
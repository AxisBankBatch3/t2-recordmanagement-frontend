import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useLocation } from "react-router"
import { allPolocyDetailsByPan } from "../actions/UserAction"



export const Details=(props)=>{

    const location = useLocation()
    const dispatch = useDispatch()
    const signInDetails = useSelector(state=>state.signInDetails)
    const {userInfo} = signInDetails
    if(!userInfo){
        props.history.push("/signin")
    }

    const getPolicyBypan = useSelector(state=>state.getPolicyBypan)
    const {loading,allPolicyInfobyPan,error} =  getPolicyBypan
   
      // console.log(allPolicyInfobyPan.insurance.health[0].policyNumber)
   if(allPolicyInfobyPan){
       console.log(allPolicyInfobyPan.insurance.health[0].policyNumber)
   }

    useEffect(()=>{
        dispatch(allPolocyDetailsByPan(location.state))
    },[])


    return(
        <>
        {
            allPolicyInfobyPan ?

            <div class="container">
            <div class="row">

                <div class="col-md-12 order-md-1">
                    <h4 class="mb-3">Insurance Form</h4>
                    <form class="needs-validation" novalidate="">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">Client Full name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="firstName"
                                    placeholder=""
                                    value={allPolicyInfobyPan.clientName}
                                    
                                ></input>
                               
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="email">
                                    Email <span class="text-muted"></span>
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    value={allPolicyInfobyPan.emailId}
                                    
                                  
                                />
                               
                            </div>

                        </div>


                        <div class="row">
                            <div class="col-md-6 mb-6">
                                <label for="cc-expiration">DOB</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="cc-expiration"
                                    value={allPolicyInfobyPan.birthDate}
                                />
                                
                            </div>
                            <div class="col-md-6 mb-6">
                                <label for="inputState" class="form-label">
                                    insurance type
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="cc-expiration"
                                    value={allPolicyInfobyPan.insurance[0]}
                                />
                            </div>
                        </div>
                        

                       { allPolicyInfobyPan.insurance.health.length > 0 
                       ?
                       <>
                       <br></br>
                       <div style={{ border: "2px solid green", backgroundColor: "#F7E7E3", padding: "15px" }}>
                           <div class="row">
                               <div class="col-md-12 mb-3">
                                   <label for="firstName">Policy Number</label>
                                   <input
                                       type="text"
                                       class="form-control"
                                       id=""
                                       placeholder=""
                                       value={allPolicyInfobyPan.insurance.health[0].policyNumber}
                                   ></input>
                                   
                               </div>
                           </div>
                           <div class="row">
                               <div class="col-md-6 mb-6">
                                   <label for="formFile" class="form-label">
                                       Upload Quote
                                   </label>
                                   <a  type="button" class="btn btn-primary btn-rounded" href={allPolicyInfobyPan.insurance.health[0].quote}>View</a>
                               </div>
                               <div class="col-md-6 mb-6">
                                   <label for="formFile" class="form-label">
                                       Upload Medical Report
                                   </label>
                                   <button type="button" class="btn btn-primary btn-rounded">View</button>
                               </div>
                           </div>
                           <div style={{ marginTop: "15px", display: "flex", justifyContent: "flex-end" }}>

                           </div>
                       </div>



                   </>

                       
                       :null
                       }


                               {
                                   allPolicyInfobyPan.insurance.motor.length > 0
                                   ?
                                   
                                   <>
                                   <br></br>
                                   <div style={{ border: "2px solid green", backgroundColor: "#F7E7E3", padding: "15px" }}>
                                       <div class="row">
                                           <div class="col-md-12 mb-3">
                                               <label for="firstName">Policy Number</label>
                                               <input
                                                   type="text"
                                                   class="form-control"
                                                   id=""
                                                   placeholder=""
                                                   value=""
                                               ></input>
                                               
                                           </div>
                                       </div>
                                       <div class="row">
                                           <div class="col-md-6 mb-6">
                                               <label for="formFile" class="form-label">
                                                   Upload Quote
                                               </label>
                                               <button type="button" class="btn btn-primary btn-rounded">Primary</button>
                                           </div>
                                           <div class="col-md-6 mb-6">
                                               <label for="formFile" class="form-label">
                                                   Upload RC document
                                               </label>
                                               <button type="button" class="btn btn-primary btn-rounded">Primary</button>
                                           </div>
                                       </div>
                                       <div style={{ marginTop: "15px", display: "flex", justifyContent: "flex-end" }}>
   
                                       </div>
                                   </div>
   
   
   
                               </>
   
   

                                   :null
                               }
                              
                               
                          




                        



                        <br></br>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">Adhar Number</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="aadhar"
                                    placeholder="xxxx-xxxx-xxxx"
                                    value=""
                                ></input>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Pan</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="lastName"
                                    placeholder="abc123xyz"
                                    value=""
                                />
                                
                            </div>
                        </div>
                        <br></br>



                        <div class="row">
                            <div class="col-md-6 mb-6">
                                <label for="formFile" class="form-label">
                                    Upload Adhar card
                                </label>
                                <button type="button" class="btn btn-primary btn-rounded">Primary</button>
                            </div>
                            <div class="col-md-6 mb-6">
                                <label for="formFile" class="form-label">
                                    Upload Pan
                                </label>
                                <button type="button" class="btn btn-primary btn-rounded">Primary</button>
                            </div>
                        </div><br></br>



                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input
                                type="text"
                                class="form-control"
                                id="address"
                                value=""
                            />
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="zip">Mobile</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="zip"
                                    value=""
                                />
                                <div class="invalid-feedback"> Zip code required. </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="zip">Zip</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="zip"
                                    value=""
                                />
                                <div class="invalid-feedback"> Zip code required. </div>
                            </div>
                        </div>

                        <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }} >
                            
                            <button type="button" class="btn btn-secondary" style={{ margin: "5px" }}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
            :
            null
        }
         

        </>
    )
}
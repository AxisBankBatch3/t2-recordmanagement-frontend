import { useState } from "react";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPolicy } from "../actions/UserAction";

export const AddPolicy = (props) => {
  const dispatch = useDispatch();
  const signInDetails = useSelector((state) => state.signInDetails);
  const { userInfo } = signInDetails;
  if (!userInfo) {
    props.history.push("/signin");
  }

  // const [loop, setLoop] = useState(0);

  // const [Health, setOption] = useState("");

  // const [mobile, setMobile] = useState("");
  // const [clientName, setClientName] = useState("");
  // const [email, setEmail] = useState("");

  // const [aadharNumber, setAddharNumber] = useState("");
  // const [aadharDoc, setAadharDoc] = useState();
  // const [panNumber, setPanNumber] = useState("");
  // const [panDoc, setPanDoc] = useState();
  // const [address, setAddress] = useState("");
  // const [zipCode, setZipCode] = useState("");
  // const [policyNumber, setpolicyNumber] = useState("");
  // const [specificDoc, setspecificDoc] = useState("")
  const [loop, setLoop] = useState(0)
  const [clientName,setClientName] =  useState("")

  const [clientAddress,setClientAddress] = useState("")

  const [pinCode,setPinCode] = useState("")

  const [emailId,setEmailId] = useState("")

  const [mobile,setMobile] = useState("")

  const [aadharNumber,setAadharNumber] = useState("")

  const [aadharDoc,setAadharDoc] = useState()

  const [panCardNumber,setPanCardNumber] = useState("")

  const [panCardDoc,setpanCardDoc] = useState()

  const [insuranceType,setInsuranceType] = useState("")

  const [policyNumber,setPolicyNumber] = useState("")

  const [policyQuote,setPolicyQuote] = useState()

  const [specificdocument,setSpecificDocument] = useState()
  
  



 

  const submitHandler = (event) => {
    event.preventDefault();


    var formData = new FormData();

    // formData.partnerId = userInfo.id;
    // formData.clientName = clientName;
    // formData.clientAddress = clientAddress;
    // formData.pinCode = pinCode;
    // formData.emailId = emailId;
    // formData.mobile = mobile;
    
    // formData.aadharNumber = aadharNumber;
    // formData.aadharURL = aadharDoc;
    // formData.panCardNumber = panCardNumber;
    // formData.panCardURL = panCardDoc;
    // formData.policyNumber = policyNumber;
    // formData.specificDoc = specificdocument;
    // formData.insurance = policyQuote;

    formData.append("partnerId",userInfo.id)
    formData.append("clientName",clientName)
    formData.append("clientAddress",clientAddress)
    formData.append("pinCode",pinCode)
    formData.append("emailId",emailId)
    formData.append("mobile",mobile)
    formData.append("aadharNumber",aadharNumber)
    formData.append("aadharDoc",aadharDoc)
    formData.append("panCardNumber",panCardNumber)
    formData.append("panCardDoc",panCardDoc)
    formData.append("insuranceType",insuranceType)
    formData.append("policyNumber",policyNumber)
    formData.append("policyQuote",policyQuote)
    formData.append("specificdocument",specificdocument)

    console.log(formData);
    dispatch(addPolicy(formData));
    props.history.push("/home");
    window.alert("policy added successfully");
    
   
    
  };

  return (
    <>
      <div class="container">
        <div className="row" style={{ paddingBlock: "1.5rem" }}>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="#">Partner</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Policy
              </li>
            </ol>
          </nav>
        </div>
        <div class="row">
          <div class="col-md-12 order-md-1">
            <h4 class="mb-3">Insurance Form</h4>
            <form
              class="needs-validation"
              novalidate=""
              onSubmit={submitHandler}
            >
              <div class="row" style={{ backgroundColor: "none" }}>
                <div class="col-md-3 mb-3">
                  <label for="firstName">Client Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  ></input>
                  <div class="invalid-feedback">
                    {" "}
                    Valid first name is required.{" "}
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="email">
                    Email <span class="text-muted"></span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    placeholder="abc@example.com"
                  />
                  <div class="invalid-feedback">
                    {" "}
                    Please enter a valid email address for shipping updates.{" "}
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Mobile</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback"> Zip code required. </div>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="firstName">Aadhaar Number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="aadhar"
                    placeholder="xxxx-xxxx-xxxx"
                    value={aadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                    required=""
                  ></input>
                  <div class="invalid-feedback">
                    {" "}
                    Valid first name is required.{" "}
                  </div>
                </div>

               
                
              </div>

              <div class="row"></div>
         

              <div class="row">
                
                <div class="col-md-3 mb-3">
                  <label for="lastName">Pan</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="abc123xyz"
                    value={panCardNumber}
                    onChange={(e) => setPanCardNumber(e.target.value)}
                    required=""
                  />
                  <div class="invalid-feedback">
                    {" "}
                    Valid last name is required.{" "}
                  </div>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="lastName">Insurance Type</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="health/vehicle"
                    value={insuranceType}
                    onChange={(e) => setInsuranceType(e.target.value)}
                    required=""
                  />
                  <div class="invalid-feedback">
                    {" "}
                    Valid last name is required.{" "}
                  </div>
                </div>
                

                <div class="col-md-3 mb-3">
                  <label for="zip">Policy Number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    value={policyNumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                    placeholder="policy number"
                    required=""
                  />
                  <div class="invalid-feedback"> policy number required. </div>
                </div>
                
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip Code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder=""
                    required=""
                  />
                  <div class="invalid-feedback"> Zip code required. </div>
                </div>
              </div>
              <br></br>

              <div class="row">
                <div class="col-md-6 mb-6">
                  <label for="formFile" class="form-label">
                    Upload Aadhaar card
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setAadharDoc(e.target.files[0])}
                  />
                </div>
                <div class="col-md-6 mb-6">
                  <label for="formFile" class="form-label">
                    Upload Pan
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setpanCardDoc(e.target.files[0])}
                  />
                </div>
              </div>
              <br></br>

              <div class="row">
                <div class="col-md-6 mb-6">
                  <label for="formFile" class="form-label">
                    Upload Quote
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setPolicyQuote(e.target.files[0])}
                  />
                </div>
                <div class="col-md-6 mb-6">
                  <label for="formFile" class="form-label">
                    Upload policy specific document
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setSpecificDocument(e.target.files[0])}
                  />
                </div>
              </div>
              <br></br>

              <div class="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  placeholder="1234 Main St"
                  required=""
                />
                <div class="invalid-feedback">
                  {" "}
                  Please enter your shipping address.{" "}
                </div>
              </div>

              <div class="row"></div>

              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                  // onClick={() => props.history.push("/home")}
                  style={{ margin: "5px" }}
                >
                  Submit
                </button><br/>
                <button
                  type="button"
                  class="btn btn-secondary"
                  style={{ margin: "5px" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

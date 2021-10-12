



export const Admindashboard = (props) =>{





    return(
        <>


            <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                  onClick={() => props.history.push("/addpartner")}
                  style={{ margin: "5px" }}
                >
                  Add Partner
                </button>

        </>
    )
}
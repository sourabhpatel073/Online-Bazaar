import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";


export default function Pagination() {
  const { setPage, page, Gdata } = useContext(Authcontext);
  console.log(Gdata.length);
  return (
    <div style={{ display: "flex", width: "30%", marginLeft: "30%" , marginTop:"3%", marginBottom:"3%"}}>
      <button
        style={{
          width: "30%",
          color: "white",
          backgroundColor: "black",
          borderRadius: "20px",
        }}
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page == 1}
      >
        perv
      </button>
      <h1
        style={{
          border: "1px solid red",
          fontSize: "xtraLarge",
          width: "50px",
          paddingLeft: "10px",
          margin:"auto"
        }}
      >
        
        <b> {page}</b>
      </h1>
      <button
        style={{
          width: "30%",
          color: "white",
          backgroundColor: "black",
          borderRadius: "20px",
        }}
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={10 != Gdata.length}
      >
        next
      </button>
    </div>
  );
}

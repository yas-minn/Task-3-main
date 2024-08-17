import "./UserDetails.css"
import UserPhoto from "/assets/avatar-jessica.jpeg"
function UserDetails() {
    return(
        <div id="Details">
        <img src={UserPhoto} id="Jimg"/>
        <h1 id="UserName">Jessica Randall</h1>
        <h4 id="Country">London, United Kingdom</h4>
        <p id="description">"Front-end developer and avit reader"</p>
        </div>
       
    )
}

export default UserDetails
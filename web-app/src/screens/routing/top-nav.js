import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styling/styles.css";

function TopNav() {
    return (
        <div className="header">
            <Link to="/account"><p>Account</p></Link>
            <Link to="/access"><p>Access</p></Link>
            <Link to="/"><p>Book List</p></Link>
            <Link to="/bookdetails"><p>Book Details</p></Link>
            <Link to="/uploadbook"><p>Upload Book</p></Link>
            <Link to="/admin"><p>Admin</p></Link>
        </div>
    )
}

export default TopNav;
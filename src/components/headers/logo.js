import { Link } from "gatsby"
import React from "react"

const Logo = (props) => (
    <Link to={`/`}>
        <img src={`${process.env.BASE_URL}/assets/images/icon/${props.logo}`} alt="Shop Logo" className="img-fluid" />
    </Link>
)

export default Logo
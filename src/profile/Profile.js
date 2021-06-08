import React from 'react'
import PropTypes from "prop-types";
const Profile = props => {
    const styleObject ={color: "black" , fontFamily: "cursive"}
    return (<div style={styleObject}>
        {props.Handlename(`${props.Fullname}`)}
        {props.children}

         <h1>{ props.Fullname }</h1> 
        <h2>{ props.bio }</h2> 
        <h3>{ props.profession }</h3>
        </div>
    );
}
Profile.propTypes = {
    FullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
   };
export default Profile;

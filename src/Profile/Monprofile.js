import React from "react";
import PropTypes from "prop-types";


function Monprofile(props) {

    return (

        <div>

            <h1>
                {props.fullname}
            </h1>

            <p>
                {props.bio}
            </p>

            <p>
                {props.profession}
            </p>

            {props.children}

            <br></br>

            <button onClick={() => props.alertMyInput(`Mon nom est Adama `)}>
                Afficher mon nom
            </button>

        </div>

    );
    
}


//Define the default props
Monprofile.defaultProps = {
    fullname: 'Mon surnom est ADN',
    bio: 'Un bio : Un tech lover, un Geek',
    profession: 'Profession : Web developer, web designer',

}


//Use PropsType to check props 
Monprofile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
   };



export default Monprofile;

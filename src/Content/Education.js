import React, { Component } from 'react';
import Widecard from '../Components/Widecard';


class Education extends Component { render() { return (

<div className="condiv">

<h1 className="subtopic">Education</h1>

<Widecard title="Management Information Systems" where="Oklahoma State Univsersity" from="Aug. 2015" to="May 2020"/>

<Widecard title="Highschool" where="Jenks Public School" from="2011" to="2015"/>

</div>

        )

}
}


export default Education
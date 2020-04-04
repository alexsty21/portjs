import React, { Component } from 'react'

{/* ARRAY OF SKILLS */}
class Skills extends Component {
constructor(props)
{

super(props);
this.state={
'myskills':
[
    'HTML','CSS','JS', 'REACT JS', 'C#', 'etc'
]

};
}

render() { return (

<div className="condiv skills">

<h1 className="subtopic">My Skills</h1>

{/* loop through */}
<ul> {this.state.myskills.map((value)=>

{
return <li>{value}</li>
})

    }
</ul>

</div>

    )
}
}
export default Skills
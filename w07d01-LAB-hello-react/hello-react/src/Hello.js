import React from "react";
// define a component called Hello that renders an h1 with the text "Hello World" in it.
function Hello (props) {
    
  return (props.names.map(item=><h1>Hello {item}</h1>));

}
export default Hello ;

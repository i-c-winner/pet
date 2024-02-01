import React from 'react';

function Item (props: {item: string})  {

  function clicking() {
    console.log(props.item)
  }

  return <React.Fragment>
    <li onClick={clicking}>{props.item}</li>
  </React.Fragment>;

}

export { Item };

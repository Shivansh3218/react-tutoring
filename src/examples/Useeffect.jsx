import React, { useEffect, useState } from "react";

function Useeffect() {
  const [data, setData] = useState([]);

  // useEffect is a hook that is used to perform the side effects in the functional components. It is used for communication from outside world.

  //side effects => network request, data fetching, manual DOM manipulation, event listeners, timers, logging, etc.

  // to call an APi in react there are two methods

  //fetch= > default method to call API's
  //axios = > it is a library that youu have to install explicitly

  // useeffect takes two arguments=>
  // 1. callback fn
  //  2. dependency array = >The array on which call of useeffecct is dependent
  //if the dependency array is empty then the useEffect will run only once
  //if the dependency array is not empty then the useEffect will run whenever the value of the dependency array changes
  //if the dependency array is not present then the useEffect will run whenever the component is rendered or any state changes in the component.

  useEffect(() => {
    console.log("This will be only changed when the data is changed", data);
  }, [data]);

  useEffect(()=>{
   let getData =  async () => {
        let response = await fetch("https://reqres.in/api/users?page=2");
        let resposeData = await response.json();
        setData(resposeData.data);
        console.log(resposeData);
        console.log("This is useeffect", data);
      }
      getData()
  }, []);

  return (
    <div>
      <h1>Hello this is useeeffect</h1>
      {data.map((user, index) => {
        return <h1 key={index}>{user.first_name}</h1>;
      })}
    </div>
  );
}

export default Useeffect;

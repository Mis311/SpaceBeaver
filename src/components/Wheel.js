import React from 'react'


function Hello() {
    useEffect(() => {
      const doSomething = () => {};
  
      window.addEventListener("scroll", doSomething);
      return () => {
        window.removeEventListener("scroll", doSomething);
      };
    }, []);
  }


const Wheel = () => {
  return (
    <div>Wheel</div>
  )
}

export default Wheel
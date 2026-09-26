import { useEffect, useState } from "react";

const [showAysncButton, setShowAysncButton] = useState<boolean>(false);
const [showError, setShowError] = useState<boolean>(false);

useEffect(()=> {
  const timer = setTimeout(()=> {
    setShowAysncButton(true)
  }, 1000)
  clearTimeout(timer)
}, [])

const Sandbox = () => {
  return(
    <>
    <div>
      <nav>
        <a href="">home</a>
        <a href="">about</a>
      </nav>
      {/* headings */}
      <h1>main heading</h1>
      <h2>subheading</h2>
      <img src="" alt="" />
      {/* regular buttons */}
      <button>click me</button>
      <button>submit</button>
      <button>cancel</button>
    
      {showError && (<button>error</button>)}
      {showAysncButton && (<button>aysnc button</button>)}
    </div>
    </>
  )
};
export default Sandbox;

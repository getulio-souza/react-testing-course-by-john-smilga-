import { useEffect, useState } from "react";

const Sandbox = () => {

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showError] = useState<boolean>(false);

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setShowMessage(true)
    }, 500)
    return clearTimeout(timer)
  })

  return(
    <div>
      <h1>React testing library</h1>
      {showError && (<span>show error</span>)}
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>

      {showMessage && (<span>show message</span>)}
    </div>
  )

};
export default Sandbox;

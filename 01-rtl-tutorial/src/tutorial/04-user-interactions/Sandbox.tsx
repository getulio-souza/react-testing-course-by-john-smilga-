import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Sandbox = () => {
  const [count, setCount] = useState<number>(0);
  const [isLike, setIsLike] = useState<boolean>(false);

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
  }

  const handleToogleLiked = () => {
    setIsLike(!isLike)
  }

  return <div className="p-8 text-center">
    <h2 className="text-2xl font-bold mb-4">Count: {count}</h2>
    <button className="bg-blue-500 text-white" onClick={handleIncrease}>increase</button>
    <button className="bg-red-500 text-white" onClick={handleDecrease}>decrease</button>

    <div>
      {isLike ? (<button><FaRegHeart/></button>) : (<button><FaHeart/></button>)}
    </div>
  </div>;
};
export default Sandbox;

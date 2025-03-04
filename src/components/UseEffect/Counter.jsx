import { useState } from 'react';

const Counter = () => {

const [count, setCount] = useState(0);    

const contador = () => {
    setCount(count + 1);
}


return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => contador(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
</div>
);  


}

export default Counter;


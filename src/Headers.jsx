//use state hook to maintainthe state
import {useState} from 'react'
function Headers()

{
    //let count=0;
    const [count, setcount] = useState(0)//usestate snippet--- setfiest is the helper function
    //count is a variable
    //set count ----create this helper function take the state and pass the value to count
    //pass 0 to the argumnet
    //count will store the updation value of the setcount
    function handlecount()
    {
        setcount(count+1)
    }
    return(
        <>
        <button onClick={handlecount}>count {count}</button>
        

        </>
    )
}
export default  Headers
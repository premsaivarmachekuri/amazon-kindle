import { useEffect, useState } from "react"
const Navbar = ()  => {
    const [text, setText] = useState('')
    
    const enterText  = (e) => [
        setText(e.target.value)
    ]
    const searchBlogs = () => {
        console.log("Clicked")
    }

    useEffect(() =>{
        console.log(text)
    }, [text])

    return (
        <div>
            <imput type="text" placeholder="Enter the author name" onChange={enterText}  value={text}/>
            <button onClick={searchBlogs}>Search</button>
        </div>
    )
}

export default Navbar
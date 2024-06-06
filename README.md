# React js  

[Sheriyans coding school](https://www.youtube.com/playlist?list=PLbtI3_MArDOn2wYYazc6Q2mzEo-28r1d0)

## video - 2  

-> `onChange={(e)=>{setUsername(e.target.value) }}` - onChange function helps in Two way binding i.e. concatinating all the target values one by one with the help of setXyz()  

-> Dynamic Routing / App routing - make a folder in app with the name `[xyz]` and make a file with name page.js  

-> API calling - using axios.get() and async await  (firstly `npm i axios` and import axios then use it)

-> `useEffect` - it is a hook that avoids clicking and getting data and it directly renders the data on the page  
`import {useEffect} from 'react'` - hook at the top  
inside the page function use useEffect snippet -  
`useEffect(() => {  first  return () => { second }  }, [third])` <!-- changes needed -->  

-> props - parameter passed in an component to get data from main page to component  
main page `(useState-num(variable))` and `<Header num={num}/>` then in header use props as function parameter and props.num to get the num from main page and in `<Nav num={props.num}/>` to send the num further in nav  

-> Context Api - to avoid passing of data from one component to another, we use concept of context api  
`1:02:41 - 1:15:20` difficult to understand so repeat again <!-- changes needed -->  

-> React toastify - showing flash messages  
install -  
`npm install --save react-toastify`  
import -  
`import { ToastContainer, toast } from 'react-toastify';`  
`import 'react-toastify/dist/ReactToastify.css';`  
use it as `<ToastContainer/>` and `toast("message")` in notify function and call that function in onclick of button  

-> Server side rendering and client side rendering  
In Next js, server side rendering is by default  

-> Deployment -  
github -> render  

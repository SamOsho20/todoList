import { useState } from "react"

const TodoForm =  ({setTodoList}) =>{
// TAKING IN OUR SETTER FOR TODO LIST FROM THE PARENT FILE


// GETTER AND SETTERS FOR LIST 
const [list, setList] = useState({
    listCont : '',
    isCompleted: false
    })

// ERRORS FOR FORM  
const [errors, setErrors ] = useState({
    listCont : ''
})



// VALIDATING FORM INPUT 
const validateFormInput = (name, value) =>{
    const validation= {
        listCont : value => value.length >= 3? true: 'please enter a valid list'
    }
    setErrors(prev => ({...prev, [name]: validation[name](value)}))

}
    // FUNCTION THAT WILL TAKE IN USER LIST CONTENT AD ADD IT TO OUR LIST OF ALL LIST CONT
    const createList =  (e) =>{
        const {name, value} = e.target 

        setList(prev =>({...prev, [name]:value}))
        validateFormInput (name,value)
    }

    // VALIDATING THAT OUR FORM HAS NO ERRORS 
    const readyTosubmit = () =>{
        for (let  key in errors){
            if (errors[key]!== true)
            return false
        }
        return true
    }



    // FUNCTION THAT RUNS WHEN LIST IS SUBMITTED 
    const submitList = (e) =>{
        // WE TAKE IN e which is an object of our input 
        e.preventDefault()
        if(!readyTosubmit()){
            // MAKING SURE THE FORM HAS NO ERRORS 
            alert("please fill out form")
            return
        }

        // ASSIGNING NEW VALUE TO OUR SETTER 
        setTodoList(prev => [...prev,list])
        
        // SETTING OUR LIST TO BLANK 
        setList({
            listCont : ''})
    }






    return(
        <>
        <form onSubmit = {submitList}>
        <label>Create A to Do List:
        <input type="text" 
        name="listCont"
        value = {list.listCont}
        onChange={createList}
        />
        <button>Submit</button>

        {/* IF TEH FORM HAS ERRORS DO TEH FOLLOWING */}
        {errors.listCont && <p>{errors.listCont}</p>}
        </label>
        </form>

        </>
    )
}
export default TodoForm
const Display = ({todoList, setTodoList}) =>{




// FUNCTION TAHT DELETES AN ITEM 
const deleter = (deletedItem) =>{
    // HERE WE TAKE IN THE DELETED ITEM 
        let filteredList = todoList.filter(list => list.listCont !== deletedItem)
        // WE SET filteredList = TO A SPECIFIC ARRAY THAT RETURNS WHATEVER IS NOT EQUAL TO OUR deletedItem
        console.log(deletedItem)
        setTodoList(filteredList)
        // WE THEN SET OUR NEW LIST THAT DISPLAYS TO TEH NEW ARRAY 
    }


    // FUNCTION THAT RUNS WHEN WE CLICK CHECK ON OUR CHECKBOX
    const completedCont = (completedIndex) =>{
        // TAKES IN A INDEX
        let setCheckList = todoList.map((list, index) => {
            // MAPS OVER ALL OUR VALUES TO SEE WHAT VALUES MATCH OUR INDEX 
            if(completedIndex === index){
                // IF OUR ENETERED VALUE FOR INDEX IS EQUAL TO ANY INDEX IN THIS ARRAY 
            return {...list, isCompleted : true}}
            // THEN MAKE A COPY OF LIST AND SET isCompleted TO TRUE
            return list
            // AND RETURN THE LIST SO WE KNOW AN ATTRIBUTE HAS BEEN EDITED 
        })
        setTodoList(setCheckList)
    }

    return( 
    <>

    {/* MAP THROUGH THE LIST GRABBING ALL OF ITS CONTENT  */}
    {todoList.map((
        {listCont, isCompleted}, index) =>(
        // GRAB TWO PARAMETERS WITH LIST BEING EACH ITEM IN TODOLIST WITHIN THE ARRAY 
        // AND INDEX 
    <div key ={index}>
        <ul>
            {/* SO WE GRAB TEH ITEM LIST WITH THE SPECIFIC ATTRIBUTE listCont */}

            {isCompleted? <li style={{textDecoration:"line-through"}}>{listCont}</li> : <li>{listCont}</li>}
            {/* IF isCompleted is TRUE THEN SET tTEH STYLE TO ..., BUT IF FALSE JUST SHOW US AN LI TAG WITH listCont*/}
            <input onClick={() => completedCont(index)} type="checkbox"/>
            
        <button onClick={() => deleter(listCont)}>Delete</button>
        {/* WE PASS OUR DELETER FUNCTION TEH SPECIFIC listCont THAT WAS DELETED */}
        </ul>
    </div>
        ))}
    </>
)
}

export default Display
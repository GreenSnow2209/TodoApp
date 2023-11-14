
const Add = ({ updateData }) => {
    
    const handleKeydown = (e) => {
        if(e.key == "Enter") {
           console.log("enter")
           const newTodo =  {title: e.target.value, isComplete: false};
           if(newTodo) {
             updateData(newTodo);
           }
   
           e.target.value = "";
        };
     }


  return (
    <div>
        <input onKeyDown={ handleKeydown } type='text' placeholder='Thêm việc cần làm' />
    </div>
  )
}

export default Add
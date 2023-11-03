import { useState } from "react"
import "./List.css"
export const TodoItem = () => {
  const [be,setBe] = useState(0)
  const [done, setDone] = useState(0)


  return (
    <div className={` ${ be < 1  ? 'ls-div'  : 'ls-div-deleted'  }`} >
        <div className= {`${done < 1 ? 'ls-div-nameplate' : 'ls-div-nameplate-done'}`} >
            <button className={`${done < 1 ? 'btn-todo' : 'btn-todo-done'}`} onClick={() => setDone(done + 1)}>
            <label className='ls-div-label' htmlFor="checkbox">Cook Food</label>
            </button>
            
        </div>
        <div className="ls-div-button" >
            <button onClick={()=> setBe(be + 1)} className="ls-div-button-nn" type='submit'></button>
        </div>
    </div>
  )
}

import "./List.css"
export const TodoItem = () => {
  return (
    <div className='ls-div'>
        <div className='ls-div-nameplate'>
            <input type="checkbox" id ="checkbox"/>
            <label className='ls-div-label' htmlFor="checkbox">Cook Food</label>
        </div>
        <div className="ls-div-button" >
            <button className="ls-div-button-nn" type='submit'></button>
        </div>
    </div>
  )
}

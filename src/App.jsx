
import { TodoItem } from './TodoItem'
import './App.css'
 export function App (){
    return(
        <article className="tdl-article">
            <div className='tdl-article-div'>
            <h1 className="tdl-article-h1">Todo List +</h1>
                <header className="tdl-article-header"> 
                    <input className="tdl-article-header-input" type="text" placeholder="Add New Todo" />
                    <div className="tdl-article-header-div" >
                        <button className="tdl-article-header-div-button">Add</button>
                    </div>
                </header>
            </div>
            <section>
                <TodoItem/>
            </section>
        </article>
    )
 }

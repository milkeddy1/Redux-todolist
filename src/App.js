import Header from './component/Header/Header'
import Input from './component/Input/Input'
import Lists from './component/Lists/Lists'
import './App.css'
import { useState } from 'react'

function App() {
  const [note, setNote] = useState('')
  return (
    <div className="container">
      <div className="todolist_container">

        {/* 標題和未完成數 */}
        <Header />
        {/* todos */}
        <Lists />
        {/* 輸入欄位 */}
        <Input setNote={setNote} note={note} />

      </div>
    </div>
  );
}



export default App;

import './App.css'
import {useState} from 'react'

function App() {
    const [name, setName] = useState('Sofia')
    const [newName, setNewName] = useState('')

    // const updateName = (teacherName) => {
    //     setName(teacherName)
    // }

    const changeName = (e) => {
        e.preventDefault()

        if (newName !== '') {
            setName(newName)
            setNewName('')
        }
    }

    const update = (e) => {
        setNewName(e.target.value)
    }

    return (
        // <div>
        //     <h2>Teacher name: {name}</h2>
        //     <ul>
        //         <li onClick={()=>updateName('Data')}>Data</li>
        //         <li onClick={()=>updateName('Reyes')}>Reyes</li>
        //         <li onClick={()=>updateName('Yolanda')}>Yolanda</li>
        //     </ul>
        // </div>

        <div>
            <h2>Teacher name: {name}</h2>

            <form onSubmit={changeName}>
                <input
                    type='text'
                    value={newName}
                    onChange={update}
                    placeholder='Add a name'
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default App

import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  //Lisätään tila newNote, joka määritellään input-komponentin attribuutin
  //value arvoksi myöhemmin
  const [newNote, setNewNote] = useState(
    'a new note'
  )
  //Tapahtumankäsittelijä lomakkeen lähettämiseen, kts. alla form
  const addNote = (event) => {
    event.preventDefault()
    //Luodaan uutta muistiinpanoa vastaava olio noteObject
    const noteObject = {
      //Sisältö-kentän arvo saadaan komponentin tilasta newNote (yllä)
      content: newNote,
      date: new Date().toISOString,
      important: Math.random() > 0.5,
      id: notes.length + 1
    }
    //Lisätään muistiinpano notes-listaan (huom! käytetään concat-metodia)
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  //Tapahtumankäsittelijä, joka synkronoi syötekenttään tehdyt muutokset
  //App-komponentin tilaa. Ilman tätä uusi muistiinpano-kentän muokkaaminen ei onnistu
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, i) =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      {/*Lisätään lomake uuden muistiinpanon lisäämistä varten*/}
      <form onSubmit={addNote}>
        {/* Asetetaan newNote value-attribuutin arvoksi */}
        <input value={newNote}
          //Muutoksen tapahtumankäsittelijä
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App

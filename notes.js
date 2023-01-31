const chalk = require('chalk');
const fs = require('fs');

const myCat = () => {
    return 'Sasha Peletti'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note added')
        
    }else {
        console.log('Note title taken')
    }
}



const removeNote = (title) => {
      const notes = loadNotes()
     
      const notesToKeep = notes.filter((note) =>  note.title !== title)

     if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed"))
     }else {
         console.log(chalk.red.inverse("No note found"))
     }


      saveNotes(notesToKeep)
      
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('your notes: '))
    const printNotesTitles = notes.forEach( (note) => console.log(note.title))
    

}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse.green(note.title), note.body)
    } else {
        console.log(chalk.red.inverse('no note found'))
    }
}


const saveNotes = (notes) => {
      const dataJSON = JSON.stringify(notes)
      fs.writeFileSync('notes.json', dataJSON)
}
  
const loadNotes =  () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }catch(e) {
    return []
  }
}


module.exports = {
    myCat : myCat,
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}

//object.method
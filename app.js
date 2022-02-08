const chalk = require('Chalk')
const yargs = require('yargs')
const notes = require('./notes.js')  //object with two properties

//customize yargs version

yargs.version('1.1.0')
//for the handlers I will use the ES6 method definition syntax
//Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe:'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler (argv)  {
       notes.addNote(argv.title, argv.body)
    } 

})

//create remove command

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
        //console.log('removing the note', argv)
        //console.log('Title:' + argv.title)
    }
})

//create read command 

yargs.command({
    command: 'read',
    description: 'reading a note',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'list your notes',
   
    handler(argv) { 
        notes.listNotes(argv)
    }
})

// add, remove, read, list 
yargs.parse()

//console.log(yargs.argv)
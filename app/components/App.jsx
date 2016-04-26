import React from 'react';
import uuid from 'uuid';
import Note from './Notes.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn Webpack'
                },
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        };
    }

    render() {
        const notes = this.state.notes;

        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Note notes={notes} onEdit={this.editNote}/>
            </div>
        );
    }

    addNote = () => {
        this.setState({
           notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New Task'
           }])
        });
    };

    editNote = (id, task) => {
        if (!task.trim()) {
            return;
        }

        const notes = this.state.notes.map(note => {
            if (note.id == id && task) {
                note.task = task;
            }
            return note;
        });

        this.setState({notes});
    };
}


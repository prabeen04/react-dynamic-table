import React, { useState } from 'react';
import { Button, Input,  } from 'antd';

export default function EditTaskAction(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [newTask, setNewTask] = useState('')
    function handleRenameTaskName() {
        props.renameTaskName(props.original.id, newTask)
        setIsEditing(false)
    }
    return (
        <div>
            {!isEditing
                ? <Button
                    type='link'
                    onClick={() => setIsEditing(true)}
                >Edit</Button>

                : <div style={{ display: 'flex' }}>
                    <Input
                        placeholder='Enter Task'
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />&nbsp;
                    <Button
                        type='primary'
                        disabled={!newTask}
                        onClick={handleRenameTaskName}
                    > Save</Button>&nbsp;
                    <Button
                        onClick={() => setIsEditing(false)}
                    > Cancel</Button>
                </div>
            }
        </div>
    )
}


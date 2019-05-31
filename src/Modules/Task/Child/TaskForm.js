import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Select, Input, DatePicker, Button } from "antd";
import moment from "moment";
import { addTask } from "../TaskAction";
const { TextArea } = Input;
const { Option } = Select;

function TaskForm(props) {
    const { tasks, users, tags, addTask } = props;
    const initialFormState = {
        taskName: '',
        assignedTo: [],
        startDate: moment().toISOString(),
        endDate: '',
        tags: [],
        followers: [],
        description: '',
    }
    const [formState, setFormState] = useState(initialFormState)
    function renderUser() {
        return users.map((user, i) => <Option key={i} value={user}>{user}</Option>)
    }
    function renderTags() {
        return tags.map((tag, i) => <Option key={i} value={tag}>{tag}</Option>)
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(formState)
        addTask({ ...formState, id: tasks.length + 1 })
    }
    const disabled = !formState.taskName || !formState.assignedTo.length || !formState.endDate
    return (
        <form onSubmit={handleSubmit}>
            <div className='task-form'>
                <div className='form-group'>
                    <label>Task Name</label>
                    <Input
                        placeholder="Enter task"
                        value={formState.taskName}
                        onChange={(e) => setFormState({ ...formState, taskName: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <label>Assign To</label>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Assign users"
                        value={formState.assignedTo}
                        onChange={(user) => setFormState({ ...formState, assignedTo: user })}
                    >
                        {renderUser()}
                    </Select>
                </div>
                <div className='form-group'>
                    <label>End Date</label>
                    <DatePicker
                        placeholder='Enter Task End Date'
                        onChange={(e) => setFormState({ ...formState, endDate: moment(e).toISOString() })} />
                </div>
                <div className='form-group'>
                    <label>Tags</label>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Enter Tags"
                        onChange={(tag) => setFormState({ ...formState, tags: tag })}

                    >
                        {renderTags()}
                    </Select>
                </div>
                <div className='form-group'>
                    <label>Followers</label>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Select followers"
                        onChange={(user) => setFormState({ ...formState, followers: user })}
                    >
                        {renderUser()}
                    </Select>
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <TextArea
                        rows={4}
                        onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                        value={formState.description}
                    />
                </div>
                <Button
                    type='primary'
                    htmlType='submit'
                    icon='save'
                    disabled={disabled}
                    style={{ float: 'right' }}
                >Save</Button>
            </div>
        </form>
    )
}

const mapStateToProps = ({ task }) => ({
    tasks: task.tasks,
    users: task.users,
    tags: task.tags,
})
const mapDispatchToProps = dispatch => bindActionCreators({ addTask }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

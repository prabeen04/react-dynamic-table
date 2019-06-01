import React, { useState } from 'react';
import ReactTable from "react-table";
import { Button, Tag, Popover, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { renameTaskName } from "../TaskAction";
import moment from 'moment';
import "react-table/react-table.css";

function TaskTable(props) {
    const { tasks, renameTaskName } = props;
    const [newTask, setNewTask] = useState('')
    const [popoverVisible, setPopoverVisible] = useState(false)


    function renderUsers(cellInfo) {
        if (cellInfo.original.assignedTo.length <= 2) {
            return cellInfo.original.assignedTo.map((user, i) => <Tag key={i} color="blue">{user}</Tag>)
        } else {
            const fixedTags = cellInfo.original.assignedTo.slice(0, 2).map((user, i) => <Tag key={i} color="blue">{user}</Tag>)
            return [...fixedTags, <Tag>{` + ${cellInfo.original.assignedTo.length - 2}`}</Tag>]
        }
    }

    function renderFollowers(cellInfo) {
        if (cellInfo.original.followers.length <= 2) {
            return cellInfo.original.followers.map((user, i) => <Tag key={i} color="blue">{user}</Tag>)
        } else {
            const fixedTags = cellInfo.original.followers.slice(0, 2).map((user, i) => <Tag key={i} color="blue">{user}</Tag>)
            return [...fixedTags, <Tag>{` + ${cellInfo.original.followers.length - 2}`}</Tag>]
        }
    }

    function renderTags(cellInfo) {
        if (cellInfo.original.tags.length <= 2) {
            return cellInfo.original.tags.map((tag, i) => <Tag key={i} color="blue">{tag}</Tag>)
        } else {
            const fixedTags = cellInfo.original.tags.slice(0, 2).map((tag, i) => <Tag key={i} color="blue">{tag}</Tag>)
            return [...fixedTags, <Tag>{` + ${cellInfo.original.tags.length - 2}`}</Tag>]
        }
    }
    return (
        <div>
            <ReactTable
                data={tasks}
                columns={[
                    {
                        Header: "No",
                        accessor: "id",
                    },
                    {
                        Header: "Task Name",
                        accessor: "taskName",
                    },
                    {
                        Header: "Assigned to",
                        accessor: "assignedTo",
                        Cell: renderUsers,
                    },
                    {
                        Header: "Start date",
                        accessor: "startDate",
                        Cell: (cellInfo) => moment(cellInfo.original.startDate).format('ll')
                    },
                    {
                        Header: "End date",
                        accessor: "endDate",
                        Cell: (cellInfo) => moment(cellInfo.original.endDate).format('ll')
                    },
                    {
                        Header: "Tags",
                        accessor: "tags",
                        Cell: renderTags
                    },
                    {
                        Header: "Followers",
                        accessor: "followers",
                        Cell: renderFollowers
                    },
                    {
                        Header: "Description",
                        accessor: "description",
                    },
                    {
                        Header: "Action",
                        // accessor: "id",
                        width: 300,
                        Cell: (cellProps) => (

                            <EditableAction {...cellProps} newTask={newTask} setNewTask={setNewTask} renameTaskName={renameTaskName} />
                        )
                    },
                ]}
                defaultPageSize={10}
                className=" -highlight"
            />
        </div>
    );
}

const mapStateToProps = ({ task }) => ({
    tasks: task.tasks,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    renameTaskName
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);

function EditableAction(props) {
    const [popoverVisible, setPopoverVisible] = useState(false)
    const [newTask, setNewTask] = useState('')

    function Content() {
        return (<div style={{ display: 'flex' }}>
            <Input
                placeholder='Enter Task'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />&nbsp;
                <Button
                type='primary'
                onClick={() => setPopoverVisible(false)}
            >
                Save</Button>
                <Button
                onClick={() => setPopoverVisible(false)}
            >
                Cancel</Button>
        </div>)
    }
    return (
        <div>
            {/* 
            <Popover
                visible={popoverVisible}
                placement="left"
                content={<Content />}
            // trigger="click"
            > */}
            {!popoverVisible
                ? <Button
                    type='link'
                    onClick={() => setPopoverVisible(true)}
                >Edit</Button>
                : <Content />
            }
            {/* </Popover> */}
        </div>
    )
}


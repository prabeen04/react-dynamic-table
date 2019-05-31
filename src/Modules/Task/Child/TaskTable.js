import React, { useState } from 'react';
import ReactTable from "react-table";
import { Button, Tag, Popover, Input } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "react-table/react-table.css";
import moment from 'moment';

function TaskTable(props) {
    const { tasks } = props;
    const [newTask, setNewTask] = useState('')

    function MyPopover(props) {
        return (<Popover placement="left" content={<Content />} trigger="click">
            {props.children}
        </Popover>)
    }

    function Content(props) {
        return (<div style={{ display: 'flex' }}>
            <Input
                placeholder='Enter Task'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />&nbsp;
                <Button type='primary'>Save</Button>
        </div>)
    }
    function renderEditable(cellInfo) {
        console.log(cellInfo)
        return (<MyPopover>
            <Button type='link'>Edit</Button>
        </MyPopover>)
    }
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
            <MyPopover />
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
                        Cell: renderEditable
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

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);

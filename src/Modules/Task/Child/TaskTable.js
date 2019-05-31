import React from 'react';
import ReactTable from "react-table";
import { Button, Tag } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "react-table/react-table.css";
import moment from 'moment';

function TaskTable(props) {
    const { tasks } = props;
    function renderEditable(cellInfo) {
        console.log(cellInfo)
        return <Button>Edit</Button>
    }
    function renderUsers(cellInfo) {
        console.log(cellInfo)
        return <Tag closable  color="blue">Prabeen</Tag>
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
                    },
                    {
                        Header: "End date",
                        accessor: "endDate",
                    },
                    {
                        Header: "Tags",
                        accessor: "tags",
                    },
                    {
                        Header: "Followers",
                        accessor: "followers",
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
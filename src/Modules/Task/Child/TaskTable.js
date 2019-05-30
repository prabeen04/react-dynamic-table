import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class TaskTable extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                name: 'Tanner Linsley',
                age: 26,
            },
            {
                name: 'Tanner 2',
                age: 26,
            }]
        };
        this.renderEditable = this.renderEditable.bind(this);
    }
    renderEditable(cellInfo) {
        return (
            <div
                style={{ backgroundColor: "#fafafa" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = [...this.state.data];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({ data });
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data[cellInfo.index][cellInfo.column.id]
                }}
            />
        );
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "Name",
                            accessor: "name",
                            Cell: this.renderEditable
                        },
                        {
                            Header: "Age",
                            accessor: "age",
                            Cell: this.renderEditable
                        },
                        // {
                        //     Header: "Full Name",
                        //     id: "full",
                        //     accessor: d =>
                        //         <div
                        //             dangerouslySetInnerHTML={{
                        //                 __html: d.firstName + " " + d.lastName
                        //             }}
                        //         />
                        // }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
                {/* <Tips />
        <Logo /> */}
            </div>
        );
    }
}

export default TaskTable;
import React from 'react'
import { Button } from "antd";

export default function TaskHeader(props) {
    const { handleDrawerButtonClick } = props;
    return (
        <div className='table-header'>
            <h1 className='header-title'>Tassk</h1>
            <Button
                type='primary'
                icon='plus'
                onClick={() => handleDrawerButtonClick(true)}
            >Enter New Data</Button>
        </div>
    )
}

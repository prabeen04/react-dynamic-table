import React from 'react'
import { Button } from "antd";

export default function TableHeader(props) {
    const { onClick } = props;
    return (
        <div className='table-header'>
            <Button
            type='primary'
                onClick={onClick}
            >Add data</Button>
        </div>
    )
}

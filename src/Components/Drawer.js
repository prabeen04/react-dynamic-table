import React from 'react'
import { Drawer } from "antd";
export default function AppDrawer(props) {
    const { children, visible, handleDrawer, width, ...rest } = props
    return (
        <>
            <Drawer
                title="Add Data"
                placement="right"
                closable
                destroyOnClose
                width={width || 500}
                onClose={() => handleDrawer(false)}
                visible={visible}
                {...rest}
            >
                {children}
            </Drawer>
        </>
    )
}

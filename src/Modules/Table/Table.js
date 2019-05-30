import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleDrawerVisible } from "./TableAction";
import { Drawer } from '../../Components';
import TableHeader from './Child/TableHeader';
import './Table.css';

function Table(props) {
    const { drawerVisible, handleDrawerVisible } = props;
    return (
        <div>
            <TableHeader/>
            <Drawer
                visible={drawerVisible}
                handleDrawer={handleDrawerVisible}
            />
        </div>
    )
}

const mapStateToProps = ({ table }) => ({
    drawerVisible: table.drawerVisible,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    handleDrawerVisible
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Table);
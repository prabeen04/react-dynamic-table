import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleDrawerVisible } from "./TaskAction";
import { Drawer } from '../../Components';
import TaskHeader from './Child/TaskHeader';
import TaskTable from './Child/TaskTable';
import TaskForm from './Child/TaskForm';
import './Task.css';

function Task(props) {
    const { drawerVisible, handleDrawerVisible } = props;
    return (
        <div>
            <TaskHeader
                handleDrawerButtonClick={handleDrawerVisible} />
                <TaskTable/>
            <Drawer
                visible={drawerVisible}
                handleDrawer={handleDrawerVisible}
            >
                <TaskForm/>
            </Drawer>
        </div>
    )
}

const mapStateToProps = ({ task }) => ({
    drawerVisible: task.drawerVisible,
})
const mapDispatchToProps = dispatch => bindActionCreators({
    handleDrawerVisible
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Task);
import { useState } from "react";
import initialData from "./initial-data"
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import WorkUpdate from "./WorkUpdate";
import Search from '../component/search/Search';

const Container = styled.div`
    display: flex;
`;

function KanbanBoard () {
    const [state, setState] = useState(initialData);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    // 모달 열기
    const openModal = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTask(null);
    };

    const onDragEnd = (result) => {
        // TODO: reorder our column
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
    
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };
    
            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setState(newState);
            return;
        }

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        setState(newState);
    };

    return (
        <div className="layout-page">
            <Search />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className='card'>

                        <DragDropContext onDragEnd={onDragEnd}>
                            <Container>
                                {state.columnOrder.map((columnId) => {
                                    const column = state.columns[columnId];
                                    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
                                    
                                    return <Column key={column.id} column={column} tasks={tasks} openModal={openModal}/>;
                                })}
                            </Container>
                            {/* <button onClick={openModal}>modal Open</button> */}
                            {isModalOpen && <WorkUpdate closeModal={closeModal} task={selectedTask} />}
                            {/* {isModalOpen && <WorkAdd closeModal={closeModal} />} */}
                        </DragDropContext>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KanbanBoard;
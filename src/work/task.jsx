import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

function Task(props) {

    return (
        <>
            <Draggable draggableId={props.task.id} index={props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        onClick={() => props.openModal(props.task)}
                        // data-bs-toggle="modal"
                        // data-bs-target="#basicModal"
                    >
                        {props.task.content}
                    </Container>
                )}
            </Draggable>
            {/* {isModalOpen && <WorkAdd closeModal={closeModal} />} */}

            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                          Launch modal
                        </button> */}
        </>
    )
}

export default Task;
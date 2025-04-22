import React, { useState } from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "/public/css/project/kaban.css"
import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"
import MovableItem from './MovableItem';
import Column from './Column';
import { COLUMN_NAMES, data, activity, Users } from '../constants';
import { Offcanvas } from 'react-bootstrap'

const ProjectKanban = () => {
    const [items, setItems] = useState(data);
    const [show, setShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const moveCardHandler = (dragIndex, hoverIndex) => {
        const dragItem = items[dragIndex];
        if (dragItem) {
            setItems((prevState => {
                const coppiedStateArray = [...prevState];
                const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
                coppiedStateArray.splice(dragIndex, 1, prevItem[0]);
                return coppiedStateArray;
            }))
        }
    }
    const returnItemsForColumn = (columnName) => {
        return items
            .filter((item) => item.column === columnName)
            .map((item, index) => (
                <MovableItem key={item.id} 
                            name={item.name}
                            description={item.description}
                            dueDate={item.dueDate}
                            setItems={setItems}
                            index={index}
                            moveCardHandler={moveCardHandler}
                            onClick={() => handleCardClick(item)} 
                />
            ));
    };

    const handleCardClick = (item) => {
        setSelectedCard(item); // 클릭된 카드 정보 설정
        setShow(true); // Offcanvas 열기
    };

    const handleClose = () => {
        setShow(false); // Offcanvas 닫기
    };

    const {PLANNED, IN_PROGRESS, COMPLETE} = COLUMN_NAMES;

    return (
        <>
            <div className="container">
                <DndProvider backend={HTML5Backend}>
                    <Column title={PLANNED} className="kanban">
                        {returnItemsForColumn(PLANNED)}
                    </Column>
                    <Column title={IN_PROGRESS} className="kanban">
                        {returnItemsForColumn(IN_PROGRESS)}
                    </Column>
                    <Column title={COMPLETE} className="kanban">
                        {returnItemsForColumn(COMPLETE)}
                    </Column>
                </DndProvider>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><b>{selectedCard?.name}</b></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="mb-3" data-select2-id="5">
                        <h5>{selectedCard?.description}</h5>
                    </div>
                    <div className="mb-3">
                        <label className='mb-1'><b>참여자</b></label>
                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        {
                            Users.map((a, i) => (
                                <li
                                    key={i}  // key 속성 추가
                                    data-bs-toggle="tooltip"
                                    data-popup="tooltip-custom"
                                    data-bs-placement="top"
                                    className="avatar avatar-xs pull-up"
                                    title={a.label}  // 툴팁에 사용자 이름 표시
                                >
                                    <span className='avatar-initial bg-label-success rounded-circle'>
                                        {a.label.charAt(0)}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                    <div className="mb-3 row">
                        <label><b>마감일</b></label>
                        <p>{selectedCard?.dueDate}</p>                        
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <label className='mb-2'><b>Description</b></label>
                        <button type="button" className="btn btn-info" data-bs-dismiss="offcanvas"><b>코드리뷰 진행</b></button>
                    </div>
                    <div>
                        
                    </div>
                    <div></div>
                    <div className="mb-3">
                        <label className='mb-2'><b>Activity</b></label>
                        <div className='mb-3 input-group'>
                            <input type="text" placeholder="comment" className="form-control" aria-describedby='button-addon2'/>
                            <button className="btn btn-outline-primary" id="button-addon2">등록</button>
                        </div>
                        <div className='mb-3'>
                            <div className='tab-pane fade fext-heading active show' id='tab-activity' role='tabpanel'>
                                {
                                    activity.map((a, i) => (
                                        <div key={i} className='media mb-4 d-flex align-items-center'>
                                            <div className='avatar me-3 flex-shrink-0'>
                                                <span className='avatar-initial bg-label-success rounded-circle'>{a.name.charAt(0)}</span>
                                            </div>
                                            <div className='media-body'>
                                                <div className='mb-0 d-flex row'>
                                                    <div className='mb-0 d-flex justify-content-between'>
                                                        <span><b>{a.email}</b></span>
                                                        <small className='text-body-secondary'>{a.date}</small>
                                                    </div>
                                                    <span>{a.comment}</span>
                                                </div>
                                            </div>                   
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    <div className="mb-3 d-flex flex-wrap float-end">
                        <button type="button" className="btn btn-primary me-4" data-bs-dismiss="offcanvas"><b>수정</b></button>
                        <button type="button" className="btn btn-label-danger" data-bs-dismiss="offcanvas"><b>삭제</b></button>
                    </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ProjectKanban
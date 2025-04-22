import React, { useState } from 'react'
import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"
import "/public/css/project/kaban.css"
import { Offcanvas } from 'react-bootstrap'
import { tasks } from '../constants'
import UserSelect from "../UserSelect"
import Select from "react-select"

const selectStyles = {
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? "1px solid #696cff" : base.border,
        boxShadow: "none",
        width: "100%"
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#fff",
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? "rgba(105, 108, 255, 0.16)"
            : state.isFocused
            ? "rgba(34, 48, 62, 0.06)"
            : "#fff",
        color: state.isSelected ? "#696cff" : "#384551",
    }),
    multiValue: (base) => ({
        ...base,
        backgroundColor: "#f0f0f0",
    }),
};

export default function AddCard() {
    const [show, setShow] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true)
    
    return (
        <div className="addBtnWrap">
            <button className="kanban-add-btn" onClick={handleShow}>+ Add card</button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><b>Add Card</b></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form>
                        <div className="mb-3" data-select2-id="5">
                            <label className='mb-1'><b>기능</b></label>
                            <Select
                                classNamePrefix="form-select"
                                options={tasks}
                                value={selectedValue}
                                onChange={setSelectedValue}
                                placeholder="검색 후 추가"
                                styles={selectStyles}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='mb-1'><b>내용</b></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label className='mb-1'><b>참여자</b></label>
                            <UserSelect />
                        </div>
                        <div className="mb-3 row">
                            <label className='mb-1'><b>마감일</b></label>
                            <div>
                                <input className="form-control" type="date" value="2021-06-18" id="html5-date-input" />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap">
                            <button type="button" className="btn btn-primary me-4" data-bs-dismiss="offcanvas">등록</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="offcanvas">삭제</button>
                        </div>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
        
    )
}
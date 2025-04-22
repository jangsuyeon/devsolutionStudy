import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { COLUMN_NAMES } from "../constants";
import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"

const MovableItem = ({name, description, dueDate, index, moveCardHandler, setItems, onClick}) => {
    const changeItemColumn = (currentItem, columnName) => {
        setItems((prevState) => {
            return prevState.map(e => {
                return {
                    ...e,
                    column: e.name === currentItem.name ? columnName : e.column
                }
            })
        });
    }

    const ref = useRef(null);
    
    const [, drop] = useDrop({
        accept: 'card',
        hover(item, monitor) {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) return;

            const hoverBoundingRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

            moveCardHandler(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'card', 
        item: { index, name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if(dropResult){
                const {name} = dropResult;
                const {PLANNED, IN_PROGRESS, COMPLETE} = COLUMN_NAMES;
                switch(name) {
                    case PLANNED:
                        changeItemColumn(item, PLANNED);
                        break;
                    case IN_PROGRESS:
                        changeItemColumn(item, IN_PROGRESS);
                        break;
                    case COMPLETE:
                        changeItemColumn(item, COMPLETE);
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    const opacity = isDragging ? 0.4 : 1;

    drag(drop(ref));

    return (
        <div ref={ref} className="row movable-item" style={{ opacity }} onClick={onClick}>
            <div>
                <strong>{name}</strong>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <small>마감일: {dueDate}</small>
            </div>
        </div>
    )
}

export default MovableItem;
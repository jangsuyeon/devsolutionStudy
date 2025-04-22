import React from "react";
import { useDrop } from "react-dnd";
import AddCard from "./AddCard";

const Column = ({ children, className, title }) => {
    const [, drop] = useDrop({
        accept: 'card',
        drop: () => ({ name: title }),
    });

    return (
        <div ref={drop} className={`${className} kanban`}>
            <ColumnHeader title={title} />
            <ColumnBody>{children}</ColumnBody>
            <ColumnFooter />
        </div>
    );
};

const ColumnHeader = ({ title }) => (
    <div className="kanban-title">{title}</div>
);

const ColumnBody = ({ children }) => (
    <div className="kanban-body">{children}</div>
);

const ColumnFooter = () => (
    <div className="kanban-footer">
        <AddCard />
    </div>
)

export default Column;
import React, { useState } from "react";
import "./alarm.css";

const Alarm = () => {
    const [notifications, setNotifications] = useState([]);

    // 알림 추가 함수
    const addNotification = (type) => {
        const newNotification = {
            id: Date.now(),
            type: type,
            title:
                type === "chat"
                    ? "새로운 채팅 메시지!"
                    : type === "project"
                        ? "프로젝트 마감 알림"
                        : "작업 할당 알림",
            message:
                type === "chat"
                    ? "A님이 메시지를 보냈습니다."
                    : type === "project"
                        ? "‘프로젝트 X’의 마감일이 3일 남았습니다."
                        : "새로운 작업이 할당되었습니다. 확인해 주세요.",
            date: new Date().toLocaleTimeString(),
        };

        setNotifications((prev) => [...prev, newNotification]);
    };

    return (
        <div className="notification-container">
            {/* 알림 추가 버튼들 */}
            <div className="notification-controls">
                <button onClick={() => addNotification("chat")}>채팅 알림 추가</button>
                <button onClick={() => addNotification("project")}>프로젝트 마감 추가</button>
                <button onClick={() => addNotification("task")}>작업 할당 추가</button>
            </div>

            {/* 알림 리스트 */}
            <div className="notification-list">
                {notifications.map((notification) => (
                    <div key={notification.id} className={`notification-card ${notification.type}`}>
                        <div className="notification-header">
                            <span className="notification-title">{notification.title}</span>
                            <span className="notification-date">{notification.date}</span>
                        </div>
                        <p className="notification-message">{notification.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Alarm;

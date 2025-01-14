import React, { useState } from "react";
import "./Notification.css";

const initialNotifications = [
    { id: 1, message: "A 업무에 배정되었습니다.", date: "2023-01-14" },
    { id: 2, message: "채팅에 초대되었습니다.", date: "2023-01-13" },
    { id: 3, message: "B 프로젝트가 완료되었습니다.", date: "2023-01-12" },
];

const NotificationIcon = () => {
    const [notifications, setNotifications] = useState(initialNotifications);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const removeNotification = (id) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    return (
        <div className="notification-container">
            <button className="notification-button" onClick={toggleDropdown}>
                <span className="notification-icon">🔔</span>
                {notifications.length > 0 && (
                    <span className="notification-count">{notifications.length}</span>
                )}
            </button>
            {isOpen && (
                <div className="notification-dropdown">
                    {notifications.length > 0 ? (
                        notifications.map((notification) => (
                            <div key={notification.id} className="notification-item">
                                <div className="notification-text">
                                    <p>{notification.message}</p>
                                    <small>{notification.date}</small>
                                </div>
                                <button
                                    className="notification-remove"
                                    onClick={() => removeNotification(notification.id)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="no-notifications">알림이 없습니다.</div>
                    )}
                    <button className="close-button" onClick={toggleDropdown}>
                        닫기
                    </button>
                </div>
            )}
        </div>
    );
};

export default NotificationIcon;

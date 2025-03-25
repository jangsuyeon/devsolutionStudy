import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './notification.css';

const initialNotifications = [
    { id: 1, type: "업무", sender: "관리자", message: "A 업무에 배정되었습니다.", date: "2023-01-14", isRead: false },
    { id: 2, type: "채팅", sender: "김 주임", avatar: "img/avatars/1.png", message: "대리님 여기까지 작업하시면 되세요", date: "2023-01-13", isRead: false },
    { id: 3, type: "채팅", sender: "이 사원", avatar: "img/avatars/5.png", message: "대리님 고생하셨슴돠", date: "2023-01-13", isRead: false },
    { id: 4, type: "시스템", sender: "시스템 알림", message: "B 프로젝트가 완료되었습니다.", date: "2023-01-12", isRead: false },
];

const NotificationIcon = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState(initialNotifications);
    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState("전체");

    useEffect(() => {
        if ("Notification" in window && Notification.permission === "default") {
            Notification.requestPermission();
        }
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const markAsRead = (id) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id ? { ...notification, isRead: true } : notification
            )
        );
    };

    const removeNotification = (id) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };

    const clearAllNotifications = () => {
        setNotifications([]);
    };

    const handleNotificationClick = (notification) => {
        markAsRead(notification.id);

        if (notification.type === "업무") {
            navigate("/tasks");
        } else if (notification.type === "채팅") {
            navigate("/chat");
        } else if (notification.type === "시스템") {
            navigate("/system");
        }
    };

    const filteredNotifications = notifications.filter(n => filter === "전체" || n.type === filter);

    return (
        <div className="notification-container">
            <button className="notification-button" onClick={toggleDropdown}>
                <span className="notification-icon">🔔</span>
                {notifications.some((n) => !n.isRead) && (
                    <span className="notification-count">
                        {notifications.filter((n) => !n.isRead).length}
                    </span>
                )}
            </button>
            {isOpen && (
                <div className="notification-dropdown">
                    <div className="notification-header">
                        <button onClick={markAllAsRead}>모두 읽음</button>
                        <button onClick={clearAllNotifications}>모두 삭제</button>
                    </div>
                    <div className="notification-filter">
                        <button onClick={() => setFilter("전체")}>전체</button>
                        <button onClick={() => setFilter("업무")}>업무</button>
                        <button onClick={() => setFilter("채팅")}>채팅</button>
                        <button onClick={() => setFilter("시스템")}>시스템</button>
                    </div>
                    {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`notification-item ${notification.isRead ? "read" : "unread"} ${notification.type}`}
                                onClick={() => handleNotificationClick(notification)}
                            >
                                {notification.type === "채팅" && (
                                    <img src={notification.avatar} alt="avatar" className="notification-avatar" style={{ width: '20px', height: '20px', borderRadius: '50%', marginRight: '8px' }} />
                                )}
                                <div className="notification-text">
                                    <span className="notification-sender">{notification.sender}</span>
                                    <p>{notification.message}</p>
                                    <small>{notification.date}</small>
                                </div>
                                <button className="notification-remove" onClick={(e) => {
                                    e.stopPropagation();
                                    removeNotification(notification.id);
                                }}>
                                    X
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="no-notifications">알림이 없습니다.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationIcon;

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import './calendar.css';

const Calendar = () => {
    const initialEvents = [
        { id: '1', title: '프론트엔드 구현 완료', start: '2025-01-01', end: '2025-01-03', backgroundColor: '#60a5fa' },
        { id: '2', title: '백엔드 API 개발', start: '2025-01-04', end: '2025-01-06', backgroundColor: '#34d399' },
        { id: '3', title: '디자인 검토 회의', start: '2025-01-07', end: '2025-01-07', backgroundColor: '#f43f5e' },
    ];

    const [events, setEvents] = useState(initialEvents);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventData, setEventData] = useState({ title: '', start: '', end: '', backgroundColor: '#60a5fa' });

    const openModal = (event = null) => {
        if (event) {
            setSelectedEvent(event);
            setEventData({ title: event.title, start: event.startStr, end: event.endStr || event.startStr, backgroundColor: event.backgroundColor || '#60a5fa' });
        } else {
            setSelectedEvent(null);
            setEventData({ title: '', start: '', end: '', backgroundColor: '#60a5fa' });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const addOrUpdateEvent = () => {
        if (!eventData.title || !eventData.start || !eventData.end) {
            alert('제목, 시작일, 종료일을 입력하세요.');
            return;
        }
        if (selectedEvent) {
            setEvents(events.map(evt => evt.id === selectedEvent.id ? { ...evt, ...eventData } : evt));
        } else {
            setEvents([...events, { id: String(events.length + 1), ...eventData }]);
        }
        closeModal();
    };

    const deleteEvent = () => {
        if (selectedEvent) {
            setEvents(events.filter(evt => evt.id !== selectedEvent.id));
            closeModal();
        }
    };

    return (
        <div className="calendar-wrapper">
            <div className="calendar-container">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locales={[koLocale]}
                    locale="ko"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek',
                    }}
                    events={events}
                    editable={true}
                    selectable={true}
                    height="auto"
                    contentHeight="auto"
                    eventClick={(info) => openModal(info.event)}
                />
            </div>

            <button className="add-event-button" onClick={() => openModal()}>
    +
</button>


            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>{selectedEvent ? '일정 수정' : '새 일정 추가'}</h3>
                        <input
                            type="text"
                            placeholder="일정 제목"
                            value={eventData.title}
                            onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                        />
                        <input
                            type="date"
                            value={eventData.start}
                            onChange={(e) => setEventData({ ...eventData, start: e.target.value })}
                        />
                        <input
                            type="date"
                            value={eventData.end}
                            onChange={(e) => setEventData({ ...eventData, end: e.target.value })}
                        />
                        <div className="modal-buttons">
                            <button onClick={addOrUpdateEvent}>{selectedEvent ? '수정' : '추가'}</button>
                            {selectedEvent && <button className="delete-button" onClick={deleteEvent}>삭제</button>}
                            <button className="cancel-button" onClick={closeModal}>취소</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;

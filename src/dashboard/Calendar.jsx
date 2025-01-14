import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import './calendar.css';

const Calendar = () => {
    const events = [
        { id: '1', title: '프론트엔드 구현 완료', start: '2024-12-01', end: '2024-12-03', backgroundColor: '#60a5fa' },
        { id: '2', title: '백엔드 API 개발', start: '2024-12-04', end: '2024-12-06', backgroundColor: '#34d399' },
        { id: '3', title: '디자인 검토 회의', start: '2024-12-07', end: '2024-12-07', backgroundColor: '#f43f5e' },
        { id: '4', title: '프로젝트 코드 리뷰', start: '2024-12-08', end: '2024-12-08', backgroundColor: '#fbbf24' },
        { id: '5', title: 'QA 테스트 및 버그 수정', start: '2024-12-09', end: '2024-12-11', backgroundColor: '#a78bfa' },
        { id: '6', title: '배포 준비', start: '2024-12-12', end: '2024-12-13', backgroundColor: '#93c5fd' },
        { id: '7', title: '파트너사 미팅', start: '2024-12-14', end: '2024-12-14', backgroundColor: '#f472b6' },
        { id: '8', title: '사용자 피드백 분석', start: '2024-12-15', end: '2024-12-16', backgroundColor: '#86efac' },
        { id: '9', title: '리팩토링 작업', start: '2024-12-17', end: '2024-12-19', backgroundColor: '#fb923c' },
        { id: '10', title: '최종 배포 및 발표 준비', start: '2024-12-20', end: '2024-12-22', backgroundColor: '#fde047' },
    ];

    return (
        <div className="calendar-wrapper">
            <div className="calendar-container">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth" // 기본 보기를 월별 날짜 보기로 설정
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
                />
            </div>
        </div>
    );
};

export default Calendar;

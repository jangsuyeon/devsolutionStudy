import React from 'react';
import Profile1 from "../../public/img/avatars/1.png"
import Profile6 from "../../public/img/avatars/6.png"
import Profile7 from "../../public/img/avatars/7.png"


const TaskTable = () => {
    const taskList = [
        {
            업무: '디자인 개선',
            프로젝트명: 'UI/UX Design',
            담당자: {
                이름: 'Sophia Turner',
                아바타: {Profile1},
            },
            업무상태: 'CONFIRMED',
        },
        {
            업무: '프론트엔드 개발',
            프로젝트명: 'Smart Phone',
            담당자: {
                이름: 'Henry Barnes',
                아바타: {Profile1},
            },
            업무상태: 'IN PROGRESS',
        },
        {
            업무: 'API 설계 및 구현',
            프로젝트명: 'Backend Integration',
            담당자: {
                이름: 'Michael Scott',
                아바타: {Profile6},
            },
            업무상태: 'COMPLETED',
        },
        {
            업무: 'QA 테스트',
            프로젝트명: 'Web Application',
            담당자: {
                이름: 'Laura Anderson',
                아바타: {Profile7},
            },
            업무상태: 'PENDING',
        },
    ];

    const 상태클래스 = {
        CONFIRMED: 'badge bg-label-primary',
        'IN PROGRESS': 'badge bg-label-warning',
        COMPLETED: 'badge bg-label-success',
        PENDING: 'badge bg-label-secondary',
    };

    return (
        <div className="card mt-4" style={{ height: '100%', padding: '0', margin: '0', overflow: 'hidden' }}>
            <h5 className="card-header" style={{ margin: '0',  padding: '16px',textAlign: 'center' }}>업무 목록</h5>
            <div className="table-wrapper" style={{ height: 'calc(100% - 56px)', overflowY: 'hidden', padding: '0 16px' }}>
                <table className="table mb-0" style={{ width: '100%', borderSpacing: '0', tableLayout: 'fixed' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '10px' }}>업무</th>
                            <th style={{ padding: '10px' }}>프로젝트명</th>
                            <th style={{ padding: '10px' }}>담당자</th>
                            <th style={{ padding: '10px' }}>업무상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskList.map((task, index) => (
                            <tr key={index}>
                                <td>
                                    <strong>{task.업무}</strong>
                                    <div className="text-muted small">{task.프로젝트명}</div>
                                </td>
                                <td>{task.프로젝트명}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={task.담당자.아바타}
                                            alt="Avatar"
                                            className="rounded-circle me-2"
                                            style={{ width: '32px', height: '32px' }}
                                        />
                                        <span>{task.담당자.이름}</span>
                                    </div>
                                </td>
                                <td>
                                    <span className={상태클래스[task.업무상태]}>{task.업무상태}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskTable;

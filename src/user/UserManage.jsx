import React, { useState } from 'react'

import "/public/vendor/fonts/boxicons.css"

import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/css/demo.css"

import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"

import { Offcanvas, Button } from 'react-bootstrap'

function UserManage () {

    const users = [
        {
            id: "user1",
            name: "일용자",
            organization: "개발스터디",
            position: "대리",
            permission: "팀원",
            state: "대기중",
            request_at: "2025-02-28"
        },
        {
            id: "2user",
            name: "2용자",
            organization: "개발스터디",
            position: "사원",
            permission: "팀원",
            state: "대기중",
            request_at: "2025-02-28"
        },
        {
            id: "third",
            name: "삼용자",
            organization: "개발스터디",
            position: "과장",
            permission: "팀장",
            state: "수락",
            request_at: "2025-02-28"
        },
        {
            id: "user4",
            name: "4용자",
            organization: "개발스터디",
            position: "인턴",
            permission: "팀원",
            state: "대기중",
            request_at: "2025-02-28"
        },
        {
            id: "user5",
            name: "5용자",
            organization: "개발스터디",
            position: "주임",
            permission: "팀원",
            state: "대기중",
            request_at: "2025-02-28"
        },
    ];

    return(
        <>
            <div className="content-wrapper">


                <div className="container-xxl flex-grow-1 container-p-y">

                    <div className="card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", whiteSpace: "nowrap"}}>
                    <div style={{ display: "flex", height: "40px", alignItems: "center", gap: "10px"}}>
                        <span>Show</span>
                        <select name="pagination" className="form-select" id="pagination">
                            <option value="10" selected>10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>

                    <div style={{ display: "flex", height: "40px", gap: "10px"}}>
                        <input type="text" className="form-control" placeholder="검색 키워드" />
                        <select name="pagination" className="form-select" id="pagination">
                            <option value="이름" selected>이름</option>
                            <option value="직책">직책</option>
                            <option value="부서">부서</option>
                        </select>
                        <button type="button" className="btn btn-primary">검색</button>
                    </div>
                </div>

                        <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead>
                            <tr>
                                <th><input type="checkbox" id="all" /></th>
                                <th>ID</th>
                                <th>이름</th>
                                <th>그룹/회사</th>
                                <th>직책</th>
                                <th>요청권한</th>
                                <th>요청상태</th>
                                <th>요청일자</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {/* ✅ map()을 이용한 반복 렌더링 */}
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td><input type="checkbox" id={user.id} /></td>
                                        <td>
                                            <i className="fab fa-angular fa-lg text-danger me-3"></i>
                                            <strong>{user.id}</strong>
                                        </td>
                                        <td>{user.name}</td>
                                        <td>{user.organization}</td>
                                        <td>{user.position}</td>
                                        <td>{user.permission}</td>
                                        <td>{user.state}</td>
                                        <td>{user.request_at}</td>
                                        <td><button type="button" className="btn btn-primary">관리</button></td>
                                    </tr>
                                ))}
                            
                            </tbody>
                        </table>
                        </div>
                    </div>

                    <div className="content-backdrop fade"></div>
                </div>
            </div>

        </>
    )
}
export default UserManage
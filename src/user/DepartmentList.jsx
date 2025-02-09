function DepartmentList({ departments }) {

    return (
        <>
            <div
            style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "10px"
            }}>
                <div>
                    <h3>부서 관리</h3>
                </div>
                <div>
                    <table style={{
                        borderCollapse: "separate",
                        borderSpacing: "0 10px"
                    }}>
                        {departments.map((dept, index) => (
                                <tr key={index}>
                                    <td>{dept.deptName}</td>
                                    <td>{dept.deptLeader}팀장 외 {dept.deptMembers}명</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">수정</button>
                                    </td>
                                </tr>
                        ))}
                    </table>
                    <button type="button" className="btn btn-secondary">+</button>
                </div>
                <div style={{ display: "flex" }}>
                    <button type="button" className="btn btn-primary" style={{ marginLeft: "auto" }}>확인</button>
                </div>
            </div>
        </>
    )
}

DepartmentList.defaultProps = {
    departments: [
    {
        deptName: '개발팀',
        deptLeader: '개발자',
        deptMembers: 3
    },
    {
        deptName: '디자인팀',
        deptLeader: '디자이너',
        deptMembers: 2
    },
    {
        deptName: '운영팀',
        deptLeader: '운영자',
        deptMembers: 4
    },
    ]
}

export default DepartmentList;
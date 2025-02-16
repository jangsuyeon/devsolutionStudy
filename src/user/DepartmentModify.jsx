function DepartmentModify({ departmentTitle, departmentLeader, departmentMembers }) {

    return (
        <>
            <div
            style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "10px"
            }}>
                <div style={{position:"relative"}}>
                    <h3 style={{textAlign:"center"}}>부서 관리</h3>
                    <button
                        type="button"
                        className="btn"
                        style={{
                            position:"absolute",
                            top:"0",
                            right:"0"
                        }}>X</button>
                </div>
                <div>
                    <table
                     style={{
                        borderCollapse: "separate",
                        borderSpacing: "0 10px"
                    }}>
                        <tr>
                            <td>부서명</td>
                            <td colSpan={"3"}><input type="text" className="form-control" placeholder="부서 이름을 입력해주세요" defaultValue={departmentTitle}/></td>
                        </tr>
                        <tr>
                            <td>팀장</td>
                            <td>{departmentLeader.memberName}</td>
                            <td><input type="text" className="form-control" placeholder="직책을 입력해주세요"/></td>
                            <td><button type="button" className="btn btn-primary">변경</button></td>
                        </tr>
                        {departmentMembers.map((member, index) => (
                                <tr key={index}>
                                    <td>팀원</td>
                                    <td>{member.memberName}</td>
                                    <td><input type="text" className="form-control" placeholder="직책을 입력해주세요"/></td>
                                    <td><button type="button" className="btn btn-primary">제거</button></td>
                                </tr>
                        ))}
                    </table>
                    <button>+</button>
                </div>
                <div style={{ display: "flex" }}>
                    <button type="button" className="btn btn-primary" style={{ marginLeft: "auto" }}>확인</button>
                    <button type="button" className="btn btn-secondary" style={{ marginLeft: "10px" }}>취소</button>
                </div>
            </div>
        </>
    )
}

DepartmentModify.defaultProps = {
    departmentTitle: '개발팀',
    departmentLeader: {
        memberName: '일용자',
        memberPosition: '차장'
    },
    departmentMembers: [
    {
        memberName: '이용자',
        memberPosition: '과장'
    },
    {
        memberName: '삼용자',
        memberPosition: '대리'
    },
    {
        memberName: '사용자',
        memberPosition: '사원'
    },
    ]
}

export default DepartmentModify;
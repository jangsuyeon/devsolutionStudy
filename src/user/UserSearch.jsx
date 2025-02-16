function UserSearch({ userList }){
    return (
        <>
            <div
            style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "10px"
            }}>
                <div>
                    <h3>직원 검색</h3>
                </div>
                <div>
                    <table
                     style={{
                        borderCollapse: "separate",
                        borderSpacing: "0 10px"
                    }}>
                        <tr>
                            <td>
                                <select name="searchType" className="form-select" id="searchType">
                                    <option value="name" selected>이름</option>
                                    <option value="position">직책</option>
                                    <option value="email">이메일</option>
                                </select>
                            </td>
                            <td><input type="text" className="form-control" placeholder="사용자 이름을 입력해주세요" /></td>
                            <td><button type="button" className="btn btn-secondary">검색</button></td>
                        </tr>
                        {userList.map((member, index) => (
                                <tr key={index}>
                                    <td>{member.position}</td>
                                    <td style={{ textAlign: "left", paddingLeft: "10px" }}>{member.name}</td>
                                    <td><button type="button" className="btn btn-primary">선택</button></td>
                                </tr>
                        ))}
                    </table>
                </div>
                <div>
                    <button type="button" className="btn btn-secondary">취소</button>
                </div>
            </div>
        </>
    )
}

UserSearch.defaultProps = {
    userList: [
        {
            name: '일용자',
            position: '차장'
        },
        {
            name: '이용자',
            position: '과장'
        },
        {
            name: '삼용자',
            position: '대리'
        },
        {
            name: '사용자',
            position: '사원'
        },
        ]
}

export default UserSearch;
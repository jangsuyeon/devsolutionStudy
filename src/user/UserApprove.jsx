function UserApprove({ request }) {

    return (
        <>
            <div style={{
                padding:"20px",
                backgroundColor: "white",
                borderRadius: "10px"
            }}>
                <div style={{position:"relative"}}>
                    <h3 style={{textAlign:"center"}}>회원 권한 관리</h3>
                    <button
                        type="button"
                        className="btn"
                        style={{
                            position:"absolute",
                            top:"0",
                            right:"0"
                        }}>X</button>
                </div>
                <div style={{
                    border:"1px solid #F5F5F5", 
                    borderRadius:"10px", 
                    padding:"20px", 
                    marginBottom:"5px",
                    backgroundColor: "#F5F5F5"
                }}>
                    <table>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td>{request.userId}</td>
                            </tr>
                            <tr>
                                <td>이름</td>
                                <td>{request.userName}</td>
                            </tr>
                            <tr>
                                <td>그룹/회사</td>
                                <td>{request.companyName}</td>
                            </tr>
                            <tr>
                                <td>직책</td>
                                <td>{request.userPosition}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{border:"1px solid #F5F5F5", borderRadius:"10px", padding:"20px"}}>
                    <table>
                        <tbody>
                            <tr>
                                <td>요청 권한</td>
                                <td>{request.requestAuthority}</td>
                            </tr>
                            <tr>
                                <td>요청 상태</td>
                                <td>{request.requestStatus}</td>
                            </tr>
                            <tr>
                                <td>요청 일자</td>
                                <td>{request.requestDate.toLocaleDateString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{marginTop:"10px", display: "flex", justifyContent: "flex-end"}}>
                    <button type="button" className="btn btn-primary" style={{marginRight:"5px"}}>승인</button>
                    <button type="button" className="btn btn-danger">거절</button>
                </div>
            </div>

        </>
    )
}

UserApprove.defaultProps = {
    request: {
        userName: '홍길동',
        userId: 'user01',
        userPosition: '팀장',
        companyName: '(주)스터디',
        requestAuthority: '관리자',
        requestStatus: '요청',
        requestDate: new Date('2024-12-08')
    }
}

export default UserApprove;
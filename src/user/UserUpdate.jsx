function UserUpdate({ user }) {

    return (
        <>
            <div style={{padding:"20px"}}>
                <div style={{position:"relative"}}>
                    <h1 style={{textAlign:"center"}}>회원 정보 수정</h1>
                    <button
                        type="button"
                        className="btn"
                        style={{
                            position:"absolute",
                            top:"0",
                            right:"0"
                        }}>X</button>
                </div>
                <div style={{border:"1px solid lightgray", borderRadius:"10px", padding:"20px"}}>
                    <div style={{ display: "flex", alignItems:"center"}}>
                        <div style={{marginLeft: "30px", marginRight: "30px"}}>
                            <img src="/public/img/avatars/1.png" alt="sample" style={{ width: "80px", height: "80px", borderRadius: "100%"}}/>
                            </div>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>회사</td>
                                        <td>{user.companyName}</td>
                                    </tr>
                                    <tr>
                                        <td>이름</td>
                                        <td>{user.userName}</td>
                                    </tr>
                                    <tr>
                                        <td>전화번호</td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue={user.userPhone}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <button type="button" className="btn btn-primary" style={{marginRight:"5px"}}>사진 변경</button>
                        <button type="button" className="btn btn-secondary">삭제</button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{user.userId}</td>
                            </tr>
                            <tr>
                                <td>부서</td>
                                <td>{user.deptName}</td>
                            </tr>
                            <tr>
                                <td>직급</td>
                                <td>{user.userRank}</td>
                            </tr>
                            <tr>
                                <td>직책</td>
                                <td>{user.userPosition}</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={user.userEmail}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{marginTop:"10px", display: "flex", justifyContent: "flex-end"}}>
                    <button type="button" className="btn btn-primary" style={{marginRight:"5px"}}>저장</button>
                    <button type="button" className="btn btn-secondary">취소</button>
                </div>
            </div>

        </>
    )
}

UserUpdate.defaultProps = {
    user: {
        userName: '홍길동',
        userId: 'user01',
        userPhone: '010-1234-5678',
        userEmail: 'email@gmail.com',
        userRank: '팀원',
        userPosition: 'DevOps 엔지니어',
        deptName: '개발솔루션 프로젝트 팀',
        companyName: '(주)스터디'
    }
}

export default UserUpdate;
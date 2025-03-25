function MyPage({ user }) {

    return (
        <>
            <div style={{
                padding:"20px",
                backgroundColor: "white",
                borderRadius: "10px"
                }}>
                <div style={{position:"relative"}}>
                    <h1 style={{textAlign:"center"}}>마이페이지</h1>
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
                                    <td>{user.userPhone}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <table>
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
                            <td>{user.userEmail}</td>
                        </tr>
                    </table>
                </div>
                <button type="button" className="btn btn-primary" style={{marginTop:"10px", float:"right"}}>회원 정보 수정</button>
                <br />
                <br />
            </div>

        </>
    )
}

MyPage.defaultProps = {
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

export default MyPage;
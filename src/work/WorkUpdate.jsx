function WorkUpdate (props) {
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <div>
                        <label htmlFor="defaultFormControlInput" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="defaultFormControlInput"
                            placeholder="Event Title"
                            aria-describedby="defaultFormControlHelp"
                            defaultValue={props.task.content}
                        />
                    </div>
                    <div>
                        {/* <div className="mb-3"> */}
                        <label htmlFor="exampleFormControlSelect1" className="form-label">Label</label>
                        <select className="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                        {/* </div> */}
                    </div>
                    {/* Start Date */}
                    <div>
                        <label htmlFor="html5-date-input" className="col-form-label">Start Date</label>
                        {/* <div className="col-md-10"> */}
                            <input className="form-control" type="date" value="2021-06-18" id="html5-date-input" />
                        {/* </div> */}
                    </div>
                    {/* End Date */}
                    <div>
                        <label htmlFor="html5-date-input" className="col-form-label">End Date</label>
                        {/* <div className="col-md-10"> */}
                            <input className="form-control" type="date" value="2021-06-18" id="html5-date-input" />
                        {/* </div> */}
                    </div>
                    <div>
                        <label htmlFor="defaultFormControlInput" className="form-label">Event URL</label>
                        <input
                            type="text"
                            className="form-control"
                            id="defaultFormControlInput"
                            placeholder="https://www.google.com"
                            aria-describedby="defaultFormControlHelp"
                        />
                    </div>
                    <div>
                        <label htmlFor="defaultFormControlInput" className="form-label">Add Guests</label>
                        <input
                            type="text"
                            className="form-control"
                            id="defaultFormControlInput"
                            placeholder="Select value"
                            aria-describedby="defaultFormControlHelp"
                        />
                    </div>
                    <div>
                        <label htmlFor="defaultFormControlInput" className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="defaultFormControlInput"
                            placeholder="Enter Location"
                            aria-describedby="defaultFormControlHelp"
                        />
                    </div>
                    <div>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary">Add</button>
                    <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Cancel</button>
                </div>
            </div>

            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 400px; /* 모달 너비 */
                    height: 100vh; /* 화면 높이에 맞춤 */
                    background: rgba(0, 0, 0, 0.1); /* 투명 배경 */
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-start;
                    z-index: 1000;
                }

                .modal-content {
                    background: white;
                    border-radius: 8px 0 0 8px; /* 왼쪽 위, 아래 둥근 모서리 */
                    padding: 20px;
                    width: 100%;
                    box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1); /* 오른쪽 그림자 */
                    height: 100%; /* 전체 높이 */
                    overflow-y: auto; /* 콘텐츠가 넘칠 경우 스크롤 */
                }
            `}</style>
        </>
    );
};

export default WorkUpdate
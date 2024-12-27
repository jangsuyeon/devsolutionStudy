import { useState } from 'react'
import "/public/vendor/css/core.css";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

function CodeReview() {

    const [code, setCode] = useState();

    return (
        <>
            <div className="row">
                <div className="col-md-8" style={{border: "1px solid black"}}>
                    <p className="title-line">코드리뷰</p>
                    <CodeMirror
                        value={code}
                        options={{
                            mode: 'xml',
                            theme: 'material',
                            lineNumbers: true
                        }}
                        onChange={(editor, data, value) => {
                        }}
                    />
                </div>
                <div className="col-md-3">
                    <p className="title-line">등록가능 코드리뷰</p>
                </div>
            </div>
        </>
    )
}

export default CodeReview
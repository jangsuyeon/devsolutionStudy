import { useState } from 'react'
import "/public/vendor/css/core.css";
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import Search from '../component/search/Search';

function CodeReview() {

    const [code, setCode] = useState();

    return (
        <>
            <div className="layout-page ">
            <Search />
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        
                        <div className='card'>
                            <div className="row">
                                <div className="col-md-8">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodeReview
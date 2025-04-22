import { useState } from 'react';
import "/public/vendor/css/core.css";
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import 'codemirror/addon/hint/show-hint'; // 자동 완성 기본
import 'codemirror/addon/hint/javascript-hint'; // JavaScript 자동 완성
import 'codemirror/addon/hint/anyword-hint'; // 단어 기반 자동 완성
import 'codemirror/addon/hint/show-hint.css'; // 자동 완성 CSS
import Search from '../component/search/Search';
import styled from 'styled-components';

import "../codereview/codereview.css";

function CodeReview() {

    const [code, setCode] = useState("");
    const [language, setLanguage] = useState('javascript');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    if (!CodeMirror.hint) {
        CodeMirror.hint = {};
    }
    
    if (!CodeMirror.hint.anyword) {
        CodeMirror.hint.anyword = function (editor) {
            return { list: [], from: editor.getCursor(), to: editor.getCursor() };
        };
    }

    const getHint = () => {
        if (!CodeMirror.hint.anyword) {
            return () => ({ list: [], from: CodeMirror.Pos(0, 0), to: CodeMirror.Pos(0, 0) });
        }
        switch (language) {
            case 'javascript':
                return CodeMirror.hint.javascript;
            case 'xml':
                return CodeMirror.hint.anyword;
            case 'java':
                return CodeMirror.hint.anyword;
            case 'python':
                return CodeMirror.hint.anyword;
            case 'clike':
                return CodeMirror.hint.anyword;
            default:
                return CodeMirror.hint.anyword;
        }
    };

    return (
        <>
            <div className="layout-page ">
                <Search />
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className='card'>
                            <div className="row">
                                <div className="col-md-8">
                                    <FlexDiv justifyContentA='space-between' borderBottomA='1px solid black' paddingA='10px' marginBottomA='10px'>
                                        <p className="title-line mb-0">코드리뷰</p>
                                        <CodeButton colorA='#FF3E1D' backgroundColorA='#FFE0DB'>코드리뷰 종료</CodeButton>
                                    </FlexDiv>
                                    <FlexDiv justifyContentA='space-between' marginBottomA='10px'>
                                        <div style={{color: '#696CFF'}}>ooo님이 작성중</div>
                                        <FlexDiv>
                                            Members
                                            <div style={{height: '25px', position: 'relative'}}>
                                                <ProfileButton backgroundColorA='red'>

                                                </ProfileButton>
                                                <On></On>
                                            </div>
                                            <ProfileButton backgroundColorA='#D0D0D3'>
                                                +
                                            </ProfileButton>
                                        </FlexDiv>
                                    </FlexDiv>
                                    <select value={language} onChange={handleLanguageChange} className='selectBox'>
                                        <option value="javascript">JavaScript</option>
                                        <option value="xml">XML</option>
                                        <option value="java">java</option>
                                        <option value="python">Python</option>
                                        <option value="clike">C/C++</option>
                                    </select>
                                    <CodeMirror
                                        value={code}
                                        options={{
                                            mode: language,
                                            theme: 'material',
                                            lineNumbers: true,
                                            hintOptions: {
                                                completeSingle: false,
                                                hint: getHint(),
                                            },
                                            extraKeys: {
                                                'Shift-Space': 'autocomplete',
                                            },
                                        }}
                                        onChange={(editor, data, value) => {
                                            setCode(value);
                                            setTimeout(() => {
                                                editor.showHint();
                                            }, 100);
                                        }}
                                    />

                                    <FlexDiv justifyContentA='flex-end' marginTopA='10px'>
                                        <CodeButton colorA='#85E254' backgroundColorA='#E8FADF'>코드수정</CodeButton>
                                    </FlexDiv>
                                </div>
                                <div className="col-md-4">
                                    <p className="title-line">등록가능 코드리뷰</p>
                                    <FlexDiv className='mb-3'>
                                        <p className='mb-1 me-2'>Members</p>
                                        <div style={{height: '25px', position: 'relative'}}>
                                            <ProfileButton backgroundColorA='red'>

                                            </ProfileButton>
                                        </div>
                                        <ProfileButton backgroundColorA='#D0D0D3'>
                                            +
                                        </ProfileButton>
                                    </FlexDiv>
                                    <div className='mb-3'>
                                        <p className='mb-1'>description</p>
                                        <CodeBox></CodeBox>
                                    </div>
                                    <div className='mb-3'>
                                        <p className='mb-1'>Activity</p>
                                        <div className='mb-3' style={{border:'1px solid #EBEEF0', borderRadius:'5px', padding:'5px 10px'}}>
                                            <textarea style={{border: 'none', width: '100%', resize:'none'}} placeholder='Comment'></textarea>
                                            <FlexDiv justifyContentA='flex-end'>
                                                <button style={{background: 'none', padding: '0'}}>등록</button>
                                            </FlexDiv>
                                        </div>
                                        <div>
                                            <FlexDiv justifyContentA='space-between'>
                                                <FlexDiv>
                                                    <ProfileButton className='me-2'></ProfileButton>
                                                    <p className='mb-0 me-2'>username</p>
                                                    <p className='mb-0'>코드리뷰진행</p>
                                                </FlexDiv>
                                                <div>
                                                    <p className='mb-0'>2025.1.14 13:13</p>
                                                </div>
                                            </FlexDiv>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const CodeButton = styled.button`
    border-radius: 5px;
    padding: 5px 7px;
    font-size: 12px;
    color: ${(props) => props.colorA};
    background-color: ${(props) => props.backgroundColorA};
`;

const FlexDiv = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContentA};
    align-items: center;
    border-bottom: ${(props) => props.borderBottomA};
    padding: ${(props) => props.paddingA};
    margin-bottom: ${(props) => props.marginBottomA};
    margin-top: ${(props) => props.marginTopA};
`;

const ProfileButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${(props) => props.backgroundColorA};
    padding: 0;
    margin-left: 5px;
    &:hover {
        border: none;
    }
`;

const On = styled.span`
    width: 8px;
    height: 8px;
    background-color: #85E254;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
`;

const CodeBox = styled.div`
    box-shadow: 0px 1px 3px #00000026;
    border-radius: 5px;
    min-height: 100px; 
`;


export default CodeReview
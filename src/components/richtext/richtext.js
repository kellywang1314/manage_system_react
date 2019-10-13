//doc :https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp
import React from 'react'
import { Row, Col, Card,Button,message} from 'antd';
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
//富文本，html，markdown互相转化，需要可添加
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import draftToMarkdown from 'draftjs-to-markdown';

const rawContentState = {"entityMap":{"0":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"http://i.imgur.com/aMtBIep.png","height":"auto","width":"100%"}}},
"blocks":[{"key":"9unl6","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},
{"key":"95kn","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},
{"key":"7rjes","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};


export default class Richtext extends React.Component{
        constructor(){
            super()
            this.state = {
                editorContent: undefined,
                contentState: rawContentState,
                editorState: '',
            }
            this.onEditorStateChange = this.onEditorStateChange.bind(this)
        }
      
        clearContent () {
            this.setState({
                contentState: '',
            });
        };
        success() {
            message.success('发布成功');
          };
    
        //输入状态变化
        onEditorStateChange (editorState) {
            this.setState({
                editorState,
            });
        };
    
        imageUploadCallBack (file){new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
                xhr.open('POST', 'https://api.imgur.com/3/image');
                xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
                const data = new FormData(); // eslint-disable-line no-undef
                data.append('image', file);
                xhr.send(data);
                xhr.addEventListener('load', () => {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                });
                xhr.addEventListener('error', () => {
                    const error = JSON.parse(xhr.responseText);
                    reject(error);
                });
            }
        );
        }
    
        render() {
            const { editorContent, editorState } = this.state
            return (
                <div className="gutter-example button-demo">
                    <Row gutter={16}>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card title="富文本编辑器" bordered={false} >
                                    <Editor
                                        editorState={editorState}
                                        toolbarClassName="home-toolbar"
                                        wrapperClassName="home-wrapper"
                                        editorClassName="home-editor"
                                        onEditorStateChange={this.onEditorStateChange}
                                        toolbar={{
                                            history: { inDropdown: true },
                                            inline: { inDropdown: false },
                                            list: { inDropdown: true },
                                            textAlign: { inDropdown: true },
                                            image: { uploadCallback: this.imageUploadCallBack },
                                        }}
                                        placeholder="请输入正文"
                                        spellCheck
                                        onFocus={() => {console.log('focus')}}
                                        onBlur={() => {console.log('blur')}}
                                        onTab={() => {console.log('tab'); return true;}}
                                        localization={{ locale: 'zh', translations: {'generic.add': 'Test-Add'} }}
                                        mention={{
                                            separator: ' ',
                                            trigger: '@',
                                            caseSensitive: true,
                                            suggestions: [
                                                { text: 'A', value: 'AB', url: 'href-a' },
                                                { text: 'AB', value: 'ABC', url: 'href-ab' },
                                                { text: 'ABC', value: 'ABCD', url: 'href-abc' },
                                                { text: 'ABCD', value: 'ABCDDDD', url: 'href-abcd' },
                                                { text: 'ABCDE', value: 'ABCDE', url: 'href-abcde' },
                                                { text: 'ABCDEF', value: 'ABCDEF', url: 'href-abcdef' },
                                                { text: 'ABCDEFG', value: 'ABCDEFG', url: 'href-abcdefg' },
                                            ],
                                        }}
                                    />
    
                                    <style>{`
                                        .home-editor {
                                            min-height: 300px;
                                        }
                                        .home-wrapper {
                                            height: 380px !important;
                                            border: 1px solid #F1F1F1 !important;
                                            padding: 5px !important;
                                            border-radius: 2px !important;
                                         }
                                    `}</style>
                                </Card>
                            </div>
                        </Col>
                        <Col style={{paddingLeft: '30px'}}><Button onClick={this.success.bind(this)} type="primary">发布</Button></Col>
                        {/* <Col className="gutter-row" md={8}>
                            <Card title="同步转换HTML" bordered={false}>
                                <pre>{draftToHtml(editorContent)}</pre>
                            </Card>
                        </Col>
                        <Col className="gutter-row" md={8}>
                            <Card title="同步转换MarkDown" bordered={false}>
                                <pre style={{whiteSpace: 'pre-wrap'}}>{draftToMarkdown(editorContent)}</pre>
                            </Card>
                        </Col>
                        <Col className="gutter-row" md={8}>
                            <Card title="同步转换JSON" bordered={false}>
                                <pre style={{whiteSpace: 'normal'}}>{JSON.stringify(editorContent)}</pre>
                            </Card>
                        </Col> */}
                    </Row>
                </div>
            );
        }
}
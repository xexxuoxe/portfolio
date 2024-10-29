import React, { useState , useEffect } from 'react';
import { Editor , EditorState, convertToRaw, convertFromRaw, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
// 테마
// '@draft-js-plugins/inline-toolbar';


export default function DraftEditor() {

	// 에디터에서 입력된 내용 저장
	const saveContent = () => {
		const contentState = editorState.getCurrentContent();
		const rawContent = convertToRaw(contentState);

		console.log(JSON.stringify(rawContent)); // JSON 형태로 저장 가능

		localStorage.setItem('my-draft', JSON.stringify(rawContent, null, 2))
	};

	// JSON 형태의 콘텐츠 로드
	const loadContent = (rawContent: any) => {
		const contentState = convertFromRaw(JSON.parse(rawContent));
		setEditorState(EditorState.createWithContent(contentState));
	};

	// draft-wysiwyg
	const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
	const onEditorStateChange = (state: EditorState) => { setEditorState(state); };

	return (
		<div>
			<Editor
				editorState={editorState}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
				onEditorStateChange={onEditorStateChange}
				placeholder='내용을 입력해주세요'
			/>
		</div>
	)
}

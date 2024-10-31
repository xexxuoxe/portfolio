'use client';
/*
	draftEditor component
	src/components/_utiles/draftEditor/draftEditor.component.tsx
*/
import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface DraftEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function DraftEditor({ content, onChange }: DraftEditorProps) {
	const [editorState, setEditorState] = useState<EditorState>(
		EditorState.createEmpty()
	);

	useEffect(() => {
		if (content) {
		  try {
			const contentState = convertFromRaw(JSON.parse(content));
			setEditorState(EditorState.createWithContent(contentState));
		  } catch (error) {
			console.error("Failed to parse content:", error);
		  }
		}
	  }, [content]);

	  const onEditorStateChange = (state: EditorState) => {
		setEditorState(state);
		const rawContent = convertToRaw(state.getCurrentContent());
		onChange(JSON.stringify(rawContent));
	};

  return (
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        placeholder="내용을 입력해주세요"
      />
  );
}

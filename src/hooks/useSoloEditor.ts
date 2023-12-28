import { useState } from 'react';

export function useSoloEditor() {
	const [__editState, __setEditState] = useState('');

	function checkEditValidity() {}

	function submit() {}

	return { editorContent: __editState, submit };
}

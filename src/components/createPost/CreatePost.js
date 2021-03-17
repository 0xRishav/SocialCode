import React from 'react';
import './CreatePost.css';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

function CreatePost() {
	return (
		<div className="CreatePost grey-box-shadow">
			<h5 style={{ marginBottom: '10px', fontWeight: '500' }}>Create Post</h5>
			<textarea
				className="CreatePost__captionInput"
				name="captionInput"
				id="captionInput"
				cols="50"
				rows="4"
				placeholder="Type caption here"
			></textarea>
			<div className="CreatePost__iconBtnWrapper">
				<div className="CreatePost__cameraContainer">
					<AddAPhotoIcon />
				</div>

				<button className="blue-btn">Upload</button>
			</div>
		</div>
	);
}

export default CreatePost;

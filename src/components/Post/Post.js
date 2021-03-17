import React from 'react';
import './Post.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Post() {
	const fakePost = {
		profileImg:
			'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80',
		img:
			'https://images.unsplash.com/photo-1572345931164-83e0c38a85f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
		name: 'Harry Potter',
		caption:
			'Hey guys, this a really good picture which i captured this week please like, comment and share it. Also you can reach out to me on facebook instagram and twitter.',
		likes: 523,
		comments: [
			{
				username: 'rishvbharti',
				comment: 'Good one',
			},
			{
				username: 'kaushal_amrutiya',
				comment: 'Awersome bro liked the lightning. Keep it up',
			},
			{
				username: 'julianwan',
				comment: 'damn this is amazing',
			},
		],
	};

	return (
		<div style={{ paddingBottom: '20px' }} className="Post">
			<div className="Post__contentWrapper light-grey-bg grey-box-shadow">
				<img src={fakePost.img} alt="postImage" className="Post__img" />
				<div className="Post__infoWrapper">
					<div className="Post__nameLikeWrapper">
						<div className="Post__profileImgNameWrapper">
							<img
								className="Post__profileImg"
								src={fakePost.profileImg}
								alt="profileImg"
							/>
							<h2 style={{ fontWeight: '500' }}>{fakePost.name}</h2>
						</div>

						<div className="Post__likeWrapper">
							<FavoriteBorderIcon style={{ cursor: 'pointer' }} />
							<span style={{ marginLeft: '6px' }}>{fakePost.likes}</span>
						</div>
					</div>
					<p style={{ fontSize: '0.8rem' }}>{fakePost.caption}</p>
				</div>
			</div>
			<div className="Post__commentsWrapper">
				{fakePost.comments.map((comment) => (
					<div className="Post__commentContainer">
						<h4 style={{ fontWeight: '400' }}>{comment.username} :</h4>
						<p style={{ fontSize: '0.8rem', marginLeft: '15px' }}>
							{comment.comment}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Post;

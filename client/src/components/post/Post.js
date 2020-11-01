import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import { getProfileById } from './../../actions/profile';

const Post = ({ getPost, getProfileById, post: { post, loading }, match, profile }) => {
	useEffect(() => {
		getPost(match.params.id);
	}, [getPost, match.params.id]);

	useEffect(() => {
		if (post && post.user) {
			getProfileById(post.user);
		}
	}, [getProfileById, post]);

	return loading ? (
		<Spinner />
	) : post === null ? (
		<h3>Post not found</h3>
	) : (
		<Fragment>
			<Link to='/posts' className='btn btn-dark'>
				Back to posts
			</Link>
			<PostItem showActions={false} post={post} />
			{/* {!profile && <h3>Yo Bitches! Y'all can't comment, this nigga doesn't exist </h3>} */}
			<CommentForm postId={post._id} />
			<div className='comments'>
				{post.comments.map((comment) => (
					<CommentItem key={comment._id} comment={comment} postId={post._id} />
				))}
			</div>
		</Fragment>
	);
};

Post.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	getProfileById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
	profile: state.profile.profile,
});

export default connect(mapStateToProps, { getPost, getProfileById })(Post);

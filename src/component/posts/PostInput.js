import React, {useContext} from 'react';
import {PostsContext} from "./index";

const PostInput = () => {

    const {addPost} = useContext(PostsContext)

    const clickAdd = () => {
        let post = {title: "현재 "+new Date(), author:"시간"}
        addPost(post)
    }

    return (
        <div>
            <h3>Post Input</h3>
            <input type="text" />
            <button onClick={() => clickAdd()}>ADD Post</button>
        </div>
    );
};

export default PostInput;
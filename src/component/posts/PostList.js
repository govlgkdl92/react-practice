import React, {useContext} from 'react';
import {PostsContext} from "./index";

const PostList = () => {

    const {postArr} = useContext(PostsContext)

    const list = postArr.map(post => <li key={post.id}> {post.title} -- {post.author}</li>)

    /* 한번만 실행하는 건 useEffect 해주고 빈배열을 만들어주면 되는데...*/
    /* 이 코드를 어디서 사용해야 할까.. index , list 중... */
    /*  */

    return (
        <div>
            <h3>Post List</h3>
            <hr/>
            {list}
        </div>
    );
};

export default PostList;
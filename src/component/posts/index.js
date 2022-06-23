import React, {useEffect, useState} from 'react';
import PostInput from "./PostInput";
import PostList from "./PostList";
import {createContext} from "react";
import {addPostAjax, getPostList} from "../api/postAPI";

export const PostsContext = createContext()

const Posts = () => {

    const [postArr, setPostArr] = new useState([])

    const getList = () => {
        getPostList().then(data => setPostArr(data))
    }

    const addPost = (post) => {
        addPostAjax(post).then(res => {
            getList()
        })
    }

    useEffect(() => {

        getList()

    },[])


    /* 단일책임원칙 -- 출력을 위한 컴포넌트나 입력을 위한 컴포넌트냐.. */
    /* 컴포넌트를 어떻게 구성해서 어떻게 처리하냐 */

    return (
        <PostsContext.Provider value={{postArr, addPost}}>
            <div>
                <PostInput></PostInput>
                <PostList></PostList>
            </div>
        </PostsContext.Provider>
    );
};

export default Posts;
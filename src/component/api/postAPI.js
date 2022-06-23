import axios from "axios";

export const getPostList = async () => {
    const res = await axios.get("http://localhost/posts/")

    return res.data
}

export const addPostAjax = async (post) => {
    const res = await axios.post("http://localhost/posts/", post)

    return res.data
}

export const removePostAjax = async (id) => {
    const res = await axios.delete(`http://localhost/posts/${id}`)
                        /* delete 는 ``을 사용해야 함 */

    return res.data
}
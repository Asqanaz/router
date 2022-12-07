import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

export const SinglePostPage = () => {
	const {id} = useParams()
	const [post, setPost] = useState({})

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(post => setPost(post))
	}, [id])

	console.log(post)
	return (
		<div>
			<h1>
                {post.title}
            </h1>
            <p>
                {post.body}
            </p>
		</div>
	)
}

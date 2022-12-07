import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"

export const Home = () => {
	const [posts, setPosts] = useState(null)

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(posts => setPosts(posts))
	}, [])

	return (
		<>
			<h1>BlogPage</h1>
			<section>
				{posts?.map(item => (
					<Link to={`/${item.id}`} key={item.id}>
						<li>{item.title}</li>
					</Link>
				))}
			</section>
		</>
	)
}

import React from 'react';

const Result = (props) =>{
	const img =`https://source.unsplash.com/300x400?${props.name}`;
	return (	
		<>
			<div className="marginTop">
				<img src={img} alt="search"/>
			</div>
		</>
		)
}
export default Result
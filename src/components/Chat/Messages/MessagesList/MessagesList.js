import React, { Component } from 'react';

import Style from './MessageList.less';

class MessagesList extends React.Component{
	render(){
		return(
			<ul className='messages-list'>
				<li className='post post_my'>
					<img src='./ava.jpg' className='user-photo' width='55' height='55' />
					<p className='post-text'>Lorem ipsum dolor sit.fffffffffffff fdddddd dddd ddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
					<span className='post-time'>11:45</span>
				</li>
				<li className='post post_other'>
					<img src='..././ava.jpg' className='user-photo' width='55' height='55' />
					<p className='post-text'>Lorem ipsum dolor sit.fffffffffffff fdddddd dddd ddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>
					<span className='post-time'>11:45</span>
				</li>
			</ul>
		); 
	}
}

export default MessagesList;
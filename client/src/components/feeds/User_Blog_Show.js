import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Feed from './Feed';
import ProfilePic from '../user/util/components/Profile_Pic';
import FollowButton from '../posts/util/components/social/Follow_Button';
import Queries from '../../graphql/queries.js';
const { FETCH_USER } = Queries;



const UserBlogShow = () => {
  let { blogName } = useParams();

  let { loading, error, data: user } = useQuery(FETCH_USER, {
    variables: {
      query: blogName
    }
  })

  if (loading) return 'Loading...';
  if (error) return `Error: ${error}`;
  console.log(user.user)
  return (
    <div
      className='userBlogFeedContainer'
    >
      <div
        className='userShowContainer'
      >
        <div>
          <ProfilePic user={user.user} />
          <h1>{user.user.blogName}</h1>
          <h3>{user.user.blogDescription}</h3>
        </div>
        <FollowButton 
          user={user.user}
        />
      </div>
      <Feed user={user.user} />
    </div>
  )
}

export default UserBlogShow;
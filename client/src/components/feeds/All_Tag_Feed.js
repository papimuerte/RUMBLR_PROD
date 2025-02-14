import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import Cookies from 'js-cookie';

import ProfilePic from '../user/util/components/Profile_Pic';
import PostShow from '../posts/types/showOrUpdate/PostShow';

import PostShowUtil from '../posts/util/functions/post_show_util.js';
import Queries from '../../graphql/queries.js';
const { FETCH_ALL_TAG_FEED } = Queries;
const { handlePostClassName } = PostShowUtil;

const AllTagFeed = ({
  user
}) => {
  let leftFeedArr = useRef([]);
  let rightFeedArr = useRef([]);

  useEffect(() => {
    
    return () => {
      refetch()
    }
    //eslint-disable-next-line
  }, [])
  
  let { loading, error, data, refetch } = useQuery(FETCH_ALL_TAG_FEED, {
    variables: {
      query: Cookies.get('currentUser')
    }
  })

  if (loading) return '';
  if (error) return `Error: ${error.message}`;
  
  const { fetchAllTagFeed } = data;
  
  if (fetchAllTagFeed) {
    leftFeedArr.current = fetchAllTagFeed.slice(0, (fetchAllTagFeed.length / 2))
    rightFeedArr.current = fetchAllTagFeed.slice((fetchAllTagFeed.length / 2), fetchAllTagFeed.length)
  }

  return(
    <div
      className='discoverFeed'
    >
      <div
        className='leftColumn'
      >
      {leftFeedArr.current.map((post, i) => {
        if (post.kind === 'Repost') {
          return (
            <div
              className={handlePostClassName(post)}
              key={post._id}
            >
              <div
                className='userRepostShowHeader'
              >
                <ProfilePic
                  user={post.user}
                />
                <span>
                  <Link 
                    className='user'
                    to={`/view/blog/${Cookies.get('currentUser')}`}>
                    {Cookies.get('currentUser')}
                  </Link>

                  <div>
                    <img
                      src="https://img.icons8.com/material-two-tone/24/ffffff/retweet.png"
                      alt=''
                    />
                    <Link
                      className='repostedFrom'
                      to={`/view/blog/${post.user.blogName}`}
                    >
                      {post.user.blogName}
                    </Link>
                  </div>
                </span>
              </div>

              <PostShow
                post={post}
                discover={true}
              />
            </div>
          )
        } else {
          return (
            <div
              className={handlePostClassName(post)}
              key={post._id}
            >
              <PostShow
                post={post}
                user={user}
                discover={true}
              />
            </div>
          )
        }
      })}
      </div>
      <div
        className='rightColumn'
      >
      {rightFeedArr.current.map((post, i) => {
        if (post.kind === 'Repost') {
          return (
            <div
              className={handlePostClassName(post)}
              key={post._id}
            >
              <div
                className='userRepostShowHeader'
              >
                <ProfilePic
                  user={post.user}
                />
                <span>
                  <Link 
                    className='user'
                    to={`/view/blog/${Cookies.get('currentUser')}`}>
                    {Cookies.get('currentUser')}
                  </Link>

                  <div>
                    <img
                      src="https://img.icons8.com/material-two-tone/24/ffffff/retweet.png"
                      alt=''
                    />
                    <Link
                      className='repostedFrom'
                      to={`/view/blog/${post.user.blogName}`}
                    >
                      {post.user.blogName}
                    </Link>
                  </div>
                </span>
              </div>

              <PostShow
                post={post}
                discover={true}
              />
            </div>
          )
        } else {
          return (
            <div
              className={handlePostClassName(post)}
              key={post._id}
            >
              <PostShow
                post={post}
                user={user}
                discover={true}
              />
            </div>
          )
        }
      })}
      </div>
    </div>
  )
}

export default AllTagFeed;
import React, { useContext } from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import DeleteButton from './DeleteButton'; 

function PostCard({
  post: { body, createdAt, id, username }
}) {
  const { user } = useContext(AuthContext); 
    return (
        <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {user && user.username === username && <DeleteButton postId={id} />}
        </Card.Content>
      </Card>

    )
}

export default PostCard
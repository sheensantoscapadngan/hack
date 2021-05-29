import React from 'react'
import { connect } from 'react-redux';
import AddPost from '../../components/post/AddPost';

interface ProfileProps {
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <AddPost/>
        </div>
    )
}

export default connect(null, {})(Profile);

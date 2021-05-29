import React from 'react'
import { connect } from 'react-redux';
import AddPost from '../../components/post/AddPost';
import { Redirect } from 'react-router-dom';

export const Profile = (props: any) => {
    if (!props.isAuthenticated) {
        return <Redirect to="/login"/>
    }
    const profileId = props.match.params.id;
    return (
        <>
            {
                <AddPost/>
            }
        </>
    )
}

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Profile);

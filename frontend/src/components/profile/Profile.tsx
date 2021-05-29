import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import AddPost from '../../components/post/AddPost';
import { Redirect } from 'react-router-dom';
import { getProfile } from '../../actions/profile';

export const Profile = (props: any) => {

    const profileId = props.match.params.id;
    useEffect(() => {
        console.log("GET PROFILE IS CALLED");
        getProfile(profileId)
    }, [])

    if (!props.isAuthenticated) {
        return <Redirect to="/login"/>
    }

    const renderedPosts = (
        props.user.snippets &&  
        props.user.snippets.map((entry: any) => (
            <>
                <h1>{entry.language}</h1>
                <h2>{entry.description}</h2>
                <h3>{entry.content}</h3>
            </>
        ))
    )

    return (
        <>
            {
                profileId === props.authId ? <AddPost/> : <></>
            }
            <>{renderedPosts}</>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    authId: state.auth.authId,
    user: state.profile.user,
});

export default connect(mapStateToProps, { getProfile })(Profile);

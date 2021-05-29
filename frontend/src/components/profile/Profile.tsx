import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddPost from "../../components/post/AddPost";
import { getProfile } from "../../actions/profile";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";

export const Profile = (props: any) => {
  const { user } = props;
  const profileId = props.match.params.id;
  useEffect(() => {
    props.getProfile(profileId);
  }, []);

  const renderedPosts =
    props.user.snippets &&
    props.user.snippets.map((entry: any) => (
      <>
        <h1>{entry.language}</h1>
        <h2>{entry.description}</h2>
        <code>{entry.content}</code>
      </>
    ));

  return (
    <Container>
      <Row>
        <Col>
          <img src={user.picture} style={{ width: "100px", height: "100px" }} />
        </Col>
        <Col>
          <h1>
            {user.displayName} ({user.email})
          </h1>
        </Col>
      </Row>
      {profileId === props.authId ? <AddPost /> : <></>}
      <h1 style={{ marginTop: "30px" }}>Code Snippets:</h1>
      <>{renderedPosts}</>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
  authId: state.auth.authId,
  user: state.profile.user,
});

export default connect(mapStateToProps, { getProfile })(Profile);

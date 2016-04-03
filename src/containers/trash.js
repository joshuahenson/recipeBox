render: function() {
  return <UserList users={this.props.users} />;
}
});

const mapStateToProps = function(store) {
return {
  users: store.userState.users
};
}

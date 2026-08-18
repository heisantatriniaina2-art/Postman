function Users(props) {
    const { name, firstName } = props;
    return (
        <>
            <p>Name:{name}</p>
            <p>First Name: {firstName}</p>
        </>
    );
}
export default Users;
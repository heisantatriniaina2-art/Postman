
import './App.css';

function User(props) {
    const { id, name, firstName } = props;
    return (
        <>
            <p>id: {id} </p>
            <p>Name: {name}</p>
            <p>First Name: {firstName}</p>

        </>
    );
}
export default User;

import {connect} from "react-redux";
import {useState} from "react";
import {setUserInfo} from "../../redux/actions";

const UserForm = ({setUserInfo}) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInfo({name, status});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Status: </label>
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default connect(null, {setUserInfo})(UserForm);
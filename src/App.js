import User from './components/user';
import UserForm from './components/user-form';

function App() {
    return (
        <div className="App">
            <h1>User Management App</h1>
            <User/>
            <UserForm/>
        </div>
    );
}

export default App;
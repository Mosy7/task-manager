function Header()  {
    return(
        <header>
            <h1>Task Managing System</h1>
            <h2>Manage your tasks</h2>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/logout">Logout</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/tasks">Tasks</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
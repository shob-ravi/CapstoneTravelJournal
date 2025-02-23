function LoginForm({setNewUser}){
    function handleChange(){

    }
return(
    <>
    <div>
        <form autoComplete="off">
            <label>Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange}/>
            <label>Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" />
            <button type="submit">Log In</button>
        </form>
    </div>
    </>
)
}
export default LoginForm;
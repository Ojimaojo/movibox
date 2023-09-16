import menu from './img/Menu.png'

function LoginIcon() {
    return ( 
        <div className='d-flex justify-content-between rightseg'>
            <a className='loginLink' href='/' >login</a>
            <img src={menu}  id='menuIcon' alt="menu"/>
        </div>
     );
}

export default LoginIcon;
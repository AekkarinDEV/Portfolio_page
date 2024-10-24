

export default function Sidenavbar() {
  return (
    <div className='side_bar'>
        <div className="logo">
            <img src="/public/logo.png" alt="dev_logo" className="brand_img" />
            <h1>AEKKARIN</h1>
            <h5>web developer</h5>
        </div>
        <div className="nav_menu">

                <button>Home</button>
                <button>About Me</button>
                <button>My Skills</button>
                <button>Projects</button>
                <button>Contacts</button>
        </div>
        <div className="social_symbo">
            <a href=""><i className="fa-solid fa-envelope fa-lg"></i></a>
            <a href=""><i className="fa-brands fa-linkedin fa-lg"></i></a>
            <a href=""><i className="fa-brands fa-github fa-lg"></i></a>
        </div>
    </div>
  )
}

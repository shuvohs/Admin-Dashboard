import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo.svg' alt='' />
        <span>Admin</span>
      </div>
      <div className='icons'>
      <img src='/search.svg' alt='' className='icon' />
      <img src='/app.svg' alt='' className='icon' />
      <img src='/expand.svg' alt='' className='icon' />
      <div className="notification">
        <img src='/notifications.svg' alt='' />
        <span>1</span>
      </div>
      <div className='user'>
        <img src='https://t4.ftcdn.net/jpg/04/75/00/99/360_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg' alt=''/>
        <span>Jane</span>
      </div>
      <img src='/settings.svg' alt='' className='icon' />


    </div>
  </div>
  )
}

export default Navbar

import React from 'react'
import logo from "../../Images/logo.png"
import Image from 'next/image'
import ProfileImage from "../../Images/people1.png"
import thundar from "../../Images/thunder.gif"
// import profileImage from "../../Images/prople1.png"
import './profileheader.css'
import Link from 'next/link'
const ProfileHeader = () => {
    return (
        <>
            <section className='profile-header'>
                <div className="container">
                    <div className='profile-header-main'>
                        <div className='profile-div-1'>
                            <div className="profile-logo">
                                <Link href={"/"}>
                                    <Image src={logo} className="img-fluid" alt='profile-header-logo' />
                                </Link>
                            </div>
                            <div className="profile-search">
                                <input type="search" placeholder='Search...' className='form-control' />
                                <i className='bi bi-search'></i>
                            </div>
                        </div>
                        <div className='profile-div-2'>
                            <div className="upgradeSec">
                                <Link href={"/pages/subscriptions"} className='text-decoration-none upgradebtn'>Upgrade Account</Link>
                            </div>
                            <div className='profile-image-nav'>
                                <div>
                                    <Link href={"/pages/profile"} className='text-decoration-none'>
                                    <Image src={ProfileImage} alt='profile-image' />
                                    </Link>
                                </div>
                                <div>
                                  <Link href={"/pages/notifications"}>  <i className="bi bi-bell"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="profile-header-responsive">
                <div className='profile-header-logo-responsive'>
                    <Link href={"/"}>
                        <Image src={logo} alt='profile-header-logo' />
                    </Link>
                </div>
                <div>
                    <div className="profile-search">
                        <input type="search" placeholder='Search...' className='form-control' />
                        <i className='bi bi-search'></i>
                    </div>
                </div>
                <div>
                    <div className='profile-image-nav'>
                        <div>
                            <Link href={"/pages/profile"} className='text-decoration-none'>
                                <Image src={ProfileImage} alt='profile-image' />
                            </Link>
                        </div>
                        <div>
                            <Link href={"/pages/subscriptions"}>
                            <Image src={thundar} alt='notification' className='notification-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileHeader
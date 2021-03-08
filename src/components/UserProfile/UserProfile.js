import React from 'react';
import { FcDocument } from 'react-icons/fc';
import { RiPhoneLockLine } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import './UserProfile.css';

const UserProfile = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>welcome</h2>
                <button className=" btn-outline" onClick={handleLogout}>
                    logout
                </button>
            </nav>
            <section className="user-icons">
                <div>
                    <FcDocument />
                    <a href="/" className="user-text">
                        Documents
                    </a>
                </div>
                <div>
                    <RiPhoneLockLine />
                    <a href="/" className="user-text">
                        My services
                    </a>
                </div>
                <div>
                    <AiFillSetting />
                    <a href="/" className="user-text">
                        Settings
                    </a>
                </div>
            </section>
        </section>
    );
};

export default UserProfile;

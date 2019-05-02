import React from 'react';
import logo from '../../assets/logo.svg';
import '../../App.css';

const Header = () => (
    <header className="header fixed-top col colorTheme">
        <div className="row py-1">
            <div className="col-12 ">
                <div className="float-left">
                    <img alt="Not Found" src={logo} width="30" />
                </div>
                <div className="float-right">
                    <i class="fas fa-user fa-2x"></i>
                </div>
            </div>
        </div>

        <div className="row py-1">
            <div className="col-12 text-center">
                <i class="far fa-calendar-alt fa-2x"></i>
            </div>
        </div>
    </header>
)

export default Header;
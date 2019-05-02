import React from 'react';
import '../../App.css';

const Footer = () => (
    <footer className="footer col fixed-bottom z-top colorTheme">
        <div className="row py-1">
            <div className="col text-center">
                <i class="fas fa-heartbeat fa-2x"></i>
                <div className="icon-text">Pulse</div>
            </div>
            <div className="col text-center">
                <i class="fas fa-trophy fa-2x"></i>
                <div className="icon-text">Leaderboard</div>
            </div>
            <div className="col text-center">
                <i class="fas fa-bell fa-2x"></i>
                <div className="icon-text">Notifications</div>
            </div>
        </div>
    </footer>
)

export default Footer;
import React from "react";
import {Link} from 'react-router-dom';


export default function Header() {
    return (
        <div className = "header-container">
            <div className = "header-wrap">
                <div className = "header-left-wrap">
                <ul>
                
                <li><Link className = "header-nav-item-1"  to = '/'>UMC Movie
                </Link>
                </li>
                <div>
                <li>
                    <Link className = "header-nav-item" to ='/Login'>회원가입
                    </Link>
                    </li>
                    <li>
                    <Link className = "header-nav-item" to='/Popular'>Popular
                    </Link>
                    </li>
                    <li>
                    <Link className = "header-nav-item" to='/Nowplay'>Now Playing
                    </Link>
                    </li>
                    <li>
                    <Link className = "header-nav-item" to='/Top'>Top Rated
                    </Link>
                    </li>
                    <li>
                    <Link className = "header-nav-item" to='/Upcomming'>Upcoming
                    </Link>
                    </li>
                </div>
                    
                </ul>
                </div>
            </div>
        </div>
    )
}

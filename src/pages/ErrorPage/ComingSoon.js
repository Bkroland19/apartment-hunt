import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div className="error">
            <div className="error__box">
                <h1>This Page is Coming Soon</h1>
                <Link to="/" className="btn btn-info">
                GO TO HOME
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;
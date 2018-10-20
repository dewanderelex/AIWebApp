import React from 'react';
import 'tachyons';

const Navigation = () => {
    return (
        <div>
            <nav className = "ma1" style = {{display: 'flex', justifyContent: 'flex-end', paddingTop: '20px'}}> 
                <div>
                    <p className = "f6 ma2">Created By</p>
                    <p className = "f3 ma2">Alex Nguyen</p>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
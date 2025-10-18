import React from 'react';
import SocialLogin from '../components/homelayout/SocialLogin';
import FindUs from '../components/homelayout/FindUs';
import Qzon from '../components/homelayout/Qzon';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzon></Qzon>
        </div>
    );
};

export default RightAside;
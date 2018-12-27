/**
 * Created by renjp on 2018/12/27.
 */
import React from 'react';
import Info from './Info';
import Hot from './Hot';
import Search from './Search';
import Tags from './Tags';
import './style.css'

export default function () {
    return (
        <div>
            <Info/>
            <Search/>
            <Tags/>
            <Hot/>
        </div>
    );
};

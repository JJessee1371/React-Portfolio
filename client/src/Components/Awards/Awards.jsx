import React from 'react';
import 'materialize-css';
import './Awards.css';

function Awards() {
    return (
        <div className="row row2">
            <div className="col s12 m12 l12 xl12">
                <h3 className="title">Honors & Awards</h3>
                <ul id="awards">
                    <li>AP Scholar with Distinction - 2014 - Advanced Placement Board</li>
                    <li>Eagle Scout Award - 2014 - Boy Scouts of America</li>
                    <li>National Defense Ribbon - 2018 - United States Marine Corps</li>
                    <li>Global War on Terrorism Ribbon - 2019 - United States Marine Corps</li>
                    <li>Meritorious Mast Certificate - 2019 - Marine Corps Engineer School</li>
                    <li>Academic Honor Graduate - 2019 - Marine Corps Association Foundation</li>
                    <li>Navy Achievement Medal - 2020 - United States Marine Corps</li>
                </ul>
            </div>
        </div>
    );
};

export default Awards;
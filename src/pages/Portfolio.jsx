import React from 'react';
import { ProjectsRow1, ProjectsRow2, ProjectsRow3 } from '../Projects.js';
import { PortfolioHeader } from '../Components/GenericHeader';
import Card from '../Components/Card';


class Portfolio extends React.Component {
    constructor() {
        super();

        this.state = {
            ProjectsRow1,
            ProjectsRow2,
            ProjectsRow3
        };
    };

    render() {
        return (
            <div>
                <main>
                    <PortfolioHeader/>
                    <div class="row">
                        {this.state.ProjectsRow1.map(item => {
                            return (
                                <Card
                                    id={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    title={item.title}
                                    desc={item.desc}
                                    deployed={item.deployed}
                                    github={item.github}
                                />
                            );
                        })};
                    </div>
                    <div class="row">
                        {this.state.ProjectsRow2.map(item => {
                            return (
                                <Card
                                    id={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    title={item.title}
                                    desc={item.desc}
                                    deployed={item.deployed}
                                    github={item.github}
                                />
                            );
                        })};
                    </div>
                    <div class="row">
                        {this.state.ProjectsRow3.map(item => {
                            return (
                                <Card
                                    id={item.id}
                                    src={item.src}
                                    alt={item.alt}
                                    title={item.title}
                                    desc={item.desc}
                                    deployed={item.deployed}
                                    github={item.github}
                                />
                            );
                        })};
                    </div>
                </main>
            </div>
        );
    };
};

export default Portfolio;
import React from 'react';
import cardRow1 from '../cardRow1.json';
import cardRow2 from '../cardRow2.json';
import cardRow3 from '../cardRow3.json';
import GlobalNavbar from '../Components/GlobalNavbar';
import { PortfolioHeader } from '../Components/GenericHeader';
import Card from '../Components/Card';
import Footer from '../Components/Footer';


class Portfolio extends React.Component {
    constructor() {
        super();

        this.state = {
            cardRow1,
            cardRow2,
            cardRow3
        };
    };

    render() {
        return (
            <div>
                <main>
                    <GlobalNavbar/>
                    <PortfolioHeader/>
                    <div class="row">
                        {this.state.cardRow1.map(card => {
                            return (
                                <Card
                                    id={card.id}
                                    src={card.src}
                                    alt={card.alt}
                                    title={card.title}
                                    desc={card.desc}
                                    deployed={card.deployed}
                                    github={card.github}
                                />
                            );
                        })};
                    </div>
                    <div class="row">
                        {this.state.cardRow2.map(card => {
                            return (
                                <Card
                                    id={card.id}
                                    src={card.src}
                                    alt={card.alt}
                                    title={card.title}
                                    desc={card.desc}
                                    deployed={card.deployed}
                                    github={card.github}
                                />
                            );
                        })};
                    </div>
                    <div class="row">
                        {this.state.cardRow3.map(card => {
                            return (
                                <Card
                                    id={card.id}
                                    src={card.src}
                                    alt={card.alt}
                                    title={card.title}
                                    desc={card.desc}
                                    deployed={card.deployed}
                                    github={card.github}
                                />
                            );
                        })};
                    </div>
                </main>
                <Footer/>
            </div>
        );
    };
};

export default Portfolio;
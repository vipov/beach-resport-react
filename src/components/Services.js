import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {

  state = {
      services: [
          {
              icon: <FaCocktail />,
              title: "Free coctails",
              info: 'lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
              
          },
          {
            icon: <FaHiking />,
            title: "Endless hiking",
            info: 'lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
            
        },
        {
            icon: <FaShuttleVan />,
            title: "Need a van?",
            info: 'lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
            
        },
        {
            icon: <FaBeer />,
            title: "Grab a beer!",
            info: 'lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
            
        }
      ]
  }

    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
                {this.state.services.map( (item, i) => {
                    return <article key={i} className="service">
                        <span> {item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
               </div>
            </section>
        )
    }
}

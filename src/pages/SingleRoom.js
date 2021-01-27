import React, { Component } from 'react'
import {RoomContext} from '../context'
import {Link} from "react-router-dom";
import StyledHero from '../components/StyledHero';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
 static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return <div className="error">
                <h3>no such room :o</h3>
                <Link to='/rooms' className="btn-primary">
                    back to rooms
                </Link>
            </div>
        }


        const {price, description, capacity, breakfast, size, name, pets, images} = room;
        const [mainImg,...defaultImg] = images;
        // console.log(`defaultImg[0]: ${defaultImg[0]}`)
        // console.log(`images[2]: ${images[2]}`)
        // console.log(`description: ${description}`)
        return (
        <>
            <StyledHero img={room.images[0] || defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className="btn-primary">
                               Back to rooms
                        </Link>
                    </Banner>
            </StyledHero>
           <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((item, index) => {
                    return <img key={index} src={item} alt={name} />
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
                </article>
                <article className="info">
                <h3>info</h3>
                <h6>price : ${price}</h6>
                <h6>size : {size} SQFT</h6>
                <h6> max capacity : {
                capacity > 1 ? `${capacity} people` :
                `${capacity} person`
                }</h6>
                <h6>{pets ? "pets allowed" :
                 "no pets ffs"}</h6>
                 <h6>{breakfast && 'free breakfast included'}</h6>
                </article>
            </div>
            </section>
        </>
            // <div className="single-room">
            //     <div className="single-room-images"></div>
            //     hi i am single room
            //     tu chcemy room.price np
            //     {room.price}
            //     <div className="single-room-info"></div>
            // </div>
        )
    }
}

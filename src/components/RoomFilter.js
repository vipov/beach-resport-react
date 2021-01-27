import React from 'react'
import {useContext} from 'react';
import {RoomConsumer, RoomContext} from '../context';
import Title from '../components/Title';
// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item =>  item[value]))]
}



export default function RoomFilter({rooms}) {

    const context = useContext(RoomContext);
    const { minPrice, maxPrice, handleChange, price, type, capacity, minSize, maxSize, breakfast, pets} = context

    let types = getUnique(rooms, 'type');
    types = ['all',...types];
    types = types.map((type, index) => (
     <option value={type} key={index}> {type}</option>
    ))
    
    let capacityOptions = getUnique(rooms, 'capacity');
    capacityOptions = capacityOptions.map( (index, option) => {
        return <option value={option} key={index}> {option}</option>
    })



    return (
        <section className="filter-container"> 
        <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                        <label htmlFor="price">
                            room price ${price}
                        </label>
                        <input 
                        onChange={handleChange} type="range" name="price" 
                        min={minPrice} 
                        max={maxPrice} 
                        id="price" 
                        value={price} 
                        className="form-control">
                        </input>
                </div>
                <div className="form-group">
                        <label htmlFor="type">select type</label>
                        <select
                        name="type"
                        onChange={handleChange}
                        id="type" 
                        className="form-control"
                        value={type}>
                            {types}
                        </select>
                </div>
                <div className="form-group">
                        <label htmlFor="capacity">select capacity</label>
                        <select
                        name="capacity"
                        onChange={handleChange}
                        id="capacity" 
                        className="form-control"
                        value={capacity}>
                            {capacityOptions}
                        </select>
                </div>
                <div className="form-group">
                        <label htmlFor="size">
                            room size
                        </label>
                        <div className="size-inputs">
                            <input 
                            onChange={handleChange} 
                            type="number" 
                            name="minSize" 
                            id="size" 
                            value={minSize} 
                            className="size-input">
                            </input>
                       
                            <input 
                            onChange={handleChange} 
                            type="number" 
                            name="maxSize" 
                            id="size" 
                            value={maxSize} 
                            className="size-input">
                            </input>
                        </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                        type="checkbox" 
                        name="breakfast" 
                        id="breakfast" 
                        checked={breakfast} 
                        onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                        type="checkbox" 
                        name="pets" 
                        id="pets" 
                        checked={pets} 
                        onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
 )
}

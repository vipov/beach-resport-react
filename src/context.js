import React, { Component } from "react";
import items from "./data";
import Client from './Contentful';
// https://youtu.be/l0JbuMVXaTs?t=19643 last
// Client.getEntries({
//   content_type: "beachResortRoom"
// // }).then(response => console.log(`responses:${(response.items)}`))
// }).then(response => console.log(response.items) )

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    type: "all",
    capacity: 1,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  // https://youtu.be/l0JbuMVXaTs?t=20140
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        // order: 'sys.createdAt',
        order: '-fields.price',
      });
      
      let responseItems = response.items;
      let rooms = this.formatData(responseItems);
      let featuredRooms = rooms.filter(room => room.featured === true);
      //
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        //
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    // console.log('getting this room:',room)
    return room;
  }
  handleChange = event => {
  const value = event.target.type === 'checkbox'? event.target.checked : event.target.value; // jak zmieniamy cene to wartosc z suwaka
  const name = event.target.name //np. jak zmieniamy cene to name=price, moze byc size itd
  console.log(`event.target.value: ${event.target.value}. event.target.name: ${event.target.name} `)
    // price change
    // let tempRooms = tempRooms.filter(room => room.price <= target.value)
    
    this.setState({
      [name]: value
    },
    this.filterRoom
    );
  }


  filterRoom = () => {
    let tempRooms = [...this.state.rooms]
    let {type, capacity, minSize, maxSize, price, breakfast, pets} = this.state
    console.log('hi im callback',type)
    capacity = parseInt(capacity);
    price = parseInt(price);
    //filter by price
    tempRooms = tempRooms.filter(room => room.price <= price)
    //filter by type
    if( type !== 'all') {
      // console.log(`tempRooms: ${tempRooms}, type: ${type}`)
      tempRooms = tempRooms.filter(room => room.type === type)
    }
    console.log('temprooms przed:', tempRooms)
    //filter by capacity
    if(capacity != 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }
    //filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
    // filter by breakfast
    if(breakfast) { tempRooms = tempRooms.filter(room => room.breakfast === true)}
    // filter by pets
    if(pets) { tempRooms = tempRooms.filter(room => room.pets === true)}
    console.log('temprooms po:', tempRooms)
    this.setState({
      sortedRooms: tempRooms
    })
  }
  // getRoom = slug => {
  //   let tempRooms = [...this.state.rooms];
  //   const room = tempRooms.find(room => room.slug === slug);
  //   console.log('slug',slug)
  //   return room;
  // };
  // najpierw sie pisze, ze id = ... a nie od razu przypisuje
  // a na koncu spread
  // jak => to nie trzeba jeszcze return dawac, generalnei to trzeba jedno return w kazdym {}
  formatData(items) {
    console.log('items:',items)
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom:this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {/* {console.log(`rooms${this.state.rooms}`)} */}
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}





const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

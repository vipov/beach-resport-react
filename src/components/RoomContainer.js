
// import React from 'react';
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// // import {withRoomConsumer} from '../context';
// import Loading from './Loading';

// function RoomContainer({context}){
// const {loading, sortedRooms, rooms} = context;

//           if(loading) {
//             return <Loading/>;
//           }

//           return (
//           <>
//               Hello from Rooms container  
//               {/* <RoomsFilter rooms={rooms}/>
//               <RoomsList rooms={sortedRooms}/> */}
//           </> )
// }


// // export default withRoomConsumer(RoomContainer)

// import React from 'react';
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';

// export default function RoomContainer() {
//     return (
//     <RoomConsumer>

// {
//   (value) => {
//     const { loading, sortedRooms, rooms} = value;
//     if(loading) {
//       return <Loading/>;
//     }

//     return (
//     <div>
//         Hello from Rooms container  
//         {console.log(`${rooms[0].price}`)}
//         <RoomsFilter rooms={rooms}/>
//         <RoomsList rooms={sortedRooms}/>
//     </div>
//     );
//   }
// }
//     </RoomConsumer>
//     )
// }

import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import {RoomConsumer, RoomContext} from '../context';
import Loading from './Loading';
import {useContext} from 'react';

export default function RoomContainer() {
  const context = useContext(RoomContext);

  const {rooms, sortedRooms} = context;
  console.log('roomscontext',rooms.length)
  
  return <div>
    
    <RoomsFilter rooms={rooms}/>
    <RoomsList rooms={sortedRooms} />
  </div>
}











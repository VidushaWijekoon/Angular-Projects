import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Hilton Hotel';
  numberOfRooms: number = 15;
  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'images/breadcrumbs-bg.jpg',
      checkInTime: new Date('09-Jun-2024'),
      checkOutTime: new Date('09-Jun-2024'),
    },
    {
      roomNumber: 2,
      roomType: 'Regular Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'images/breadcrumbs-bg.jpg',
      checkInTime: new Date('09-Jun-2024'),
      checkOutTime: new Date('10-Jun-2024'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 750,
      photos: 'images/breadcrumbs-bg.jpg',
      checkInTime: new Date('09-Jun-2024'),
      checkOutTime: new Date('10-Jun-2024'),
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  ngOnInit(): void {}
}

import { Component, input, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
})
export class RoomsListComponent implements OnInit {
  constructor() {}
  @Input() item = 'television';
  @Input() rooms: RoomList[] = [];

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    // this.newItemEvent.emit(value);
  }

  ngOnInit(): void {}
}

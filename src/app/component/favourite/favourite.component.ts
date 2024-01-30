import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {
  constructor(private _addser: AddService) {}
  read: any[] = [];
  ngOnInit(): void {
    // this.read = this._addser.read;
  }
}

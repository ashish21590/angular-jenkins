import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

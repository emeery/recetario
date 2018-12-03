import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() destacado = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {}
  onSelect(feat: string) {
    this.destacado.emit(feat);
  }

}

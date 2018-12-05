import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recetas-edit',
  templateUrl: './recetas-edit.component.html',
  styleUrls: ['./recetas-edit.component.css']
})
export class RecetasEditComponent implements OnInit {
  id: number;
  modoEditar = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.modoEditar = params['id'] !== null;
        console.log(this.modoEditar);
      });
  }

}

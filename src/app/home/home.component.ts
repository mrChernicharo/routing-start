import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    this.router.navigate(['servers', id, 'edit'], { queryParams: {allowEdit: 1, user: 'felipe'}, fragment: '#loading'});
  }
}

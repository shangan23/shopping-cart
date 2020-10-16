import { Component, OnInit } from '@angular/core';
import { SignalingService } from 'src/app/services/signaling.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbTitle: string;
  constructor(private signal: SignalingService) {
    this.breadcrumbTitle = ''
  }

  ngOnInit(): void {
    this.signal.getProductTitle().subscribe(data => this.breadcrumbTitle = data.toString())
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  
  pdfSource = "/assets/img/cv2021.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}

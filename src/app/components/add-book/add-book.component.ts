import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  formBook: FormGroup;

  constructor() { 
    this.formBook = new FormGroup({
      title: new FormControl(),
      summary: new FormControl(),
      url_image: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  saveOrUpdate() {
    console.log('Save or Update')
  }

}

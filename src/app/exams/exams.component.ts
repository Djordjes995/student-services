import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

    exams: any = [{name: 'Softveri', department: 'Silab', espb: 6 },
        {name: 'Operaciona istrazivanja', department: 'Laboi', espb: 5 },
        {name: 'Matematika 1', department: 'Mat Fon', espb: 2 },
        {name: 'Engleski', department: 'Eng Fon', espb: 10 }];

  constructor() { }

  ngOnInit() {
  }

}

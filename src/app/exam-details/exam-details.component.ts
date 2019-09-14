import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-exam-details',
    templateUrl: './exam-details.component.html',
    styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent implements OnInit {

    students: any = [{name: 'Andrija', lastname: 'Svrkota', index: '1000/2014', grade: 7},
        {name: 'Petar', lastname: 'Peric', index: '1020/2014', grade: 10},
        {name: 'Marko', lastname: 'Markovic', index: '985/2014', grade: 8},
        {name: 'Milica', lastname: 'Milicic', index: '5/2014', grade: 6}];


    constructor() {
    }

    ngOnInit() {
    }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';
declare var $: any;
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit {
  allStudents: any[] = [];
  studentId: any;
  errorMessage: string = "";
  constructor(private _AuthService:AuthService,private _StudentService: StudentService) { }

  ngOnInit(): void {
    this.showAll();
  }
  showAll() {
    this._StudentService.getStudents().subscribe((response) => {
      if (response.data != null) {
        this.allStudents = response.data;
        console.log(response.data);
      }
    })
  }
  getId(index: number) {
    this._StudentService.studentId = this.allStudents[index].id;
    console.log( this._StudentService.studentId);
    return this._StudentService.studentId;
  }
  Delete() {
    this._StudentService.deleteStudent(this._StudentService.studentId).subscribe((response) => {
      if (response.data != null) {
        $('#exampleModal').modal('hide');
        this.allStudents = response.data;
        this.showAll();
      }
    })
  }
}

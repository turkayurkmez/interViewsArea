import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student-list/student.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Student[]): Student[] {
    if (value) {
      return value.sort((a: Student, b: Student) => {
        if ((a.name!=undefined && b.name != undefined) && a.name < b.name ) {
          return -1;
        } else if ((a.name!=undefined && b.name != undefined) && a.name > b.name ) {
          return 1;
        }
        return 0;
      });
    }
    return [];
  }

}

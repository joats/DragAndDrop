import { Component, ViewChild } from '@angular/core';
import { moveItemInArray, CdkDragMove, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragdrop';

  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;

    timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}

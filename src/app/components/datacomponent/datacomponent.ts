import { Component } from '@angular/core';
import { DataTransformService } from '../../service/modificar-datos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datacomponent',
  imports: [CommonModule],
  templateUrl: './datacomponent.html',
  styleUrl: './datacomponent.css'
})
export class Datacomponent {
  originalData: any;
  modifiedData: any;

  constructor(private dataService: DataTransformService) {
    this.originalData = this.dataService.getOriginalData();
    this.modifiedData = this.dataService.getModifiedData();
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { APIResponse, CarModel } from '../../../models/car';
import { FormsModule } from '@angular/forms';
import { Vehicle } from '../../services/vehicle';

@Component({
  selector: 'app-vehicles',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicles.html',
  styleUrls: ['./vehicles.css'] 
})
export class Vehicles {
  newCarObj: CarModel = new CarModel();
  carsList: CarModel[] = [];
  constructor(private carService: Vehicle) {
    this.newCarObj = new CarModel();
  }
  ngOnInit(){
    this.getAllCars();
  }
  getAllCars(){
    this.carService.getCars().subscribe((res: APIResponse) => {
      this.carsList = res.data;
    });
  }
  onRefresh(){
    this.getAllCars();
  }
  updateVehicle(car: CarModel){
    this.carService.updateCars(car).subscribe((res: APIResponse) => {
      if (res.result) {
        alert("Vehicle updated successfully");
        this.getAllCars();
        this.onClear();
      } else {
        alert(res.message);
      }
    });
  }
  deleteVehicle(Id: number){
    return this.carService.deleteCar(Id).subscribe((res: APIResponse) => {
      if (res.result) {
        alert("Vehicle deleted successfully");
        this.getAllCars();
      } else {
        alert(res.message);
      } 
    });    
  }
  onSave() {
    this.carService.onSaveCar(this.newCarObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert("Vehicle saved successfully");
        this.onClear();
        this.getAllCars();
      } else {
        alert(res.message);
      }
    });
  }

  onClear() {
    this.newCarObj = new CarModel(); 
  }
  onEdit(data: CarModel){
    this.newCarObj = data;
  }
}

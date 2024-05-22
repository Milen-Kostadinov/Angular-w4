import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightBottom } from './trafic-light-bottom/trafic-light-bottom.component';
import { TrafficLightTop } from './trafic-light-top/trafic-light-top.component';
import { TrafficLightLeft } from './trafic-light-left/trafic-light-left.component';
import { TrafficLightRight } from './trafic-light-right/trafic-light-right.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightBottom, TrafficLightTop, TrafficLightLeft, TrafficLightRight, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public status = '';
  public timeOut:any;
  public count = 0;
  public tempStatus:any;
  public emergencyButton = false;
  public ChangeColor(statusInput: any){
    if(statusInput == 'red'){
      this.timeOut = setTimeout(()=>{
        this.status = 'yellow-to-green'
      }, 5000)
    }
    else if(statusInput == 'yellow-to-green'){
      this.timeOut = setTimeout(()=>{
        this.status = 'green'
      }, 2000)
    }
    else if(statusInput == 'green'){
      this.timeOut = setTimeout(()=>{
        this.status = 'yellow-to-red'
      }, 5000)
    }
    else if(statusInput == 'yellow-to-red'){
      this.timeOut = setTimeout(()=>{
        this.status = 'red'
      }, 2000)
    }
  }
  public ngOnDestroy(){
    clearTimeout(this.timeOut);
  }
  public Emergency(){
    clearTimeout(this.timeOut);
    if(this.count == 0){
      this.tempStatus = this.status;
      console.log(this.status)
    }
    if(this.count < 5){
      setTimeout(()=>{
        this.status = 'yellow';
      }, 1000) 
      setTimeout(()=>{
        this.status = ' ';
        this.count++;
        this.Emergency();
      }, 2000) 
    }
    else{
      this.emergencyButton = true;
      this.count = 0;
      this.status = this.tempStatus;
      setTimeout(() => {
        this.emergencyButton = false;
      }, 10000);
    }
  }
}

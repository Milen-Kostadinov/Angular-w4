import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'trafic-light-bottom',
    standalone: true,
    imports: [RouterOutlet, FormsModule],
    templateUrl: './trafic-light-bottom.component.html',
    styleUrl: './trafic-light-bottom.component.css'
})
export class TrafficLightBottom{
    @Input() public trafficLightSttatus = ' ';
    @Output() public onStatusChange = new EventEmitter();

    public startSimulation(){
        this.trafficLightSttatus = 'green';
        this.onStatusChange.emit(this.trafficLightSttatus);
    }
    public ngOnChanges(){
        console.log(this.trafficLightSttatus)     
        this.onStatusChange.emit(this.trafficLightSttatus);
    }
    public warning = "";
    public CheckIfLightIsYellow(){
        if(this.trafficLightSttatus == "yellow-to-green" || this.trafficLightSttatus == "yellow-to-red" || this.trafficLightSttatus == "yellow"){
            this.warning = "Погрешно пресичане!!"
        }
        else{
            this.warning = ""
        }
    }
}

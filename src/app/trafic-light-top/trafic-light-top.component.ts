import { Component, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'trafic-light-top',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './trafic-light-top.component.html',
    styleUrl: './trafic-light-top.component.css'
})
export class TrafficLightTop{
    @Input() public trafficLightSttatus = 'green';
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
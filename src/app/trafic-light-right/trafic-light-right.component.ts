import { Component, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'trafic-light-right',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './trafic-light-right.component.html',
    styleUrl: './trafic-light-right.component.css'
})
export class TrafficLightRight{
    @Input() public trafficLightSttatus = 'red';
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
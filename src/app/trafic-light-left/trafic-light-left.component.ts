import { Component, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'trafic-light-left',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './trafic-light-left.component.html',
    styleUrl: './trafic-light-left.component.css'
})
export class TrafficLightLeft{
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
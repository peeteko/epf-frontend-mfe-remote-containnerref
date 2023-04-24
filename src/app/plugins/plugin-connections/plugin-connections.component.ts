import { Component, HostListener,  OnInit, Input } from '@angular/core';
import { Connection, ConnectionState, PlatformDomainText } from '../plugins-models/plugins.model';
import { PluginService } from '../services/plugin-service.service';


@Component({
  selector: 'app-plugin-connections',
  templateUrl: './plugin-connections.component.html',
  styleUrls: ['./plugin-connections.component.scss']
})
export class PluginConnectionsComponent implements OnInit {

  assetUrl = __webpack_public_path__;

  @Input()
  public jwtTokenCurrentValue? : string;

  public connectionSateEnum = ConnectionState;
  public platformDomainText = PlatformDomainText;

  public connectionsList : Connection[] = [];
  public isMobile: boolean = false;

  constructor (private readonly pluginService : PluginService){}

  ngOnInit(): void {
    if (this.jwtTokenCurrentValue){
      console.log('call get connections list with '+ this.jwtTokenCurrentValue); 
      this.pluginService.getConnectionsList(this.jwtTokenCurrentValue).subscribe((data) => {this.connectionsList = data});
    }
    else{
      console.error('with jwtToken no access to connections list');
    }
  }


  public getShopNameForMobile(id : string,shop : string) {
    let shopName = `${id}.${shop}`;
    if(shopName.length > 30 && !shopName.includes('-')){
      shopName = shopName.substring(0, 30) + "...";
      return shopName;
    }
    return shopName;
  }

  ngAfterViewInit() {
    setTimeout(() => {
        this.onResize();
    });
  }


  @HostListener('window: resize')
  onResize() { //to adjust to screen size
    const hostElementWidth = window.innerWidth;
    this.isMobile = (hostElementWidth >= 750) ? false : true;
  }

}

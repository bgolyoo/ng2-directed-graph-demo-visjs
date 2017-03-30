import { Component, OnInit, OnDestroy } from '@angular/core';
import { VisEdges, VisNetworkData, VisNetworkOptions, VisNetworkService, VisNode, VisNodes } from 'ng2-vis';
import { EDGES, NODES } from './WorldCup2014-data';

class ExampleNetworkData implements VisNetworkData {
    public nodes: VisNodes | any;
    public edges: VisEdges | any;
}

@Component({
    selector: 'network-example2',
    styles: [
            `.network-canvas {
            width: 100%;
            height: 1000px;
            border: 1px solid lightgray;
        }`,
    ],
    template: `
        <div class="network-canvas"
             [visNetwork]="visNetwork"
             [visNetworkData]="visNetworkData"
             [visNetworkOptions]="visNetworkOptions"
             (initialized)="networkInitialized()"></div>
    `,
})
export class VisNetworkExampleComponent2 implements OnInit, OnDestroy {

    public visNetwork: string = 'networkId2';
    public visNetworkData: ExampleNetworkData;
    public visNetworkOptions: VisNetworkOptions;

    public constructor(private visNetworkService: VisNetworkService) {
    }

    public networkInitialized(): void {
        // now we can use the service to register on events
        this.visNetworkService.on(this.visNetwork, 'click');

        // open your console/dev tools to see the click params
        this.visNetworkService.click
            .subscribe((eventData: any[]) => {
                if (eventData[0] === this.visNetwork) {
                    console.log(eventData[1]);
                }
            });
    }

    public ngOnInit(): void {

        let nodes = NODES;
        let edges = EDGES;

        this.visNetworkData = {
            nodes: nodes,
            edges: edges
        };

        this.visNetworkOptions = {
            nodes: {
                shape: 'dot',
                scaling: {
                    min: 10,
                    max: 30
                },
                font: {
                    size: 12,
                    face: 'Tahoma'
                }
            },
            edges: {
                color: {
                    inherit: true
                },
                width: 0.15,
                smooth: true
            },
            interaction: {
                hideEdgesOnDrag: true,
                tooltipDelay: 200
            },
            physics: false
        };
    }

    public ngOnDestroy(): void {
        this.visNetworkService.off(this.visNetwork, 'click');
    }
}


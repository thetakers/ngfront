import { Component, OnInit, Inject } from '@angular/core';
import { URLSearchParams, Http, Jsonp } from "@angular/http";
import { HttpService } from "../../service/basic/http.service";
import { Application } from "../../metadata/constant/application.constant";
import { LoggerService } from "../../service/basic/logger.service";
import { ButtonType } from "../../metadata/constant/buttonType.constant";
import { GUID } from "../../utils/guid.util";
import { DataView } from "../../metadata/sm/dataView.metadata";
import { Response } from "../../metadata/response.metadata";
import { Setting } from "../../metadata/ngb/ngbTree/setting.metadata";
import { Options } from "../../metadata/ngb/ngbGrid/options.metadata";

/**
 * 统一dataView
 */
@Component({
    selector: 'sm-dataview',
    templateUrl: './app/component/sm/dataView.component.html'
})
export class DataViewComponent implements OnInit {
    dataView: any;
    private treeRange: number;
    private gridRange: number;

    //tree input
    private setting: Setting;
    private options:Options;
    private isShowTree:boolean;

    constructor(private logger: LoggerService, private httpService: HttpService) {

    }

    ngOnInit() {
        this.treeRange = 3;
        this.gridRange = 9;
        this.isShowTree = true;
        this.setting = new Setting();
        this.setting.znodes = [
            {
                name: "父节点1", children: [
                    { name: "子节点1" },
                    { name: "子节点2" }
                ]
            }

        ];

        this.options = new Options();

        //初始化数据
        var params = new URLSearchParams();
        params.set("id", "1");

        // 传递过来的不是promise 所以要subscribe执行
        this.httpService.doPost(Application.baseContext, params).subscribe(res => {
            console.log(res);
            let resp = res.data() as Response<DataView>;
        });
    }


}
/**
 * Content
 */

import { DataModule } from "../ngb/ngbTree/dataModule.md";
import { Options } from "../ngb/ngbGrid/options.md";

export class DataViewModule {
    constructor() {
        
    }
    id:string;
    version:number;
    createUser:string;
    createTime:string;
    lastUpdateUser:string;
    lastUpdateTime:string;
    dataViewCode:string;
    dataViewName:string;
    sqlid:string;
    remark:string;
    options:Options;
    treeModule:TreeModule;
    conditions:Array<Condition>;
    funcButtons:Array<FuncButton>;
}


export class TreeModule{
    constructor() {}
    isShow:boolean;
    url:string;
    idKey:string;
    name:string;
    pIdKey:string;
    nodeOpts:string;
    width:number;
    relationField:string;
}

/**
 * 查询条件
 */
export class Condition {
    constructor() {
        
    }
    isSort :boolean;
    fieldType:string;
    field:string;
    dataType:string;
    expr:string;
    title:string;
    extensions:string;
}

/**
 * Button
 */
export class FuncButton {
    constructor() {
        
    }
    id:string;
    func:number;//0:接口,1:弹窗,2:新窗口
    icon:string;
    dialogSize:string;
    title:string;
    url:string;
    type:number;//导航按钮 1:导航按钮,0:行内按钮
    sort:number;
}
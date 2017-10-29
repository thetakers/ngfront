import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BootstrapTableDefaults } from '../metadata/ngbGrid/options.md';
import { Application } from '../../sm/constant/application.constant';
import { ColumOptions } from '../metadata/ngbGrid/columnOptions.md';
import { GoldbalConstant } from '../../sm/constant/global.constant';
declare var $: any;

/**
 * grid组件
 * ningzk
 */
@Component({
    selector: 'ng4b-grid',
    templateUrl: './ngbGrid.component.html'
})
export class NgbGridComponent implements OnInit, AfterViewInit {
    @Input() options: BootstrapTableDefaults;
    constructor() { }
    private ngbootstrapTable: any;
    @ViewChild('ngbootstrapTable') erf: ElementRef;
    ngOnInit() {
        // console.info(JSON.stringify(this.options));
        if (this.options.url.indexOf('http://') < 0 && this.options.url.indexOf('https://') < 0) {
            this.options.url = Application.ubold_sm_sql_bootstrap_dataList + this.options.url;
        }

        // 深度复制
        // let bootstrapOptions = JSON.parse(JSON.stringify(this.options));
        // bootstrapOptions.queryParams = this.options.queryParams;
        this.options.toolbar = '#toolbar_';
        this.createStatefield(this.options);
        this.columnsformart(this.options);
        this.ngbootstrapTable = $(this.erf.nativeElement).bootstrapTable(this.options);
    }
    ngAfterViewInit(): void { }
    createStatefield(bootstrapOptions: BootstrapTableDefaults) {
        if (bootstrapOptions.columns &&
            bootstrapOptions.columns.length > 0 &&
            bootstrapOptions.checkboxHeader) {
            const options = new ColumOptions();
            options.title = '_state';
            options.field = '_state';
            options.checkbox = true;
            options.insert = false;
            options.view = false;
            options.title = '选择';
            options.updateType = GoldbalConstant.MODIFTY_TYPES.hide;
            bootstrapOptions.columns.splice(0, 0, options);
        }
    }

    columnsformart(bootstrapOptions: BootstrapTableDefaults) {
        if (this.options.columns) {
            this.options.columns.forEach(co => {
                 if (co.formatter instanceof Function){
                    return;
                 }
                 co.formatter =  null == co.formatter ? undefined : eval('(' + co.formatter + ')');
            });
        }
    }

    refresh(parameter?) {
        this.ngbootstrapTable.bootstrapTable('refresh', { query: parameter });
    }

    getSelections() {
        return this.ngbootstrapTable.bootstrapTable('getSelections');
    }

    getInstance() {
        return this.ngbootstrapTable;
    }
}
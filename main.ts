// 动态引导必须引入reflect库
import 'reflect-metadata';
// 用户捕获浏览器异步事件,帮助NG2实现高效变化检测特性
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

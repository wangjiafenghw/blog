import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/user/components/Modal",
        "exact": true,
        "component": require('../user/components/Modal.js').default
      },
      {
        "path": "/user/components/List",
        "exact": true,
        "component": require('../user/components/List.js').default
      },
      {
        "path": "/user/components/Filter",
        "exact": true,
        "component": require('../user/components/Filter.js').default
      },
      {
        "path": "/user/:id",
        "exact": true,
        "component": require('../user/$id/index.js').default
      },
      {
        "path": "/user/:id/models/detail",
        "exact": true,
        "component": require('../user/$id/models/detail.js').default
      },
      {
        "path": "/user/model",
        "exact": true,
        "component": require('../user/model.js').default
      },
      {
        "path": "/user",
        "exact": true,
        "component": require('../user/index.js').default
      },
      {
        "path": "/request",
        "exact": true,
        "component": require('../request/index.js').default
      },
      {
        "path": "/post/components/List",
        "exact": true,
        "component": require('../post/components/List.js').default
      },
      {
        "path": "/post/model",
        "exact": true,
        "component": require('../post/model.js').default
      },
      {
        "path": "/post",
        "exact": true,
        "component": require('../post/index.js').default
      },
      {
        "path": "/login/model",
        "exact": true,
        "component": require('../login/model.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login/index.js').default
      },
      {
        "path": "/dashboard/model",
        "exact": true,
        "component": require('../dashboard/model.js').default
      },
      {
        "path": "/dashboard",
        "exact": true,
        "component": require('../dashboard/index.js').default
      },
      {
        "path": "/dashboard/services/weather",
        "exact": true,
        "component": require('../dashboard/services/weather.js').default
      },
      {
        "path": "/dashboard/services/dashboard",
        "exact": true,
        "component": require('../dashboard/services/dashboard.js').default
      },
      {
        "path": "/dashboard/components/weather",
        "exact": true,
        "component": require('../dashboard/components/weather.js').default
      },
      {
        "path": "/dashboard/components/user",
        "exact": true,
        "component": require('../dashboard/components/user.js').default
      },
      {
        "path": "/dashboard/components/sales",
        "exact": true,
        "component": require('../dashboard/components/sales.js').default
      },
      {
        "path": "/dashboard/components/recentSales",
        "exact": true,
        "component": require('../dashboard/components/recentSales.js').default
      },
      {
        "path": "/dashboard/components/quote",
        "exact": true,
        "component": require('../dashboard/components/quote.js').default
      },
      {
        "path": "/dashboard/components/numberCard",
        "exact": true,
        "component": require('../dashboard/components/numberCard.js').default
      },
      {
        "path": "/dashboard/components",
        "exact": true,
        "component": require('../dashboard/components/index.js').default
      },
      {
        "path": "/dashboard/components/cpu",
        "exact": true,
        "component": require('../dashboard/components/cpu.js').default
      },
      {
        "path": "/dashboard/components/completed",
        "exact": true,
        "component": require('../dashboard/components/completed.js').default
      },
      {
        "path": "/dashboard/components/comments",
        "exact": true,
        "component": require('../dashboard/components/comments.js').default
      },
      {
        "path": "/dashboard/components/browser",
        "exact": true,
        "component": require('../dashboard/components/browser.js').default
      },
      {
        "path": "/chart/Container",
        "exact": true,
        "component": require('../chart/Container.js').default
      },
      {
        "path": "/chart/highCharts",
        "exact": true,
        "component": require('../chart/highCharts/index.js').default
      },
      {
        "path": "/chart/highCharts/HighstockComponent",
        "exact": true,
        "component": require('../chart/highCharts/HighstockComponent.js').default
      },
      {
        "path": "/chart/highCharts/HighmapsComponent",
        "exact": true,
        "component": require('../chart/highCharts/HighmapsComponent.js').default
      },
      {
        "path": "/chart/highCharts/HighMoreComponent",
        "exact": true,
        "component": require('../chart/highCharts/HighMoreComponent.js').default
      },
      {
        "path": "/chart/highCharts/HighChartsComponent",
        "exact": true,
        "component": require('../chart/highCharts/HighChartsComponent.js').default
      },
      {
        "path": "/chart/highCharts/mapdata/europe",
        "exact": true,
        "component": require('../chart/highCharts/mapdata/europe.js').default
      },
      {
        "path": "/chart/Recharts",
        "exact": true,
        "component": require('../chart/Recharts/index.js').default
      },
      {
        "path": "/chart/Recharts/ReChartsComponent",
        "exact": true,
        "component": require('../chart/Recharts/ReChartsComponent.js').default
      },
      {
        "path": "/chart/Recharts/LineChartComponent",
        "exact": true,
        "component": require('../chart/Recharts/LineChartComponent.js').default
      },
      {
        "path": "/chart/Recharts/Container",
        "exact": true,
        "component": require('../chart/Recharts/Container.js').default
      },
      {
        "path": "/chart/Recharts/BarChartComponent",
        "exact": true,
        "component": require('../chart/Recharts/BarChartComponent.js').default
      },
      {
        "path": "/chart/Recharts/AreaChartComponent",
        "exact": true,
        "component": require('../chart/Recharts/AreaChartComponent.js').default
      },
      {
        "path": "/chart/ECharts",
        "exact": true,
        "component": require('../chart/ECharts/index.js').default
      },
      {
        "path": "/chart/ECharts/TreemapComponent",
        "exact": true,
        "component": require('../chart/ECharts/TreemapComponent.js').default
      },
      {
        "path": "/chart/ECharts/TransparentBar3DComPonent",
        "exact": true,
        "component": require('../chart/ECharts/TransparentBar3DComPonent.js').default
      },
      {
        "path": "/chart/ECharts/ThemeChartComponent",
        "exact": true,
        "component": require('../chart/ECharts/ThemeChartComponent.js').default
      },
      {
        "path": "/chart/ECharts/SimpleChartComponent",
        "exact": true,
        "component": require('../chart/ECharts/SimpleChartComponent.js').default
      },
      {
        "path": "/chart/ECharts/ModuleLoadChartComponent",
        "exact": true,
        "component": require('../chart/ECharts/ModuleLoadChartComponent.js').default
      },
      {
        "path": "/chart/ECharts/MapChartComponent",
        "exact": true,
        "component": require('../chart/ECharts/MapChartComponent.js').default
      },
      {
        "path": "/chart/ECharts/MainPageComponent",
        "exact": true,
        "component": require('../chart/ECharts/MainPageComponent.js').default
      },
      {
        "path": "/chart/ECharts/LunarCalendarComponent",
        "exact": true,
        "component": require('../chart/ECharts/LunarCalendarComponent.js').default
      },
      {
        "path": "/chart/ECharts/LiquidfillComponent",
        "exact": true,
        "component": require('../chart/ECharts/LiquidfillComponent.js').default
      },
      {
        "path": "/chart/ECharts/GraphComponent",
        "exact": true,
        "component": require('../chart/ECharts/GraphComponent.js').default
      },
      {
        "path": "/chart/ECharts/GaugeComponent",
        "exact": true,
        "component": require('../chart/ECharts/GaugeComponent.js').default
      },
      {
        "path": "/chart/ECharts/GCalendarComponent",
        "exact": true,
        "component": require('../chart/ECharts/GCalendarComponent.js').default
      },
      {
        "path": "/chart/ECharts/EchartsComponent",
        "exact": true,
        "component": require('../chart/ECharts/EchartsComponent.js').default
      },
      {
        "path": "/chart/ECharts/DynamicChartComponent",
        "exact": true,
        "component": require('../chart/ECharts/DynamicChartComponent.js').default
      },
      {
        "path": "/chart/ECharts/ChartWithEventComponent",
        "exact": true,
        "component": require('../chart/ECharts/ChartWithEventComponent.js').default
      },
      {
        "path": "/chart/ECharts/ChartShowLoadingComponent",
        "exact": true,
        "component": require('../chart/ECharts/ChartShowLoadingComponent.js').default
      },
      {
        "path": "/chart/ECharts/ChartAPIComponent",
        "exact": true,
        "component": require('../chart/ECharts/ChartAPIComponent.js').default
      },
      {
        "path": "/chart/ECharts/CalendarComponent",
        "exact": true,
        "component": require('../chart/ECharts/CalendarComponent.js').default
      },
      {
        "path": "/chart/ECharts/BubbleGradientComponent",
        "exact": true,
        "component": require('../chart/ECharts/BubbleGradientComponent.js').default
      },
      {
        "path": "/chart/ECharts/AirportCoordComponent",
        "exact": true,
        "component": require('../chart/ECharts/AirportCoordComponent.js').default
      },
      {
        "path": "/chart/ECharts/theme/shine",
        "exact": true,
        "component": require('../chart/ECharts/theme/shine.js').default
      },
      {
        "path": "/chart/ECharts/theme/macarons",
        "exact": true,
        "component": require('../chart/ECharts/theme/macarons.js').default
      },
      {
        "path": "/UIElement/editor",
        "exact": true,
        "component": require('../UIElement/editor/index.js').default
      },
      {
        "path": "/Cloud/Upload/uploadFile",
        "exact": true,
        "component": require('../Cloud/Upload/uploadFile.js').default
      },
      {
        "path": "/Cloud/Upload/model",
        "exact": true,
        "component": require('../Cloud/Upload/model.js').default
      },
      {
        "path": "/Cloud/Upload",
        "exact": true,
        "component": require('../Cloud/Upload/index.js').default
      },
      {
        "path": "/Cloud/Upload/commit",
        "exact": true,
        "component": require('../Cloud/Upload/commit.js').default
      },
      {
        "component": () => React.createElement(require('/home/baymax/Documents/project/blog/antd-admin-master/node_modules/_umi-build-dev@1.3.0-beta.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/home/baymax/Documents/project/blog/antd-admin-master/node_modules/_umi-build-dev@1.3.0-beta.3@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}

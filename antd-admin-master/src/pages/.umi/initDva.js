import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});
app.use(require('../../plugins/onError.js').default);
app.use(require('/home/baymax/Documents/project/blog/admin/node_modules/_dva-immer@0.2.4@dva-immer/lib/index.js').default());
app.model({ namespace: 'app', ...(require('/home/baymax/Documents/project/blog/admin/src/models/app.js').default) });
app.model({ namespace: 'detail', ...(require('/home/baymax/Documents/project/blog/admin/src/pages/user/$id/models/detail.js').default) });
app.model({ namespace: 'model', ...(require('/home/baymax/Documents/project/blog/admin/src/pages/user/model.js').default) });
app.model({ namespace: 'model', ...(require('/home/baymax/Documents/project/blog/admin/src/pages/post/model.js').default) });
app.model({ namespace: 'model', ...(require('/home/baymax/Documents/project/blog/admin/src/pages/login/model.js').default) });
app.model({ namespace: 'model', ...(require('/home/baymax/Documents/project/blog/admin/src/pages/dashboard/model.js').default) });
app.model({ namespace: 'model', ...(require('/home/baymax/Documents/project/blog/admin/src/pages/Cloud/Upload/model.js').default) });

import { defineConfig } from 'umi';
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

export default defineConfig({
  layout: {
    name: 'Gis Tool',
  },
  routes: [
    {
      path: '/',
      redirect: '/geo-json-vision',
    },
    { path: '/geo-json-vision', component: '@/pages/GeoJsonVision' },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  extraBabelIncludes: ['react-monaco-editor', 'monaco-editor'],
  fastRefresh: {},
  // chainWebpack(config) {
  //   config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
  //     {
  //       languages: ['yaml'],
  //     },
  //   ]);
  // },
});

// vite.config.ts
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";
var pathSrc = path.resolve("/Users/wubo/Documents/develop/vite-vue3", "src");
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": pathSrc
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          exclude: new RegExp(/^(?!.*loading-directive).*$/)
        })
      ]
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({})
      ],
      dts: "src/components.d.ts"
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true
        })
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5cbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcblxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCB7XG5cdHByZXNldEF0dHJpYnV0aWZ5LFxuXHRwcmVzZXRJY29ucyxcblx0cHJlc2V0VW5vLFxuXHR0cmFuc2Zvcm1lckRpcmVjdGl2ZXMsXG5cdHRyYW5zZm9ybWVyVmFyaWFudEdyb3VwXG59IGZyb20gJ3Vub2NzcydcblxuY29uc3QgcGF0aFNyYyA9IHBhdGgucmVzb2x2ZShcIi9Vc2Vycy93dWJvL0RvY3VtZW50cy9kZXZlbG9wL3ZpdGUtdnVlM1wiLCAnc3JjJylcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0J0AnOiBwYXRoU3JjXG5cdFx0fVxuXHR9LFxuXHRjc3M6IHtcblx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG5cdFx0XHRzY3NzOiB7XG5cdFx0XHRcdGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcIkAvc3R5bGVzL2VsZW1lbnQvaW5kZXguc2Nzc1wiIGFzICo7YFxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cGx1Z2luczogW1xuXHRcdHZ1ZSgpLFxuXHRcdEF1dG9JbXBvcnQoe1xuXHRcdFx0cmVzb2x2ZXJzOiBbXG5cdFx0XHRcdEVsZW1lbnRQbHVzUmVzb2x2ZXIoe1xuXHRcdFx0XHRcdGV4Y2x1ZGU6IG5ldyBSZWdFeHAoL14oPyEuKmxvYWRpbmctZGlyZWN0aXZlKS4qJC8pXG5cdFx0XHRcdH0pXG5cdFx0XHRdXG5cdFx0fSksXG5cdFx0Q29tcG9uZW50cyh7XG5cdFx0XHQvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXG5cdFx0XHRleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuXHRcdFx0Ly8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxuXHRcdFx0aW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcblx0XHRcdHJlc29sdmVyczogW1xuXHRcdFx0XHRFbGVtZW50UGx1c1Jlc29sdmVyKHtcblx0XHRcdFx0XHQvLyBpbXBvcnRTdHlsZTogJ3Nhc3MnXG5cdFx0XHRcdH0pXG5cdFx0XHRdLFxuXHRcdFx0ZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cydcblx0XHR9KSxcblxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3Ncblx0XHQvLyBzZWUgdW5vY3NzLmNvbmZpZy50cyBmb3IgY29uZmlnXG5cdFx0VW5vY3NzKHtcblx0XHRcdHByZXNldHM6IFtcblx0XHRcdFx0cHJlc2V0VW5vKCksXG5cdFx0XHRcdHByZXNldEF0dHJpYnV0aWZ5KCksXG5cdFx0XHRcdHByZXNldEljb25zKHtcblx0XHRcdFx0XHRzY2FsZTogMS4yLFxuXHRcdFx0XHRcdHdhcm46IHRydWVcblx0XHRcdFx0fSlcblx0XHRcdF0sXG5cdFx0XHR0cmFuc2Zvcm1lcnM6IFt0cmFuc2Zvcm1lckRpcmVjdGl2ZXMoKSwgdHJhbnNmb3JtZXJWYXJpYW50R3JvdXAoKV1cblx0XHR9KVxuXHRdXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFFaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFFcEMsT0FBTyxZQUFZO0FBQ25CO0FBQUEsRUFDQztBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxPQUNNO0FBRVAsSUFBTSxVQUFVLEtBQUssUUFBUSwyQ0FBMkMsS0FBSztBQUc3RSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDTjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNKLHFCQUFxQjtBQUFBLE1BQ3BCLE1BQU07QUFBQSxRQUNMLGdCQUFnQjtBQUFBLE1BQ2pCO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNWLFdBQVc7QUFBQSxRQUNWLG9CQUFvQjtBQUFBLFVBQ25CLFNBQVMsSUFBSSxPQUFPLDZCQUE2QjtBQUFBLFFBQ2xELENBQUM7QUFBQSxNQUNGO0FBQUEsSUFDRCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFFVixZQUFZLENBQUMsT0FBTyxJQUFJO0FBQUEsTUFFeEIsU0FBUyxDQUFDLFVBQVUsY0FBYyxPQUFPO0FBQUEsTUFDekMsV0FBVztBQUFBLFFBQ1Ysb0JBQW9CLENBRXBCLENBQUM7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsSUFDTixDQUFDO0FBQUEsSUFJRCxPQUFPO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixrQkFBa0I7QUFBQSxRQUNsQixZQUFZO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsUUFDUCxDQUFDO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYyxDQUFDLHNCQUFzQixHQUFHLHdCQUF3QixDQUFDO0FBQUEsSUFDbEUsQ0FBQztBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

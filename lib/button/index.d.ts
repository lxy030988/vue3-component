import type { App } from 'vue';
import Button from './src/button.vue';
declare type TButton = typeof Button & {
    install(app: App): void;
};
declare const _Button: TButton;
export default _Button;

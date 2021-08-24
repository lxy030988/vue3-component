import { defineComponent, openBlock, createElementBlock } from 'vue';

var script = defineComponent({
    name: 'LButton',
    setup() {
        return {};
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, "button"))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Button = script;

export { _Button as default };

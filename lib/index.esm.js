import { defineComponent, openBlock, createElementBlock, computed, normalizeClass } from 'vue';

var script$1 = defineComponent({
    name: 'LButton',
    setup() {
        return {};
    }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, "button"))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};
const _Button = script$1;

var script = defineComponent({
    name: 'LIcon',
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const className = computed(() => 'l-icon-' + props.name);
        return { className };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(_ctx.className)
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script);
};

const components = [_Button, script];
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
var index = { install };

export { index as default };

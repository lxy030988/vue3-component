import { defineComponent, computed, openBlock, createElementBlock, normalizeClass } from 'vue';

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

export { script as default };

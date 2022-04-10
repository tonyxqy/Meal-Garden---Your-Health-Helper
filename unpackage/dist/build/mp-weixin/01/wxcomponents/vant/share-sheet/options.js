require('../../../common/runtime.js');require('../../../common/vendor.js');require('../../../common/main.js');import { VantComponent } from '../common/component';
VantComponent({
    props: {
        options: Array,
        showBorder: Boolean,
    },
    methods: {
        onSelect(event) {
            const { index } = event.currentTarget.dataset;
            const option = this.data.options[index];
            this.$emit('select', Object.assign(Object.assign({}, option), { index }));
        },
    },
});

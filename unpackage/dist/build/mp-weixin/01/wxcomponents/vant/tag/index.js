require('../../../common/runtime.js');require('../../../common/vendor.js');require('../../../common/main.js');import { VantComponent } from '../common/component';
VantComponent({
    props: {
        size: String,
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean,
        textColor: String,
        type: {
            type: String,
            value: 'default',
        },
        closeable: Boolean,
    },
    methods: {
        onClose() {
            this.$emit('close');
        },
    },
});

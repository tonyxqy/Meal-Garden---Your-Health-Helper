require('../../../common/runtime.js');require('../../../common/vendor.js');require('../../../common/main.js');import { VantComponent } from '../common/component';
VantComponent({
    props: {
        color: String,
        vertical: Boolean,
        type: {
            type: String,
            value: 'circular',
        },
        size: String,
        textSize: String,
    },
    data: {
        array12: Array.from({ length: 12 }),
    },
});

require('../../../common/runtime.js');require('../../../common/vendor.js');require('../../../common/main.js');import { VantComponent } from '../common/component';
VantComponent({
    props: {
        description: String,
        image: {
            type: String,
            value: 'default',
        },
    },
});

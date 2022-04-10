require('../../../common/runtime.js');require('../../../common/vendor.js');require('../../../common/main.js');import { VantComponent } from '../common/component';
VantComponent({
    classes: ['header-class', 'footer-class'],
    props: {
        desc: String,
        title: String,
        status: String,
    },
});

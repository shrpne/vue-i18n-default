import translateDefaultFactory from './translate-default';

export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                $td: translateDefaultFactory('$i18n', '$store'),
            },
        });
    },
};

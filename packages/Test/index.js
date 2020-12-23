import Test from './component';

/* istanbul ignore next */
Test.install = function(Vue) {
  Vue.component(Test.name, Test);
};

export default Test;

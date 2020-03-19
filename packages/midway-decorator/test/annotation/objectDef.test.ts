
import { expect } from 'chai';
import { Async, Scope, ScopeEnum, Autowire, Init, Destroy, getObjectDefProps } from '../../src';

@Async()
@Scope(ScopeEnum.Prototype)
@Autowire(false)
class Test {
  @Init()
  init() {}

  @Destroy()
  destroy() {}
}

describe('/test/annotation/objectDef.test.ts', () => {
  it('objectDef decorator should be ok', () => {
    const def = getObjectDefProps(Test);
    expect(def).deep.eq({
      isAutowire: false,
      scope: ScopeEnum.Prototype,
      initMethod: 'init',
      destroyMethod: 'destroy',
      isAsync: true
    });
  });
});
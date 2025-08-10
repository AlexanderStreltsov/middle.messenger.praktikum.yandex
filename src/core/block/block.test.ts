import { expect } from 'chai';

import { HTMLElements } from '../../constants';
import { Block } from './block';

describe('Block', () => {
  class TestBlock extends Block {
    constructor(props: Record<string, unknown>) {
      super(HTMLElements.DIV, { ...props });
    }

    render() {
      return '{{testString}}';
    }
  }

  let block: TestBlock;
  const testProps = { testString: 'testString' };
  const testPropsUpdated = { testString: 'testStringUpdated' };

  beforeEach(() => {
    block = new TestBlock(testProps);
  });

  it('block content should be HTMLDivElement', () => {
    const element = block.getContent();
    expect(element).to.be.instanceOf(HTMLDivElement);
  });

  it('block content should be equal to init testString', () => {
    const element = block.getContent();
    expect(element?.textContent).to.equal(testProps.testString);
  });

  it('block props should be equal to init testProps', () => {
    expect(block.getProps()).to.deep.equal(testProps);
  });

  it('block children should be empty object', () => {
    expect(block.getChildren()).to.deep.equal({});
  });

  it('block props should be updated', () => {
    block.setProps(testPropsUpdated);
    expect(block.getProps()).to.deep.equal(testPropsUpdated);
  });

  it('block should be removed from DOM', () => {
    block.removeDOM();
    expect(block.getContent()).to.equal(null);
  });
});

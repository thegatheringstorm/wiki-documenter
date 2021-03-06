import * as assert from 'assert'

import who from '../../src/xtranslation/KnowLan/who'

describe('Xtranslation KnowLan Who', function () {
    it('basic test', async function () {
        const mock = {
            para: '11月14日，青鸟盛地体育与荷兰维特斯足球俱乐部战略合作签约仪式新闻发布会在北京举行，这将标志着中欧联动、共同打造国内青少年足球运动培训体系步入一个崭新阶段。中国足协执委高洪波，荷兰维特斯足球俱乐部总经理德维特（Joost de Wit），青鸟盛地董事长赵乾翔，青鸟盛地副总经理毛阔等出席签约仪式。'
        }
        const result = await who(mock)
        assert.equal(result.length, 4)
    })
})

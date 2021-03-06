import * as assert from 'assert'

import { localizer, parser } from '../src/baidu/baike/project/basic-info'

import { LocalizerError, ParserError } from '../src/error'
import url_to_target_content from '../src/url_to_target_content'

describe('URL to Target Content', function () {
    this.slow(5000)
    this.timeout(10000)
    it('basic test', async function () {
        const url = 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/19877005?fr=aladdin'
        const result__try = await url_to_target_content(url, { parser, localizer })
        const result = result__try.get()

        assert.equal(result.get('出生地'), '湖北省南漳县')
    })

    it('should throw err if parser or localizer fails', async function () {
        const url = 'https://baike.baidu.com/item/%E7%8E%8B%E6%AF%85/4852987'
        try {
            const result = await url_to_target_content(url, { parser, localizer })
            result.get()
        } catch (error) {
            assert(error instanceof LocalizerError)
        }
    })
})

import { expect, test } from 'vitest'
import {rest, sum} from "../utils/sum"

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('rest 3 - 1 to equal 2', () => {
    expect(rest(3, 1)).toBe(2)
})

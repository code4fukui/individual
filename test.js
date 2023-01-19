import * as t from "https://deno.land/std/testing/asserts.ts";
import { Individual } from './index.js';

Deno.test('can create Individual', function (assert) {
    const obj = Individual('someName', 42);

    t.assertEquals(obj, 42);

    const obj2 = Individual('someName', 50);

    t.assertEquals(obj2, 42);
});

Deno.test('different keys', function (assert) {
    const obj = Individual('someName2', 42);
    const obj2 = Individual('otherName2', 50);

    t.assertEquals(obj, 42);
    t.assertEquals(obj2, 50);
});

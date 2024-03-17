/**
 * © Copyright Outburn Ltd. 2022-2023 All Rights Reserved
 *   Project name: FUME-COMMUNITY
 */
import { test } from '@jest/globals';

import { duplicate } from './duplicate';

describe('string helper tests', () => {
  describe('duplicate', () => {
    test('duplicate times 0', async () => {
      const res = await duplicate('lala', 0);
      expect(res).toBe('');
    });

    test('duplicate times 1', async () => {
      const res = await duplicate('lala', 1);
      expect(res).toBe('lala');
    });

    test('duplicate times 2', async () => {
      const res = await duplicate('lala', 2);
      expect(res).toBe('lalalala');
    });
  });
});

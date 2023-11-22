import { PluginPayload, useOnStandalonePluginInit } from '@lobehub/chat-plugin-sdk/client';
import { renderHook } from '@testing-library/react';
import { Mock, afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { fetchPluginPayload } from '../../src/client/fetch/pluginPayload';

// Mock the `fetchPluginPayload` function
vi.mock('../../src/client/fetch/pluginPayload', () => {
  return {
    fetchPluginPayload: vi.fn(),
  };
});

describe('useOnStandalonePluginInit', () => {
  let callback: Mock;

  beforeEach(() => {
    callback = vi.fn();
    // Reset mocks before each test
    (fetchPluginPayload as Mock).mockReset();
  });

  afterEach(() => {
    // Clean up after each test if needed
  });

  it('should not call callback if fetchPluginPayload resolves to undefined', async () => {
    // Mock the fetchPluginPayload to resolve to undefined
    (fetchPluginPayload as Mock).mockResolvedValue();

    // Render the hook
    renderHook(() => useOnStandalonePluginInit(callback));

    // Ensure the callback has not been called
    expect(callback).not.toHaveBeenCalled();
  });

  it('should call callback with the resolved payload', async () => {
    // Create a mock payload
    const mockPayload: PluginPayload = {
      arguments: { some: 'data' },
      name: 'testPlugin',
      settings: {},
      state: {},
    };

    // Mock the fetchPluginPayload to resolve with the mock payload
    (fetchPluginPayload as Mock).mockResolvedValue(mockPayload);

    // Render the hook
    renderHook(() => useOnStandalonePluginInit(callback));

    // Ensure the callback has been called with the mock payload
    await vi.waitFor(() => expect(callback).toHaveBeenCalledWith(mockPayload));
  });
});

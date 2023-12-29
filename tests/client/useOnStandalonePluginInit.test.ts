import {
  PluginPayload,
  lobeChat,
  useOnStandalonePluginInit,
} from '@lobehub/chat-plugin-sdk/client';
import { renderHook } from '@testing-library/react';
import { Mock, beforeEach, describe, expect, it, vi } from 'vitest';

describe('useOnStandalonePluginInit', () => {
  let callback: Mock;

  beforeEach(() => {
    callback = vi.fn();
    // Reset mocks before each test
    vi.resetAllMocks();
  });

  it('should not call callback if getPluginPayload resolves to undefined', async () => {
    // Mock the getPluginPayload to resolve to undefined
    vi.spyOn(lobeChat, 'getPluginPayload').mockResolvedValue(undefined as any);

    // Render the hook
    renderHook(() => useOnStandalonePluginInit(callback));

    // Delay to allow any promises to resolve
    await vi.waitFor(() => expect(callback).not.toHaveBeenCalled());
  });

  it('should call callback with the resolved payload', async () => {
    // Create a mock payload
    const mockPayload: PluginPayload = {
      arguments: { some: 'data' },
      name: 'testPlugin',
      settings: {},
      state: {},
    };

    // Mock the getPluginPayload to resolve with the mock payload
    vi.spyOn(lobeChat, 'getPluginPayload').mockResolvedValue(mockPayload);

    // Render the hook
    renderHook(() => useOnStandalonePluginInit(callback));

    // Delay to allow any promises to resolve
    await vi.waitFor(() => expect(callback).toHaveBeenCalledWith(mockPayload));
  });
});

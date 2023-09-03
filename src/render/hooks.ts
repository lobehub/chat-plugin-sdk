import { useEffect, useState } from 'react';

import { PluginRenderProps } from '@/types';

import { PluginChannel } from './const';
import { onPluginReady, onReceiveData } from './utils';

export const useWatchPluginMessage = <T = any>() => {
  const [result, setData] = useState<{ data: T; loading: boolean }>({
    data: undefined as T,
    loading: true,
  });

  const receiverData = (e: MessageEvent) => {
    onReceiveData(e, (data: PluginRenderProps<T>) => {
      setData({ data: data.content, loading: false });
    });
  };

  useEffect(() => {
    window.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.pluginReadyForRender }, '*');

    return () => {
      window.removeEventListener('message', receiverData);
    };
  }, []);

  return result;
};

export const useOnPluginReady = (onReady: () => void) => {
  useEffect(() => {
    const fn = (e: MessageEvent) => {
      onPluginReady(e, onReady);
    };

    window.addEventListener('message', fn);
    return () => {
      window.removeEventListener('message', fn);
    };
  }, []);
};

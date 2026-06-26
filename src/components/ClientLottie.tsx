import { useState, useEffect } from 'react';

/** Wrapper that loads @lottielab/lottie-player only on the client to avoid "document is not defined" during SSR. */
export function ClientLottie(props: React.ComponentProps<any>) {
  const [LottieComponent, setLottieComponent] = useState<React.ComponentType<any> | null>(null);
  useEffect(() => {
    import('@lottielab/lottie-player/react').then((mod) => setLottieComponent(() => mod.default));
  }, []);
  if (!LottieComponent) return null;
  return <LottieComponent {...props} />;
}

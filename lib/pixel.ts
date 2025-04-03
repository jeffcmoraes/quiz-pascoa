export const FB_PIXEL_ID = '67ecb4dc8f2982e1b576b003';

export const pageview = () => {
  (window as any).fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  (window as any).fbq("track", name, options);
};

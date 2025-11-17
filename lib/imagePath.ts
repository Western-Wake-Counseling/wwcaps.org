// helper function to prepend basePath to image paths for github pages
export function getImagePath(src: string): string {
  // get basePath from environment variable (available at build time)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // if no basePath, return src as-is
  if (!basePath) {
    return src;
  }
  
  // if src already starts with basePath, return as-is
  if (src.startsWith(basePath)) {
    return src;
  }
  
  // ensure src starts with /
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  
  // prepend basePath
  return `${basePath}${cleanSrc}`;
}


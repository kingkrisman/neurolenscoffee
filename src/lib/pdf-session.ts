let bytes: ArrayBuffer | null = null;
let pageCount = 0;

export function setPdfSession(data: ArrayBuffer, pages: number) {
  bytes = data;
  pageCount = pages;
}

export function clearPdfSession() {
  bytes = null;
  pageCount = 0;
}

export function getPdfBytes() {
  return bytes;
}

export function getPdfPageCount() {
  return pageCount;
}

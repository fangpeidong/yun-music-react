import request from '@/utils/request';

export function getTopBanners() {
  return request({
    url: '/banner',
  });
}

import request from '@/utils/request';

// 获取榜单详情
export function getRankingList(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    },
  });
}

export function getTopList() {
  return request({
    url: '/toplist',
  });
}

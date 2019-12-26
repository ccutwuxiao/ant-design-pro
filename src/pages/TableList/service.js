import request from '@/utils/request';

export async function queryUsers(params) {
  return request('/api/queryUsers', {
    method: 'POST',
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}

export async function delUser(params) {
  return request(`/api/delUser?id=${params.id}`, {
    method: 'POST',
  });
}

export async function saveUser(params) {
  return request('/api/saveUser', {
    method: 'POST',
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}

export async function updateUser(params) {
  return request('/api/updateUser', {
    method: 'POST',
    data: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}


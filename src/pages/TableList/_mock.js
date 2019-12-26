function getFakeList(req, res) {
  // const data=[
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];
  const data={
    "code": 200,
    "data": {
      "list": [
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 1,
          "introduction": "I am a super administrator",
          "name": "Super Admin",
          "password": "123456",
          "role": "admin",
          "updatedAt": null,
          "username": "admin"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 2,
          "introduction": "I am a editor",
          "name": "Editor",
          "password": "123456",
          "role": "editor",
          "updatedAt": null,
          "username": "editor"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 3,
          "introduction": "I am a admin",
          "name": "wuxiao",
          "password": "admin11",
          "role": "admin",
          "updatedAt": null,
          "username": "admin"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 4,
          "introduction": "I am a editor",
          "name": "xlz",
          "password": "123456",
          "role": "editor",
          "updatedAt": null,
          "username": "xlz"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 5,
          "introduction": "I am a editor",
          "name": "hzm",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 6,
          "introduction": "I am a editor",
          "name": "hzm",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm2"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 7,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 8,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 9,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 10,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 11,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 12,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 13,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 14,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 15,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 16,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 17,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 18,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 30,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 19,
          "introduction": "I am a editor",
          "name": "hzm3",
          "password": "admin11",
          "role": "editor",
          "updatedAt": null,
          "username": "hzm3"
        },
        {
          "age": 0,
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "createdAt": null,
          "id": 20,
          "introduction": "I am a editor",
          "name": "aaa",
          "password": "qaz12",
          "role": "editor",
          "updatedAt": null,
          "username": "aaa"
        }
      ],
      "pagination": {
        "currentPage": 0,
        "pageCount": 0,
        "pageSize": 0,
        "total": 20
      }
    },
    "message": "成功"
  };
  return res.json(data);
}
export default {
  'GET  /api/queryUsers': getFakeList,
};

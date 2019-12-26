import { queryUsers, delUser, saveUser, updateUser } from './service';

const Model = {
  namespace: 'tableList',
  // state 存储数据收到 Action 以后，会更新数据
  state: {
    list: [],
    total: null,
    page: null,
  },
  effects: {
    // @param payload 参数
    // @param call 执行异步函数调用接口
    // @param put 发出一个 Action，类似于 dispatch 将服务端返回的数据传递给上面的state
    *fetch({ payload }, { call, put }) {
      console.log(`payload====>${JSON.stringify(payload)}`);
      const response = yield call(queryUsers, payload);
      console.log(`response====>${JSON.stringify(response)}`);
      // yield put({
      //   type: 'save',   //reducers 中的方法
      //   data: Array.isArray(response.data.list) ? response.data.list : [],
      // })

      // yield put({
      //   type: 'save0',   //reducers 中的方法
      //   payload: {data:response.data.list,page:response.data.pagination}
      // })

      yield put({
        type: 'save3',
        payload: {
          data: response.data.list,
          total: response.data.pagination.total,
          page: response.data.pagination.currentPage,
        },
      });
    },
    *delUser({ payload }, { call, put }) {
      console.log(`delUser-payload====>${JSON.stringify(payload)}`);
      const response = yield call(delUser, payload);
      console.log(`delUser-response====>${JSON.stringify(response)}`);
      yield put({ type: 'reload' });
    },
    *saveUser({ payload }, { call, put }) {
      console.log(`saveUser-payload====>${JSON.stringify(payload)}`);
      const response = yield call(saveUser, payload);
      console.log(`saveUser-response====>${JSON.stringify(response)}`);
      yield put({ type: 'reload' });
    },
    *saveOrUpdateUser({ payload }, { call, put }) {
      console.log(`saveOrUpdateUser-payload====>${JSON.stringify(payload)}`);
      if (payload.id != null && payload.id !== '') {
        yield call(updateUser, payload);
        yield put({ type: 'reload' });
      } else {
        yield call(saveUser, payload);
        yield put({ type: 'reload' });
      }
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.page);
      yield put({ type: 'fetch', payload: { pagination: { pageSize: 5, ccurrentPage: page } } });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.data, // 更新state中的数据
      };
    },

    save0(state, action) {
      console.log(`---->${JSON.stringify(action.payload.page)}`);
      const list = action.payload.data;
      const pagination = action.payload.page;
      return { ...state, list, pagination };
    },

    save3(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
};
export default Model;

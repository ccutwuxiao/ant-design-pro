import {
  Table,
  Divider,
  Form,
  Dropdown,
  Menu,
  Icon,
  Modal,
  Result,
  Button,
  Input,
  Card,
  Pagination
} from 'antd';
// 引入阿里dva框架
import { connect } from 'dva';
import React, {Component} from "react";
import styles from './style.less';


const FormItem = Form.Item;
const { Search, TextArea } = Input;


class TableList  extends Component {
  state = {
    visible: false,
    done: false,
    current: undefined,
    name: null,
  };

  formLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 13,
    },
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'tableList/fetch',
      payload: {
        name: null,
        pagination: {
          pageSize: 5,
          currentPage: 1,
        }
      },
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
      current: undefined,
    });
  };

  showEditModal = item => {
    this.setState({
      visible: true,
      current: item,
    });
  };

  deleteItem = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'tableList/delUser',
      payload: {
        id,
      },
    });
  };

  handleDone = () => {
    this.setState({
      done: false,
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleSearchSubmit = () => {
    const { name } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'tableList/fetch',
      payload: {
        name,
        pagination: {
          pageSize: 5,
          currentPage: 1,
        }
      },
    });
  };

  onTextChange = event => {
    this.setState({ name: event.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { current } = this.state;
    const id = current ? current.id : '';
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      dispatch({
        type: 'tableList/saveOrUpdateUser',
        payload: {
          id,
          ...fieldsValue,
        },
      });
      this.setState({
        done: true,
      });
    });
  };


  onChange = page => {
    const { name } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'tableList/fetch',
      payload: {
        name,
        pagination: {
          pageSize: 5,
          currentPage: page,
        }
      },
    });
  };

  render() {
    const {list, loading,total,page} = this.props;
    const {form: { getFieldDecorator },} = this.props;
    const { visible, done, current={},} = this.state;


    const editAndDelete = (key, currentItem) => {
      if (key === 'edit') this.showEditModal(currentItem);
      else if (key === 'delete') {
        Modal.confirm({
          title: '删除任务',
          content: '确定删除该任务吗？',
          okText: '确认',
          cancelText: '取消',
          onOk: () => this.deleteItem(currentItem.id),
        });
      }
    };

    const modalFooter = done
      ? {
        footer: null,
        onCancel: this.handleDone,
      }
      : {
        okText: '保存',
        onOk: this.handleSubmit,
        onCancel: this.handleCancel,
      };

    // const Info = ({ title, value, bordered }) => (
    //   <div className={styles.headerInfo}>
    //     <span>{title}</span>
    //     <p>{value}</p>
    //     {bordered && <em />}
    //   </div>
    // );

    const MoreBtn = ({ item }) => (
      <Dropdown
        overlay={
          <Menu onClick={({ key }) => editAndDelete(key, item)}>
            <Menu.Item key="edit">编辑</Menu.Item>
            <Menu.Item key="delete">删除</Menu.Item>
          </Menu>
        }
      >
        <a>
          更多 <Icon type="down" />
        </a>
      </Dropdown>
    );

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
      },
      {
        title: 'Introduction',
        dataIndex: 'introduction',
        key: 'introduction',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
          <MoreBtn key="more" item={record} />
          <Divider type="vertical"/>
          <a onClick={this.showModal}>添加</a>
        </span>
        ),
      },
    ];

    const extraContent = (
      <div className={styles.extraContent}>
        <Search className={styles.extraContentSearch} placeholder="请输入姓名" value={this.state.name} onChange={this.onTextChange}
         onSearch={() => (this.handleSearchSubmit())}/>
      </div>
    );


    const getModalContent = () => {
      if (done) {
        return (
          <Result
            status="success"
            title="操作成功"
            subTitle="操作用户列表成功!"
            extra={
              <Button type="primary" onClick={this.handleDone}>
                知道了
              </Button>
            }
            className={styles.formResult}
          />
        );
      }

      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="姓名" {...this.formLayout}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '请输入姓名',
                },
              ],
              initialValue: current.name,
            })(<Input placeholder="请输入姓名" />)}
          </FormItem>
          <FormItem label="年龄" {...this.formLayout}>
            {getFieldDecorator('age', {
              rules: [
                {
                  required: true,
                  message: '请输入年龄',
                },
              ],
              initialValue: current.age,
            })(<Input placeholder="请输入介绍" />)}
          </FormItem>
          <FormItem {...this.formLayout} label="介绍">
            {getFieldDecorator('introduction', {
              rules: [
                {
                  message: '请输入至少五个字符！',
                  min: 5,
                },
              ],
              initialValue: current.introduction,
            })(<TextArea rows={4} placeholder="请输入至少五个字符" />)}
          </FormItem>
        </Form>
      );
    };

    return (
      <>
        {/* <PageHeaderWrapper> */}
          <Card
            className={styles.listCard}
            bordered={false}
            title="用户列表"
            style={{
              marginTop: 24,
            }}
            bodyStyle={{
              padding: '0 32px 40px 32px',
            }}
            extra={extraContent}
          >

            <Table rowKey='id' columns={columns} dataSource={list} loading={loading} pagination={false}/>
            <Pagination
              className="ant-table-pagination"
              total={total}
              current={page}
              pageSize={5}
              showTotal={total => `Total ${total} items`}
              showSizeChanger
              showQuickJumper
              onChange={this.onChange}
            />
            <Modal
            title={done ? null : `任务${current.size ===1 ? '编辑' : '添加'}`}
            className={styles.standardListForm}
            width={640}
            bodyStyle={
              done
                ? {
                  padding: '72px 0',
                }
                : {
                  padding: '28px 0 0',
                }
            }
            destroyOnClose
            visible={visible}
            {...modalFooter}
          >
            {getModalContent()}
          </Modal>
          </Card>
        {/* </PageHeaderWrapper> */}
      </>
    );
  }
};

// export default connect(({ list,total,page, loading }) => ({
//   list,
//   total,
//   page,
//   loading: loading.models.tableList,
// }))(Form.create()(TableList));

function mapStateToProps(state) {
  const { list,total,page} = state.tableList;
  return {
    loading: state.loading.models.tableList,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Form.create()(TableList));



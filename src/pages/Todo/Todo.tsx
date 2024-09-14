import { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Table, Row, Col, Card } from 'antd';
import { TodoDto } from '../../interface';
import columns from '../../components/TableColumn/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState<TodoDto[]>([]);
  const [editingTodo, setEditingTodo] = useState<TodoDto | null>(null);
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [form] = Form.useForm();

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = (values: { title: string; description: string }) => {
    const newTodo: TodoDto = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      completed: false,
    };
    
    // Update todos state
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    
    // Save updated todos to localStorage
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    
    form.resetFields();
  };

  // Edit an existing todo
  const handleEditTodo = (id: number, values: { title: string; description: string }) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, ...values } : todo)));
    setEditingTodo(null);
  };

  // Delete a todo
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: TodoDto[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: TodoDto) => ({
      disabled: record.title === 'Disabled User',
      name: record.title,
    }),
  };

  return (
    <>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={16} md={12}>
          <Card style={{ padding: '30px' }}>
            <Form form={form} onFinish={handleAddTodo} layout="vertical">
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input placeholder="Enter todo title" />
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: 'Please enter the description' }]}
              >
                <Input.TextArea placeholder="Enter todo description" />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Add Todo
              </Button>
            </Form>

            {/* Edit Modal */}
            {editingTodo && (
              <Modal
                open={!!editingTodo}
                title="Edit Todo"
                onCancel={() => setEditingTodo(null)}
                footer={null}
              >
                <Form
                  initialValues={{ title: editingTodo.title, description: editingTodo.description }}
                  onFinish={(values) => handleEditTodo(editingTodo.id, values)}
                  layout="vertical"
                >
                  <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please enter the title' }]}
                  >
                    <Input placeholder="Enter todo title" />
                  </Form.Item>
                  <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: 'Please enter the description' }]}
                  >
                    <Input.TextArea placeholder="Enter todo description" />
                  </Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save Changes
                  </Button>
                </Form>
              </Modal>
            )}
          </Card>
        </Col>
      </Row>

      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24}>
          <Table
            columns={columns(setEditingTodo, handleDeleteTodo)}
            dataSource={todos}
            rowKey="id"
            style={{ paddingTop: '22px', width: '950px' }}
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Todo;

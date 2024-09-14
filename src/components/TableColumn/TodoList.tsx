import { Button, TableColumnsType } from "antd";
import { TodoDto } from "../../interface";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = (
  setEditingTodo: (todo: TodoDto) => void,
  handleDelete: (id: number) => void 
): TableColumnsType<TodoDto> => [
  {
    title: 'Title',
    dataIndex: 'title',
    render: (text: string) => <>{text}</>,
    width: 100,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    render: (text: string) => (
      <div
        style={{
          whiteSpace: 'break-spaces',
          overflow: '-moz-initial',
          textOverflow: 'clip',
          maxWidth: 400,
        }}
        title={text} 
      >
        {text}
      </div>
    ),
    width: 200,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (_, record) => (
      <>
        <Button icon={<EditOutlined />} onClick={() => setEditingTodo(record)}  style={{ color: 'blue', borderColor: 'blue' }}/>
        <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} style={{ color: 'red', borderColor: 'red', marginLeft: 9 }} />
      </>
    ),
    width: 100,
  },
];

export default columns;

import { Table } from "antd";
import { Spin, Space } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function BookTable() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      title: "ISBN",
      dataIndex: "isbn",
      key: "isbn",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
        title:"Description", 
        dataIndex:"description", 
        key: "description"
    }, 
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <button onClick={async () => {
                setIsLoading(true); 
                try { 
                    console.log(record.id); 
                    const result = await axios.delete(`http://localhost:8080/books/${record.id}`); 
                    fetchData(); 
                    console.log(result); 
                } catch(err) { 
                    console.log(err); 
                } finally { 
                    setIsLoading(false); 
                }
            }}>delete</button>
          </Space>
        ),
    }
  ];
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get("http://localhost:8080/books");
      const arr = result.data._embedded.books; 
      for (let i = 0; i < arr.length; i ++) { 
            arr[i].key = uuidv4();
            arr[i].id = arr[i]._links.book.href.split('/')[4]; 
      }
      setBooks(arr); 
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return isLoading ? (
    <Spin />
  ) : (
    <Table dataSource={books} columns={columns} />
  );
}

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import axios from 'axios';
import Navbar from '../../components/Navbar/navbar';

const AdminDashboard = () => {
  const [schools, setSchools] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get('/api/schools'); // Replace with your API endpoint
      setSchools(response.data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  const addSchool = async (values) => {
    try {
      await axios.post('/api/schools', values); // Replace with your API endpoint
      form.resetFields();
      setVisible(false);
      fetchSchools(); // Refresh the list of schools
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  const editSchool = async (values) => {
    try {
      await axios.put(`/api/schools/${selectedSchool.id}`, values); // Replace with your API endpoint
      form.resetFields();
      setVisible(false);
      setSelectedSchool(null);
      fetchSchools(); // Refresh the list of schools
    } catch (error) {
      console.error('Error editing school:', error);
    }
  };

  const deleteSchool = async (id) => {
    try {
      await axios.delete(`/api/schools/${id}`); // Replace with your API endpoint
      fetchSchools(); // Refresh the list of schools
    } catch (error) {
      console.error('Error deleting school:', error);
    }
  };

  const handleEdit = (id) => {
    const school = schools.find((school) => school.id === id);
    setSelectedSchool(school);
    setVisible(true);
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Are you sure you want to delete this school?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => deleteSchool(id),
    });
  };

  const handleEditSchool = async (values) => {
    try {
      await editSchool(values);
    } catch (error) {
      console.error('Error updating school:', error);
    }
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, school) => (
        <span>
          <Button type="link" onClick={() => handleEdit(school.id)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(school.id)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4"> Admin   Dashboard</h2><br/><br/>
      <Button type="primary" onClick={() => setVisible(true)}>
        Add School
      </Button>

      <Table dataSource={schools} columns={columns} />

      <Modal
        title={selectedSchool ? 'Edit School' : 'Add New School'}
        visible={visible}
        onCancel={() => {
          setVisible(false);
          setSelectedSchool(null);
        }}
        footer={null}
      >
        <Form
          form={form}
          onFinish={selectedSchool ? handleEditSchool : addSchool}
          initialValues={selectedSchool}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="level"
            label="Level"
            rules={[{ required: true, message: 'Please enter the level' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="studentCount"
            label="Student Count"
            rules={[{ required: true, message: 'Please enter the student count' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please enter the type' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
          name="tuitionFees"
            label="Tuition Fees"
            rules={[{ required: true, message: 'Please enter the tuition fees' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: 'Please enter the location' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="contact"
            label="Contact"
            rules={[{ required: true, message: 'Please enter the contact' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="reviews"
            label="Reviews"
            rules={[{ required: true, message: 'Please enter the reviews' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image"
            rules={[{ required: true, message: 'Please enter the image' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="website"
            label="Website"
            rules={[{ required: true, message: 'Please enter the website' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {selectedSchool ? 'Update' : 'Add'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
    </div>
  );
};

export default AdminDashboard;
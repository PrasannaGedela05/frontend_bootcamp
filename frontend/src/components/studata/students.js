import React, { useState, useEffect } from 'react'; // Import React and hooks
import axios from 'axios'; // Import axios
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

const api = 'your-api-endpoint'; // Define your API endpoint here

export const Studentsdata = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(`${api}/students`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>Student Data</TableCaption>
        <Thead>
          <Tr>
            <Th>Student ID</Th>
            <Th>Name</Th>
            <Th isNumeric>Grade</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((student) => (
            <Tr key={student.id}>
              <Td>{student.id}</Td>
              <Td>{student.name}</Td>
              <Td isNumeric>{student.grade}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Student ID</Th>
            <Th>Name</Th>
            <Th isNumeric>Grade</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

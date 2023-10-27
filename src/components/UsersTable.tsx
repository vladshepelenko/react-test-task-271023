import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import { ScheduleModal } from './ScheduleModal';
import DataContext from '../dataContext';

export interface IBootstrapTableProps {
}

export default function UsersTable(props: IBootstrapTableProps) {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [currentUserId, setCurrentUserId] = React.useState<string>('');

  const { users } = React.useContext(DataContext);

  const handleClose = () => {
    setModalOpen(false);
    setCurrentUserId('');
  }

  const openModal = (userId: string) => {
    setCurrentUserId(userId);
    setModalOpen(true);
  }

  return (
    <div>
      <ScheduleModal show={modalOpen} userId={currentUserId} handleClose={handleClose} />
      <Table className="table" responsive>
        <thead>
          <tr>
            <td></td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            users.map((row, i) =>
              <tr key={i}>
                <td>
                  <Image fluid src={row.avatar?.link} thumbnail
                    style={{ maxWidth: '64px', maxHeight: '64px' }} />
                </td>
                <td>{`${row.firstName} ${row.lastName}`}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>
                  <Button variant="primary" onClick={() => openModal(row.id)}>
                    Schedule
                  </Button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

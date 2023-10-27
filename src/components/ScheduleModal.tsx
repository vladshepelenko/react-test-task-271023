import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DataContext, { ITimesheet, IUser } from '../dataContext';
import { ScheduleTable } from './ScheduleTable';

export interface IScheduleModalProps {
  userId: string;
  show: boolean;
  handleClose: () => void;
}

export function ScheduleModal(props: IScheduleModalProps) {
  const [currentUser, setCurrentUser] = React.useState<IUser>();
  const [usersTimesheets, setUsersTimesheets] = React.useState<ITimesheet[]>([]);
  const { users, timesheets } = React.useContext(DataContext);

  React.useEffect(() => {
    const filteredUsers = users.filter(user => user.id === props.userId);

    if (filteredUsers.length) {
      setCurrentUser(filteredUsers[0]);
    }

    setUsersTimesheets(timesheets.filter(timesheet => timesheet.userId === props.userId));
  }, [props.userId]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (+value < 0) {
      setUsersTimesheets(timesheets.filter(timesheet => timesheet.userId === props.userId));
    } else {
      setUsersTimesheets(timesheets.filter(timesheet => timesheet.userId === props.userId
        && (new Date(timesheet.startTime).getMonth() === +value
          || new Date(timesheet.endTime).getMonth() === +value)));
    }
  }

  return (
    <Modal
      size="lg"
      fullscreen={true}
      show={props.show}
      onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`${currentUser?.firstName} ${currentUser?.lastName}'s`} schedule</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='p-2'>
          <Form.Select size="lg" onChange={handleDateChange}>
            <option value={-1}>Select month to filter...</option>
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </Form.Select>
        </div>
        <ScheduleTable schedule={usersTimesheets} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

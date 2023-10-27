import * as React from 'react';
import Table from 'react-bootstrap/Table';
import { ITimesheet } from '../dataContext';

export interface IScheduleTableProps {
  schedule: ITimesheet[];
}

export function ScheduleTable(props: IScheduleTableProps) {
  const convertDate = (date: string) => new Date(date).toLocaleDateString('en-us',
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: '2-digit',
      minute: '2-digit'
    });
  return (
    <div>
      <Table className="table" responsive>
        <thead>
          <tr>
            <td>Company</td>
            <td>Status</td>
            <td>Start time</td>
            <td>End time</td>
            <td>Minutes</td>
            <td>Break</td>
          </tr>
        </thead>
        <tbody>
          {
            props.schedule.map((row, i) =>
              <tr key={i}>
                <td>{row.companyId}</td>
                <td>{row.status}</td>
                <td>{convertDate(row.startTime)}</td>
                <td>{convertDate(row.endTime)}</td>
                <td>{row.minutes}</td>
                <td>{row.breakMinutes}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

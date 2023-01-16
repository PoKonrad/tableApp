import { TableCell, TableRow, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { showModal } from '../features/modal/modalSlice';

type TableItemProps = {
  tableItem: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };
};

const TableItem: React.FC<TableItemProps> = ({ tableItem }) => {
  const dispatch = useDispatch();
  return (
    <TableRow
      data-testid="tableRow"
      onClick={() => dispatch(showModal(tableItem))}
      sx={{
        backgroundColor: tableItem.color
      }}
    >
      <TableCell align="center">
        <Typography minWidth="3rem">{tableItem.id}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography minWidth="15rem">{tableItem.name}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography minWidth="4rem">{tableItem.year}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;

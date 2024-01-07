import React from 'react';
import { useTable } from 'react-table';

const Table = () => {
  
  const data = React.useMemo(
        () => [
          {
            image: '/image/a.avif',
            name: 'Complete Python Bootcamp in PythonJ',
            category : 'Design',
            sale: 150,
            rating: '⭐️ 4.5',
            earning: '$610.50',
            visitor: 10000,
          },
          {
            image: '/image/b.jpeg',
            name: 'Advanced Excel Formulas & Functions',
            category : 'Development',
            sale: 20,
            rating: '⭐️ 5.0',
            earning: '$55.50',
            visitor: 4000,
          },
          {
            image: '/image/c.jpeg',
            name: 'Video Editor in Filmora9',
            category : 'Photography',
            sale: 56,
            rating: '⭐️ 4.5',
            earning: '$610.50',
            visitor: 3000,
          },
          {
            image: '/image/d.avif',
            name: 'Online Meeting Facilitation: The 4 Secret Keys',
            category : 'Marketing',
            sale: 150,
            rating: '⭐️ 4.5',
            earning: '$610.50',
            visitor: 24512,
          },
          {
            image: '/image/e.jpeg',
            name: 'Intermediate Blues Rhythm Guitar',
            category : 'Music',
            sale: 30,
            rating: '⭐️ 5.0',
            earning: '$110.50',
            visitor: 6512,
          },
          {
            image: '/image/f.jpg',
            name: 'B2B Sales Masterclass: People-Focused Selling',
            category : 'Business',
            sale: 90,
            rating: '⭐️ 4.5',
            earning: '$240.50',
            visitor: 512,
          },
        ],
        []
      );
      
      const columns = React.useMemo(
          () => [
            {
              Header: 'Name',
              accessor: 'image',
              Cell: ({ value }) => <img src={process.env.PUBLIC_URL + value} alt="Profile" style={{ maxWidth: '50px', maxHeight: '50px' }} />,
            },
            {
              Header: " ",
              accessor: "name",
            },
            {
              Header: "Category", 
              accessor: "category",
            },
            {
              Header: "Sale",
              accessor: "sale",
            },
            {
              Header: "Rating",
              accessor: "rating",
            },
            {
              Header: "Earning",
              accessor: "earning",
            },
            {
              Header: "Visitor",
              accessor: "visitor",
            },
          ],
          []
      );
    

  // Use the useTable hook to create table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ width: '100%' }}>
      <thead style={{ backgroundColor:'#E0E0E0'}}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ textAlign: 'left', padding: '8px' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} style={{ textAlign: 'left', padding: '8px' }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

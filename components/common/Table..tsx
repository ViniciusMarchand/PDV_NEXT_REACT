import React, { ReactNode } from 'react';

// Define um único tipo para as props de todos os componentes
type TableComponentProps = {
  children: ReactNode;
};
type TableComponentWSProps = {
  children: ReactNode;
  className?: string;
};

// Componente principal Table
const Table: React.FC<TableComponentProps> & {
  Header: React.FC<TableComponentProps>;
  Body: React.FC<TableComponentProps>;
  Row: React.FC<TableComponentProps>;
  Cell: React.FC<TableComponentWSProps>;
} = ({ children }) => {
  return <table className='w-full'>{children}</table>;
};

Table.Header = ({ children }) => {
  return <thead className='font-bold'>{children}</thead>;
};
Table.Header.displayName = 'Table.Header';

Table.Body = ({ children }) => {
  return <tbody>{children}</tbody>;
};
Table.Body.displayName = 'Table.Body';

Table.Row = ({ children }) => {
  return <tr className='text-center border-b'>{children}</tr>;
};
Table.Row.displayName = 'Table.Row';

Table.Cell = ({ children, className }) => {

  return <td className={"text-center py-1 " + className}>{children}</td>;
};
Table.Cell.displayName = 'Table.Cell';

export default Table;
